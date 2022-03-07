import { binarySearch } from './binarySearch';

it('imperative: should match', () => {
  expect(binarySearch([0], 0)).toEqual(0);
  expect(binarySearch([0, 1], 0)).toEqual(0);
  expect(binarySearch([0, 1], 1)).toEqual(1);

  expect(binarySearch([0, 1, 2], 0)).toEqual(0);
  expect(binarySearch([0, 1, 2], 1)).toEqual(1);
  expect(binarySearch([0, 1, 2], 2)).toEqual(2);

  expect(binarySearch([0, 1, 2, 3], 0)).toEqual(0);
  expect(binarySearch([0, 1, 2, 3], 1)).toEqual(1);
  expect(binarySearch([0, 1, 2, 3], 2)).toEqual(2);
  expect(binarySearch([0, 1, 2, 3], 3)).toEqual(3);

  expect(binarySearch([2, 3, 5, 7, 9, 10, 23], 7)).toEqual(3);
  expect(binarySearch([2, 3, 5, 7, 9, 10, 23], 5)).toEqual(2);

  expect(binarySearch([2, 3, 5, 7, 8, 10, 23], 10)).toEqual(5);
});

it('recursive: should match', () => {
  expect(binarySearch([0], 0)).toEqual(0);
  expect(binarySearch([0, 1], 0)).toEqual(0);
  expect(binarySearch([0, 1], 1)).toEqual(1);

  expect(binarySearch([0, 1, 2], 0)).toEqual(0);
  expect(binarySearch([0, 1, 2], 1)).toEqual(1);
  expect(binarySearch([0, 1, 2], 2)).toEqual(2);

  expect(binarySearch([0, 1, 2, 3], 0)).toEqual(0);
  expect(binarySearch([0, 1, 2, 3], 1)).toEqual(1);
  expect(binarySearch([0, 1, 2, 3], 2)).toEqual(2);
  expect(binarySearch([0, 1, 2, 3], 3)).toEqual(3);

  expect(binarySearch([2, 3, 5, 7, 9, 10, 23], 7)).toEqual(3);
  expect(binarySearch([2, 3, 5, 7, 9, 10, 23], 5)).toEqual(2);

  expect(binarySearch([2, 3, 5, 7, 8, 10, 23], 10)).toEqual(5);
});
