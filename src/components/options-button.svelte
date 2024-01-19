<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';
	import { ButtonType } from '../types/button-types.enum';

	export let label: string | number;
	export let value: string | number = label;
	export let isSelected: boolean = false;
	export let type: ButtonType = ButtonType.button;
	export let onClick: MouseEventHandler<HTMLButtonElement>;
</script>

<button {type} {value} class={isSelected ? 'is-selected' : ''} on:click={onClick}>{label}</button>

<style>
	button {
		font-family: 'Courier New', Courier, monospace;
		font-size: 1.25rem;
		font-weight: 600;
		padding: 0.5rem 1rem;
		border-width: 1px;
		border-style: solid;
		border-radius: 4px;
		/* color: #333; */
		/* background-color: #ddd6fe; */
		/* cursor: default; */
		&:hover {
			/* background-color: #a8a29e; */
		}
		&.is-selected {
			background-color: #818cf8;
			border-color: #4338ca;
		}
	}
</style>
