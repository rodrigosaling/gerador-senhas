// https://stackoverflow.com/a/55598692/785985
// Return values in the range of [0, 1)
function randomFloat(): number {
	const int = crypto.getRandomValues(new Uint32Array(1))[0];
	return int / 2 ** 32;
}

//  Return integers in the range of [min, max)
function randomInt(min: number, max: number): number {
	const range = max - min;
	return Math.floor(randomFloat() * range + min);
}

// Generate an array of integers in the range of [min, max)
function randomIntArray(length: number, min: number, max: number): number[] {
	return new Array(length).fill(0).map(() => randomInt(min, max));
}

export function generateUniqueNumbersArray(
	length: number,
	minimum: number,
	maximum: number
): number[] {
	const maximumInclusive = maximum + 1;

	if (maximumInclusive <= minimum) {
		throw new Error('Maximum must be greater than or equal to the minimum.');
	}

	const uniqueNumbersLimit = maximumInclusive - minimum;
	if (length > uniqueNumbersLimit) {
		throw new Error(
			'The length of the array cannot be greater than the difference between the maximum and minimum numbers plus one.'
		);
	}

	let uniqueRandomPositions: number[] = [];
	do {
		uniqueRandomPositions = [...new Set(randomIntArray(length, minimum, maximumInclusive))];
	} while (uniqueRandomPositions.length < length);
	return uniqueRandomPositions;
}
