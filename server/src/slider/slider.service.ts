import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Slider } from './slider.entity';
import { SliderDto } from './input/sliderDto';
import { UpdateSliderDto } from './input/updateSliderDto';
import APIFeatures from 'src/apiFeatures/apiFeatures';

@Injectable()
export class SliderService {
  private readonly logger = new Logger(SliderService.name);

  constructor(
    @InjectRepository(Slider)
    private sliderRepository: Repository<Slider>,
  ) {}

  async getAllSlider(queryParams): Promise<Slider[] | any> {
    const queryBuilder = this.sliderRepository.createQueryBuilder();

    const apiFeatures = new APIFeatures(queryBuilder, queryParams)

      .filter()
      .sort()
      .limitFields()
      .paginate();

    // Execute query
    const [slider, totalLength] = await apiFeatures
      .getQuery()
      .getManyAndCount();

    if (!slider) {
      throw new NotFoundException(`No post to show`);
    }
    return [{ totalLength }, slider];
  }

  async getSliderById(id: number): Promise<Slider> {
    const slider = await this.sliderRepository.findOne({
      where: {
        id,
      },
    });

    if (!slider) {
      throw new NotFoundException(`slider with ID ${id} not found`);
    }

    this.logger.log(`Fetched slider with ID ${id}`);

    return slider;
  }

  async createSlider(
    sliderDto: SliderDto,
  ): Promise<[{ message: string }, Slider]> {
    try {
      const { title, description, image } = sliderDto;

      const slider = new Slider();
      slider.title = title;
      slider.description = description;
      slider.image = image || null;

      slider.createdAt = new Date();
      const createdSlider = await this.sliderRepository.save(slider);

      this.logger.log(
        `New slider with id ${createdSlider.id} has been created.`,
      );

      return [{ message: 'new slider created' }, createdSlider];
    } catch (error) {
      this.logger.error(
        `Error occurred while creating a new slider. Error: ${error}`,
      );
      throw error;
    }
  }

  async updateSlider(
    id: number,
    updateSliderDto: UpdateSliderDto,
  ): Promise<[{ message: string }, Slider]> {
    const slider = await this.sliderRepository.findOne({
      where: {
        id,
      },
    });

    if (!slider) {
      throw new NotFoundException('unit not found');
    }

    slider.title = updateSliderDto.title || slider.title;
    slider.description = updateSliderDto.description || slider.description;
    slider.image = updateSliderDto.image || slider.image;
    slider.updatedAt = new Date();

    return [
      { message: 'Slider updated successfully' },
      await this.sliderRepository.save(slider),
    ];
  }

  async deleteSlider(id: number): Promise<string> {
    const result = await this.sliderRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Slider with ID ${id} not found`);
    }

    this.logger.log(`Deleted Slider with ID ${id}`);
    return 'Slider deleted';
  }
}
