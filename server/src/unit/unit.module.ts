import { Module } from '@nestjs/common';
import { UnitController } from './unit.controller';
import { UnitService } from './unit.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Unit } from './unit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Unit])],
  providers: [UnitService],
  controllers: [UnitController],
})
export class UnitModule {}
