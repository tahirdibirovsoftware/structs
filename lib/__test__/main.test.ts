import { NotFoundError } from '../exceptions';
import { LinkedList } from '../index';

describe('LinkedList', () => {
  const createList = (values: unknown[] = []): LinkedList<unknown> => {
    const list = new LinkedList();
    values.forEach((v) => list.add(v));
    return list;
  };

  describe('Iteration', () => {
    test('should iterate over primitive values', () => {
      const list = createList([1, 2, 3]);
      expect(Array.from(list)).toEqual([1, 2, 3]);
    });

    test('should iterate over object values', () => {
      const objects = [
        { id: 1, name: 'Ibrahim' },
        { id: 2, name: 'Abdullah' },
      ];
      const list = createList(objects);
      expect(Array.from(list)).toEqual(objects);
    });

    test('should iterate using generator function', () => {
      const list = createList([4, 6, 7]);
      const gen = list.listGenerator();

      expect(gen.next()).toEqual({ value: 4, done: false });
      expect(gen.next()).toEqual({ value: 6, done: false });
      expect(gen.next()).toEqual({ value: 7, done: false });
      expect(gen.next()).toEqual({ value: undefined, done: true });
    });
  });

  describe('Removal', () => {
    test('should remove elements from head and return their values', () => {
      const list = createList([44, 32, 22]);
      expect(list.remove()).toBe(44);
      expect(list.remove()).toBe(32);
      expect(list.remove()).toBe(22);
      expect(() => list.remove()).toThrow(NotFoundError);
    });
  });

  describe('Clearing', () => {
    test('should clear the LinkedList', () => {
      const list = createList([6, 3, 2]);
      list.clear();
      expect(Array.from(list)).toEqual([]);
    });
  });

  describe('Size', () => {
    test('should return correct size after operations', () => {
      const list = createList([1, 2, 3]);
      list.clear();
      expect(list.getSize()).toBe(0);

      list.add(1);
      list.add(2);
      list.add(3);
      list.remove();
      expect(list.getSize()).toBe(2);
    });
  });

  describe('Reversal', () => {
    test('should correctly reverse different list cases', () => {
      const list = createList([1, 2, 3]);
      const emptyList = createList();
      const singleList = createList([10]);

      list.reverse();
      emptyList.reverse();
      singleList.reverse();

      expect(Array.from(list)).toEqual([3, 2, 1]);
      expect(Array.from(emptyList)).toEqual([]);
      expect(Array.from(singleList)).toEqual([10]);
    });
  });
});
