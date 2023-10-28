<script lang="ts">
	import wordList from '../word-list.json';

	// https://stackoverflow.com/a/55598692/785985
	// Return values in the range of [0, 1)
	const randomFloat = function () {
		const int = crypto.getRandomValues(new Uint32Array(1))[0];
		return int / 2 ** 32;
	};

	//  Return integers in the range of [min, max)
	const randomInt = function (min: number, max: number) {
		const range = max - min;
		return Math.floor(randomFloat() * range + min);
	};

	// Generate an array of integers in the range of [min, max).
	const randomIntArray = function (length: number, min: number, max: number) {
		return new Array(length).fill(0).map(() => randomInt(min, max));
	};

	const generateUniqueArray = () => {
		let uniqueRandomPositions: number[] = [];
		do {
			uniqueRandomPositions = [...new Set(randomIntArray(numberOfWords, 0, wordList.length + 1))];
		} while (uniqueRandomPositions.length < numberOfWords);
		return uniqueRandomPositions;
	};

	let toDisplay: number[] = [];

	let numberOfWords = 3;
</script>

<h1>Gerador de Senhas</h1>

<p>
	Baseado no <a href="https://1password.com/pt/password-generator/"
		>gerador de senhas do 1Password</a
	>, este aqui é um simples gerador de senhas "fáceis de memorizar" que usa palavras em português,
	ao invés de palavras em inglês.
</p>

<p>
	Lista de palavras únicas: <button
		type="button"
		on:click={() => (toDisplay = generateUniqueArray())}>gerar senha</button
	>
</p>
<div>
	<select
		name="number-words"
		id=""
		on:change={(event) => (numberOfWords = parseInt(event.target.value))}
	>
		<option value="3">3</option>
		<option value="4">4</option>
		<option value="5">5</option>
		<option value="6">6</option>
		<option value="7">7</option>
	</select>
</div>
<ul>
	{#each toDisplay as position}
		<li>{wordList[position]}</li>
	{/each}
</ul>

<p>fim.</p>
