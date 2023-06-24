import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './events.entity';
import { Repository } from 'typeorm';
import APIFeatures from 'src/apiFeatures/apiFeatures';

@Injectable()
export class EventsService {
  private readonly logger = new Logger(EventsService.name);

  constructor(
    @InjectRepository(Event)
    private eventService: Repository<Event>,
  ) {}

  async getAllEvents(queryParams): Promise<Event[]> {
    const queryBuilder = this.eventService.createQueryBuilder();

    // Apply filters
    const apiFeatures = new APIFeatures(queryBuilder, queryParams)

      .filter()
      .sort()
      .limitFields()
      .paginate();

    // Execute query
    const events = await apiFeatures.getQuery().getMany();

    if (!events) {
      throw new NotFoundException(`No events available`);
    }
    return events;
  }

  async getUpcomingEvents(): Promise<Event[]> {
    const currentDate = new Date();

    const upcomingEvents = await this.eventService
      .createQueryBuilder('event')
      .where('event.eventDate >= :currentDate', { currentDate })
      .getMany();
    if (!upcomingEvents || upcomingEvents.length === 0) {
      this.logger.warn('No upcoming events found');
      throw new NotFoundException('No upcoming events');
    }

    this.logger.log(`Found ${upcomingEvents.length} upcoming events`);
    return upcomingEvents;
  }

  async getPastEvents(): Promise<Event[]> {
    const currentDate = new Date();

    const pastEvents = await this.eventService
      .createQueryBuilder('event')
      .where('event.eventDate < :currentDate', { currentDate })
      .getMany();

    if (!pastEvents || pastEvents.length === 0) {
      this.logger.warn('No past events found');
      throw new NotFoundException('No past events');
    }

    this.logger.log(`Found ${pastEvents.length} past events`);
    return pastEvents;
  }
}
