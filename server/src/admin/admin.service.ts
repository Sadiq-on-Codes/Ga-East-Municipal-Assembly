import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Admin } from './admin.entity';
import * as bcrypt from 'bcrypt';
import { CreateAdminDto } from './input/createAdminDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
  ) {}

  //generates a jwt token for admin
  public getTokenForAdmin(admin: Admin): string {
    return this.jwtService.sign({
      username: admin.username,
      sub: admin.id,
    });
  }

  public async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  async createAdmin(createAdminDto: CreateAdminDto) {
    const { username, email, password, retypedPassword } = createAdminDto;
    const admin = new Admin();

    if (password !== retypedPassword) {
      throw new BadRequestException(['Passwords do not match']);
    }

    const existingAdmin = await this.adminRepository.findOne({
      where: [
        {
          username,
        },
        { email },
      ],
    });
    if (existingAdmin) {
      throw new BadRequestException(['username or email is already taken']);
    }

    admin.username = username;
    admin.password = await this.hashPassword(password);
    admin.email = email;

    return {
      ...(await this.adminRepository.save(admin)),
      token: this.getTokenForAdmin(admin),
    };
  }
}
