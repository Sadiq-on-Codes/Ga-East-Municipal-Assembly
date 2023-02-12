import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findOrCreateUser(userData: {
    name: string;
    email: string;
    website?: string;
  }) {
    let user = await this.userRepository.findOne({
      where: { email: userData.email },
    });
    if (!user) {
      user = await this.userRepository.save({
        name: userData.name,
        email: userData.email,
        website: userData.website,
      });
    }
    return user;
  }
}
