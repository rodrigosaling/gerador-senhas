// https://stackoverflow.com/a/55598692/785985
// Return values in the range of [0, 1)
export function randomFloat(): number {
	const int = crypto.getRandomValues(new Uint32Array(1))[0];
	return int / 2 ** 32;
}

//  Return integers in the range of [min, max)
export function randomInt(min: number, max: number): number {
	const range = max - min;
	return Math.floor(randomFloat() * range + min);
}

// Generate an array of integers in the range of [min, max).
export function randomIntArray(length: number, min: number, max: number): number[] {
	return new Array(length).fill(0).map(() => randomInt(min, max));
}

export function generateUniqueNumbersArray(length: number, numberOfItems: number): number[] {
	let uniqueRandomPositions: number[] = [];
	do {
		uniqueRandomPositions = [...new Set(randomIntArray(numberOfItems, 0, length + 1))];
	} while (uniqueRandomPositions.length < numberOfItems);
	return uniqueRandomPositions;
}
