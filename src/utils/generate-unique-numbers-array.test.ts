import { describe, it, expect } from 'vitest';
import { generateUniqueNumbersArray } from './generate-unique-numbers-array';

describe('generateUniqueNumbersArray()', () => {
	it('should return an array with 3 numbers between 0 and 50', () => {
		const response = generateUniqueNumbersArray(3, 0, 50);

		expect(response).toHaveLength(3);
		response.forEach((item) => {
			expect(item).toBeLessThanOrEqual(50);
			expect(item).toBeGreaterThanOrEqual(0);
		});
	});

	it('should throw an error if the maximum parameter is greater than the minimum parameter', () => {
		expect(() => generateUniqueNumbersArray(1, 9, 8)).toThrowError(
			'Maximum must be greater than or equal to the minimum.'
		);
		expect(() => generateUniqueNumbersArray(1, -7, -9)).toThrowError();

		expect(() => generateUniqueNumbersArray(1, 8, 8)).not.toThrowError();
		expect(() => generateUniqueNumbersArray(1, -9, -7)).not.toThrowError();
	});

	it('should throw an error if the length parameter is greater than the difference between the maximum and minimum numbers plus one', () => {
		expect(() => generateUniqueNumbersArray(4, 2, 4)).toThrowError(
			'The length of the array cannot be greater than the difference between the maximum and minimum numbers plus one.'
		);

		expect(() => generateUniqueNumbersArray(4, -4, -2)).toThrowError();
		expect(() => generateUniqueNumbersArray(3, 6, 8)).not.toThrowError();
		expect(() => generateUniqueNumbersArray(3, -6, -4)).not.toThrowError();
	});

	it('should return an array with 10 numbers those being exactly 0 through 9', () => {
		const response = generateUniqueNumbersArray(10, 0, 9);

		// sorting the array
		const sorted = response.toSorted();
		sorted.forEach((item, index) => {
			expect(item).toEqual(index);
		});
	});
});
