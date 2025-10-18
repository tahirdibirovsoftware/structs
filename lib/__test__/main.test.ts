import { NotFoundError } from '../exceptions';
import { LinkedList } from '../index';

describe('LinkedList', () => {
  test('should iterate over primitive value', () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    const arrayList = Array.from(list);
    expect(arrayList).toEqual([1, 2, 3]);
  });
  test('should iterate over object data', () => {
    const list = new LinkedList();
    list.add({ id: 1, name: 'Ibrahim' });
    list.add({ id: 2, name: 'Abdullah' });
    const arrayList = Array.from(list);
    expect(arrayList).toEqual([
      { id: 1, name: 'Ibrahim' },
      { id: 2, name: 'Abdullah' },
    ]);
  });
  test('should remove element from header and return its value', () => {
    const list = new LinkedList();
    list.add(44);
    list.add(32);
    list.add(22);
    expect(list.remove()).toBe(44);
    expect(list.remove()).toBe(32);
    expect(list.remove()).toBe(22);
    expect(() => list.remove()).toThrow(NotFoundError);
  });
  test('should clear the LinkedList', () => {
    const list = new LinkedList();
    list.add(6);
    list.add(3);
    list.add(2);
    list.clear();
    const arrayList = Array.from(list);
    expect(arrayList).toEqual([]);
  });
  test('should iterate with generate function', () => {
    const list = new LinkedList();
    list.add(4);
    list.add(6);
    list.add(7);
    const listGen = list.listGenerator();
    expect(listGen.next().value).toBe(4);
    expect(listGen.next().value).toBe(6);
    expect(listGen.next().value).toBe(7);
    expect(listGen.next().done).toBe(true);
  });
  test('should return correct size of list', () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.clear();
    expect(list.getSize()).toBe(0);
    list.add(1);
    list.add(2);
    list.add(3);
    list.remove();
    expect(list.getSize()).toBe(2);
  });
  test('it should reverse the list', () => {
    const list = new LinkedList();
    const emptyList = new LinkedList();
    emptyList.reverse();
    const listWithSingleElement = new LinkedList();
    listWithSingleElement.reverse();
    list.add(1);
    list.add(2);
    list.add(3);
    list.reverse();
    const reversedArrayList = Array.from(list);
    const reversedEmptyArrayList = Array.from(emptyList);
    const reversedArrayListWithSingleElement = Array.from(listWithSingleElement);
    expect(reversedArrayList).toEqual([3, 2, 1]);
    expect(reversedEmptyArrayList).toEqual([]);
    expect(reversedArrayListWithSingleElement).toEqual([]);
  });
});
