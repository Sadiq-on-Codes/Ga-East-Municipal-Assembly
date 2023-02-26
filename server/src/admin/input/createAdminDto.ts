import { IsEmail, Length } from 'class-validator';

export class CreateAdminDto {
  @Length(3)
  username: string;
  @IsEmail()
  email: string;
  @Length(8)
  password: string;
  @Length(8)
  retypedPassword: string;
}
