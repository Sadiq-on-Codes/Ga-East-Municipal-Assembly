import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './events.entity';
import { Repository } from 'typeorm';
import APIFeatures from 'src/apiFeatures/apiFeatures';
import { EventDto } from './input/createEventDto';

@Injectable()
export class EventsService {
  private readonly logger = new Logger(EventsService.name);

  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
  ) {}

  async getAllEvents(queryParams): Promise<Event[]> {
    const queryBuilder = this.eventRepository.createQueryBuilder();

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
  async createEvent(eventDto: EventDto): Promise<[{ message: string }, Event]> {
    try {
      const { title, article, image, eventDate } = eventDto;

      const event = new Event();
      event.title = title;
      event.article = article;
      event.image = image || null;
      event.eventDate = new Date(eventDate);
      event.createdAt = new Date();
      const createdEvent = await this.eventRepository.save(event);

      this.logger.log(`New event with id ${createdEvent.id} has been created.`);

      return [{ message: 'new event created' }, createdEvent];
    } catch (error) {
      this.logger.error(
        `Error occurred while creating a new event. Error: ${error}`,
      );
      throw error;
    }
  }

  async getUpcomingEvents(): Promise<Event[]> {
    const currentDate = new Date();

    const upcomingEvents = await this.eventRepository
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

    const pastEvents = await this.eventRepository
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
