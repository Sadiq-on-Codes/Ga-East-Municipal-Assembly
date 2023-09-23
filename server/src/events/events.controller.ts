import { Body, Controller, Get, Logger, Post, Query } from '@nestjs/common';
import { EventsService } from './events.service';
import { Event } from './events.entity';
import { EventDto } from './input/createEventDto';

@Controller('events')
export class EventsController {
  private readonly logger = new Logger(EventsController.name);
  constructor(private readonly eventService: EventsService) {}

  @Post('create/event')
  async createEvent(
    @Body() eventDto: EventDto,
  ): Promise<[{ message: string }, Event]> {
    return await this.eventService.createEvent(eventDto);
  }
  @Get()
  async getAll(@Query() query: any): Promise<Event[]> {
    this.logger.debug(`Fetching all events`);
    // Use the apiFeatures class to filter, sort, and limit the results
    return this.eventService.getAllEvents(query);
  }

  @Get('upevents')
  async getAllUpComingEvents(): Promise<Event[]> {
    this.logger.debug(`Fetching all upcoming events`);
    return this.eventService.getUpcomingEvents();
  }

  @Get('pastevents')
  async getAllPastEvents(): Promise<Event[]> {
    this.logger.debug(`Fetching all past events`);
    return this.eventService.getPastEvents();
  }
}
