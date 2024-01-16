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
		padding: 0.5rem 1rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		color: #333;
		cursor: pointer;
		&:hover {
			background-color: #eee;
		}
		&.is-selected {
			background-color: #4caf50;
		}
	}
</style>
