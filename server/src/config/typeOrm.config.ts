import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default registerAs('typeOrm.config', (): TypeOrmModuleOptions => {
  if (process.env.NODE_ENV === 'production') {
    console.log(process.env.DB_PASSWORD_PROD);
    return {
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: false, // Disable automatic database synchronization in production
    };
  } else {
    return {
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    };
  }
});
