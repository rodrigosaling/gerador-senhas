<script lang="ts">
	import { ButtonType } from '../types/button-types.enum';
	import wordList from '../word-list.json';
	import Template from '../components/template.svelte';

	import { generateUniqueNumbersArray } from '../utils/generate-unique-numbers-array';
	import Button from '../components/button.svelte';

	let toDisplay: string = '';

	let numberOfWords = 4;
	let wordDivider = '.';

	function setNumberOfWords(event: Event): void {
		const { value } = (event.target as HTMLButtonElement) || {};
		numberOfWords = parseInt(value, 10);
	}

	function setSeparator(event: Event): void {
		const { value } = (event.target as HTMLButtonElement) || {};
		wordDivider = value;
	}

	function handleGeneratePasswordClick() {
		const uniqueNumbers = generateUniqueNumbersArray(wordList.length, numberOfWords);
		const words = uniqueNumbers.map((num) => wordList[num]);
		toDisplay = words.join(wordDivider);
	}

	const availableNumbers = [3, 4, 5, 6, 7];
	const availableSeparators = ['-', '_', ',', '.', ';'];
</script>

<Template>
	<header slot="header" style="display: flex; justify-content: center; background-color: #0B2027;">
		<div style="max-width: 768px; color: #CFD7C7; padding: 3rem; text-align: center;">
			<h1 style="font-size: 3rem">Gerador de Senhas</h1>

			<p style="margin-top: 2rem;">
				Este gerador de senhas é baseado no <a href="https://1password.com/pt/password-generator/"
					>gerador de senhas do 1Password</a
				>, a diferença é que este aqui utiliza palavras em português.
			</p>
		</div>
	</header>

	<main slot="main" style="max-width: 768px; margin: 0 auto; padding: 0 1rem">
		<p class="warning">
			<em>Atenção!</em> Este gerador utiliza um dicionário com apenas {wordList.length} palavras, o que
			resulta em senhas <strong>extremamente inseguras</strong>. Utilize esta ferramenta por sua
			própria conta e risco.
		</p>

		<div style="display: flex; justify-content: space-around;">
			<div>
				<p>Selecione a quantidade de palavras na senha:</p>

				<ul style="list-style: none; display:flex">
					{#each availableNumbers as number}
						<li>
							<Button
								type={ButtonType.button}
								label={number}
								value={number}
								onClick={setNumberOfWords}
								isSelected={number === numberOfWords}
							/>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<p>Selecione o separador entre as palavras:</p>

				<ul style="list-style: none; display:flex">
					{#each availableSeparators as separator}
						<li>
							<Button
								type={ButtonType.button}
								label={separator}
								value={separator}
								onClick={setSeparator}
								isSelected={separator === wordDivider}
							/>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<div style="text-align: center; margin-top: 2rem">
			<button type="button" on:click={handleGeneratePasswordClick}>Gerar Senha</button>
		</div>

		{#if toDisplay}
			<p
				style="font-family: 'Courier New', Courier, monospace; background-color: #fff; padding: 1rem; border-radius: 6px; font-weight:600; font-size: 1.25rem; border: 1px solid #70A9A1; text-align:center"
			>
				{toDisplay}
			</p>

			<p>
				Comprimento: {toDisplay.length} caracteres
			</p>
		{/if}
	</main>

	<footer
		slot="footer"
		style="border-top: 1px solid  #70A9A1; padding: 1rem; margin-top: 4rem; font-size: .85rem"
	>
		<p style="max-width: 768px; margin: 0 auto">2024 - por Rodrigo Saling.</p>
	</footer>
</Template>

<style>
	header a {
		color: #cfd7c7;

		&:hover {
			text-decoration: none;
		}
	}
	.warning {
		padding: 20px;
		border: 1px solid #f5c6cb;
		border-radius: 4px;
		background-color: #fff5f5;
		color: #721c24;
		margin: 3rem 0;
	}

	.warning:before {
		content: '⚠️';
		margin-right: 10px;
	}
</style>
