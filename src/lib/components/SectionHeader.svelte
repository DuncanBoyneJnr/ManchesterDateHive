<script lang="ts">
	interface Props {
		title: string;
		subtitle?: string;
		centered?: boolean;
	}

	let { title, subtitle = '', centered = true }: Props = $props();
</script>

<div class="mb-10 {centered ? 'text-center' : ''}">
	<h2 class="text-3xl font-bold text-brand-black md:text-4xl">
		{title}
	</h2>
	<div class="mt-3 flex items-center gap-2 {centered ? 'justify-center' : ''}">
		<div class="h-0.5 w-8 rounded-full bg-brand-yellow"></div>
		<img src="/Bee.png" alt="" aria-hidden="true" class="h-6 w-6" />
		<div class="h-0.5 w-8 rounded-full bg-brand-yellow"></div>
	</div>
	{#if subtitle}
		<p class="mt-4 text-lg text-brand-black/70 {centered ? 'mx-auto max-w-2xl' : ''}">
			{subtitle}
		</p>
	{/if}
</div>
