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
});
