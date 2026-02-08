<script lang="ts">
	import type { Snippet } from 'svelte';
	import Container from './Container.svelte';

	interface Props {
		title: string;
		subtitle?: string;
		children?: Snippet;
	}

	let { title, subtitle = '', children }: Props = $props();
</script>

<section class="bg-brand-black py-16 md:py-20">
	<Container>
		<div class="mx-auto max-w-3xl text-center">
			<h1 class="text-3xl font-bold text-brand-bg md:text-5xl">
				{title}
			</h1>
			{#if subtitle}
				<p class="mt-4 text-lg text-brand-bg/80 md:text-xl">
					{subtitle}
				</p>
			{/if}
			{#if children}
				<div class="mt-8 flex flex-wrap items-center justify-center gap-4">
					{@render children()}
				</div>
			{/if}
		</div>
	</Container>
</section>
