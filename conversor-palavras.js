import * as fs from 'node:fs';

import * as events from 'node:events';
import * as readline from 'node:readline';

const setOfUniqueWords = new Set();
// const jsonArray = [];

(async function processLineByLine() {
	try {
		const rl = readline.createInterface({
			input: fs.createReadStream('dicionario-simples.txt'),
			crlfDelay: Infinity
		});

		rl.on('line', (line) => {
			// https://stackoverflow.com/a/37511463/785985
			const word = line
				.normalize('NFD')
				.replace(/\p{Diacritic}/gu, '')
				.toLowerCase();

			const regex = new RegExp('[^a-zA-Z]');

			if (word.length >= 3 && word.length <= 10 && !regex.test(word)) {
				setOfUniqueWords.add(word);
			}
		});

		await events.once(rl, 'close');

		console.log('Reading file line by line with readline done.');
		const used = process.memoryUsage().heapUsed / 1024 / 1024;
		console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);

		fs.writeFile('word-list.json', JSON.stringify(Array.from(setOfUniqueWords)), (err) => {
			if (err) console.log(err);
			console.log('Successfully Written to File.');
		});
	} catch (err) {
		console.error(err);
	}
})();
