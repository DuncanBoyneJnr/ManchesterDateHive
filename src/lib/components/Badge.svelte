<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		variant?: 'yellow' | 'dark' | 'outline';
		class?: string;
		children: Snippet;
	}

	let { variant = 'yellow', class: className = '', children }: Props = $props();

	const variantClasses: Record<string, string> = {
		yellow: 'bg-brand-yellow text-brand-black',
		dark: 'bg-brand-black text-brand-bg',
		outline: 'bg-transparent text-brand-black border border-brand-black/30'
	};
</script>

<span
	class="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide {variantClasses[variant]} {className}"
>
	{@render children()}
</span>
