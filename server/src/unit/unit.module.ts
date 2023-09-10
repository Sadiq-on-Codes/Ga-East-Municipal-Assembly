import { Module } from '@nestjs/common';
import { UnitController } from './unit.controller';
import { UnitService } from './unit.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Unit } from './unit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Unit])],
  controllers: [UnitController],
  providers: [UnitService],
  exports: [TypeOrmModule.forFeature([Unit])],
})
export class UnitModule {}
