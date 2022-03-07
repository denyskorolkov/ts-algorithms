/**
 * Binary Search Algorithm - Iterative Implementation
 * @param input Sorted array of n integers
 * @param target Target value
 *
 * @returns Index of target
 */
export const binarySearch = (input: number[], target: number): number => {
  let from = 0;
  let until = input.length - 1;

  const setInput = () => from + Math.trunc((until - from) / 2);

  let index = 0;

  while (from <= until) {
    index = setInput();

    if (target === input[index]) return index;
    if (target > input[index]) from = index + 1;
    if (target < input[index]) until = index - 1;
  }
};

/**
 * Binary Search Algorithm - Recursive Implementation
 * @param input Sorted array of n integers
 * @param target Target value
 * @param from From value
 * @param until Until value
 *
 * @returns Index of target
 */
export const binarySearchRecursive = (
  input: number[],
  target: number,
  from: number = 0,
  until: number = input.length - 1
): number => {
  let index = from + Math.trunc((until - from) / 2);

  if (target === input[index]) return index;
  if (target > input[index]) from = index + 1;
  if (target < input[index]) until = index - 1;

  binarySearchRecursive(input, target, from, until);
};
