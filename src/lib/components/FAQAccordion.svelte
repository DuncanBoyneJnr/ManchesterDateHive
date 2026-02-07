<script lang="ts">
	import type { FAQItem } from '$lib/data/faq';

	interface Props {
		items: FAQItem[];
	}

	let { items }: Props = $props();
	let openIndex = $state<number | null>(null);

	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<div class="divide-y divide-brand-black/10 rounded-xl border border-brand-black/10 bg-white">
	{#each items as item, i}
		<div>
			<button
				class="flex w-full items-center justify-between px-6 py-5 text-left text-base font-semibold text-brand-black transition-colors hover:bg-brand-yellow-light/50 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand-yellow md:text-lg"
				aria-expanded={openIndex === i}
				onclick={() => toggle(i)}
			>
				<span>{item.question}</span>
				<svg
					class="ml-4 h-5 w-5 shrink-0 transition-transform duration-200 {openIndex === i ? 'rotate-180' : ''}"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
					aria-hidden="true"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
				</svg>
			</button>
			{#if openIndex === i}
				<div class="px-6 pb-5 text-brand-black/70">
					<p>{item.answer}</p>
				</div>
			{/if}
		</div>
	{/each}
</div>
