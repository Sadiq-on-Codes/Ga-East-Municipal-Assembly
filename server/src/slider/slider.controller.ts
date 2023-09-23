import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { SliderService } from './slider.service';
import { SliderDto } from './input/sliderDto';
import { Slider } from './slider.entity';
import { UpdateSliderDto } from './input/updateSliderDto';

@Controller('slider')
export class SliderController {
  constructor(private sliderService: SliderService) {}

  @Get()
  async getAll(@Query() query: any): Promise<Slider[]> {
    return this.sliderService.getAllSlider(query);
  }

  @Get(':id')
  async getDepartmentPdfById(@Param('id') id: number): Promise<Slider> {
    const unit = await this.sliderService.getSliderById(id);

    if (!unit) {
      throw new NotFoundException(`Unit with ID ${id} not found`);
    }

    return unit;
  }

  @Post()
  async createSlider(
    @Body() sliderDto: SliderDto,
  ): Promise<[{ message: string }, Slider]> {
    return this.sliderService.createSlider(sliderDto);
  }

  @Delete('delete/:id')
  async deleteUnitById(@Param('id') sliderId: number): Promise<string> {
    return await this.sliderService.deleteSlider(sliderId);
  }
  @Patch('update/:id')
  async updateSlider(
    @Param('id') id: number,
    @Body() updateSliderDto: UpdateSliderDto,
  ): Promise<[{ message: string }, Slider]> {
    return this.sliderService.updateSlider(id, updateSliderDto);
  }
}
