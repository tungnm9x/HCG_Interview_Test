export class PaginationEvent {
  constructor(public current: number, public pageSize: number) {}
  get offset() {
    return (this.current - 1) * this.pageSize;
  }

  get limit() {
    return this.pageSize;
  }
}
