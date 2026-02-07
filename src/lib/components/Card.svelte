<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children: Snippet;
	}

	let { class: className = '', children }: Props = $props();
</script>

<div
	class="rounded-xl border border-brand-black/10 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md {className}"
>
	{@render children()}
</div>
