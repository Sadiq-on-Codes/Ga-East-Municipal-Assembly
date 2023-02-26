import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Admin } from './admin.entity';
import { AdminService } from './admin.service';
import { CurrentAdminUser } from './current-admin.decorator';
import { CreateAdminDto } from './input/createAdminDto';

@Controller('admin/auth')
export class AdminController {
  //auth guard calls the strategy to verify the credentials

  constructor(private readonly adminService: AdminService) {}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@CurrentAdminUser() user: Admin) {
    return {
      adminId: user.id,
      token: this.adminService.getTokenForAdmin(user),
    };
  }

  @Post()
  async create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.createAdmin(createAdminDto);
  }
}
