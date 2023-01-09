<div class="error">
	<slot />
</div>

<style>
	.error {
		background-color: var(--bieber);
		padding: 1em;
		margin: 0.5rem 0;
		border-radius: 0.5em;
		color: white;
		background-color: crimson;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
</style>
