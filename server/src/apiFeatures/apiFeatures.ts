import { SelectQueryBuilder } from 'typeorm';

interface QueryString {
  page?: string;
  sort?: string;
  limit?: string;
  fields?: string;
  [key: string]: string | undefined;
}

class APIFeatures<T> {
  private query: SelectQueryBuilder<T>;
  private queryString: QueryString;

  constructor(query: SelectQueryBuilder<T>, queryString: QueryString) {
    this.query = query;
    this.queryString = queryString;
  }
  public getQuery(): SelectQueryBuilder<T> {
    return this.query;
  }
  filter(): APIFeatures<T> {
    const queryObj = { ...this.queryString };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    this.query = this.query.where(JSON.parse(queryStr));
    return this;
  }

  sort(): APIFeatures<T> {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.orderBy(sortBy);
    } else {
      this.query =
        this.query.expressionMap.mainAlias.name === 'category'
          ? this.query.orderBy('category.createdAt', 'DESC')
          : this.query.orderBy('createdAt', 'DESC');
    }
    return this;
  }

  limitFields(): APIFeatures<T> {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ');

      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select();
    }
    return this;
  }

  paginate(): APIFeatures<T> {
    const page = parseInt(this.queryString.page || '1', 10);
    const limit = parseInt(this.queryString.limit || '100', 10);
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).take(limit);
    return this;
  }
}

export default APIFeatures;
