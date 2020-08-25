export interface DomainEvent {
  readonly aggregateId: string;
  readonly time: Date;
}
