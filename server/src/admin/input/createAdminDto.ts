import { IsEmail, Length, IsNotEmpty } from 'class-validator';

export class CreateAdminDto {
  @Length(3)
  @IsNotEmpty({ message: 'Username is a required field and cannot be empty' })
  username: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Email is a required field and cannot be empty' })
  email: string;

  @Length(8)
  @IsNotEmpty({ message: 'Password is a required field and cannot be empty' })
  password: string;

  @Length(8)
  retypedPassword: string;
}
