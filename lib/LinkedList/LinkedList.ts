import { NotFoundError } from '../exceptions';

class Node<T> {
  public data: T;
  public next: Node<T> | null;
  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList<T> {
  private header: Node<T> | null;
  constructor() {
    this.header = null;
  }
  public add(data: T): void {
    const node = new Node(data);
    if (this.header === null) {
      this.header = node;
      return;
    } else {
      let current = this.header;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
  }
  public remove(): T {
    if (this.header !== null) {
      const removed = this.header;
      this.header = this.header.next;
      return removed.data;
    } else throw new NotFoundError('Cannot remove an empty list');
  }
  public clear(): void {
    let current: Node<T> | null = this.header;
    let nextNode: Node<T> | null;

    while (current !== null) {
      nextNode = current.next;
      current.next = null;
      current = nextNode;
    }

    this.header = null;
  }
  *[Symbol.iterator](): IterableIterator<T> {
    let current = this.header;
    while (current !== null) {
      yield current.data;
      current = current.next;
    }
  }
}
