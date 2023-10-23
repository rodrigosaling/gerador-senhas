<script lang="ts">
	const wordList = [
		'casa',
		'bolo',
		'pessoa',
		'musica',
		'lampada',
		'carro',
		'livro',
		'caneta',
		'lapis',
		'borracha',
		'viagem',
		'caminhao',
		'onibus',
		'apartamento',
		'igreja',
		'cruzeiro',
		'teclado',
		'cozinha'
	];

	// https://stackoverflow.com/a/55598692/785985
	/*
	 *
	 * Return values in the range of [0, 1)
	 */
	const randomFloat = function () {
		const int = crypto.getRandomValues(new Uint32Array(1))[0];
		return int / 2 ** 32;
	};

	/**
	 * Return integers in the range of [min, max)
	 *
	 * @todo check that min is <= max.
	 */
	const randomInt = function (min: number, max: number) {
		const range = max - min;
		return Math.floor(randomFloat() * range + min);
	};

	/**
	 * Generate an array of integers in the range of [min, max).
	 */
	const randomIntArray = function (length: number, min: number, max: number) {
		return new Array(length).fill(0).map(() => randomInt(min, max));
	};

	let uniqueRandomPositions: number[] = [];
	// let uniqueRandomPositions = [...new Set(randomIntArray(4, 0, wordList.length))];
	// let uniqueRandomPositions = randomIntArray(4, 0, wordList.length);
	// let index = 0;
	while (uniqueRandomPositions.length < 4) {
		uniqueRandomPositions = [...new Set(randomIntArray(4, 0, wordList.length))];
		console.log(uniqueRandomPositions);
	}
</script>

<h1>Gerador de Senhas</h1>

<p>
	Baseado no <a href="https://1password.com/pt/password-generator/"
		>gerador de senhas do 1Password</a
	>, este aqui é um simples gerador de senhas "fáceis de memorizar" que usa palavras em português,
	ao invés de palavras em inglês.
</p>

<p>Lista de palavras únicas:</p>
<ul>
	{#each uniqueRandomPositions as position}
		<li>{wordList[position]}</li>
	{/each}
</ul>

<p>fim.</p>
