<script lang="ts">
</script>

<slot name="header">this is header</slot>
<slot name="main">this is main</slot>
<slot name="footer">this is footer</slot>

<style>
	/****** RESET ******/
	/* https://www.joshwcomeau.com/css/custom-css-reset/ */
	:global(*, *::before, *::after) {
		box-sizing: border-box;
	}

	:global(*) {
		margin: 0;
		min-width: 0; /* new property for the fix some flexbox issues */
	}

	:global(body) {
		line-height: 1.5;
		-webkit-font-smoothing: antialiased;
	}

	:global(img, picture, video, canvas, svg) {
		display: block;
		max-width: 100%;
	}

	:global(input, button, textarea, select) {
		font: inherit;
	}
	:global(p, h1, h2, h3, h4, h5, h6) {
		overflow-wrap: break-word;
	}

	/****** GLOBALS ******/

	:global(html) {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
			'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
			'Noto Color Emoji';
		background-color: #f6f1d1;
		color: #0b2027;
	}

	/* :global(body) {
		min-height: 100vh;
	} */

	/* :global(footer) {
		flex-shrink: 0;
	}

	:global(main) {
		flex-grow: 1;
	} */
</style>
