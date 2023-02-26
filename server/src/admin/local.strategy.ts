import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Strategy } from 'passport-local';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';
import * as bcrypt from 'bcrypt';
//this class is intended to check admin username,email and password

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(LocalStrategy.name);

  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
  ) {
    super();
  }

  public async validate(username: string, password: string): Promise<any> {
    //this line of code tries to find the admin by his username
    const admin = await this.adminRepository.findOne({
      where: {
        username,
      },
    });

    //in the case the admin is not found we throw an error
    if (!admin) {
      this.logger.debug(`Admin ${username} not found`);
      throw new UnauthorizedException();
    }

    //when admin credentials are invalid
    if (!(await bcrypt.compare(password, admin.password))) {
      this.logger.debug(`Invalid credentials for user ${username}`);
      throw new UnauthorizedException();
    }

    return admin;
  }
}
