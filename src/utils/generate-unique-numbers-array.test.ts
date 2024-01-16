import { describe, it, expect } from 'vitest';
import { generateUniqueNumbersArray } from './generate-unique-numbers-array';

describe('generateUniqueNumbersArray()', () => {
	it('should return an array with 3 numbers between 0-50', () => {
		const response = generateUniqueNumbersArray(50, 3);

		expect(response).toHaveLength(3);
		response.forEach((item) => {
			expect(item).toBeLessThanOrEqual(50);
			expect(item).toBeGreaterThanOrEqual(0);
		});
	});

	// FIXME all these descriptions are bad. Rewrite them.
	it('should throw an error if the numberOfItems is greater than length + 1', () => {
		expect(() => generateUniqueNumbersArray(2, 4)).toThrowError(
			'numberOfItems cannot be greater than length + 1'
		);
	});
});
