<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		variant?: 'primary' | 'secondary' | 'outline';
		href?: string;
		size?: 'sm' | 'md' | 'lg';
		external?: boolean;
		class?: string;
		children: Snippet;
	}

	let {
		variant = 'primary',
		href,
		size = 'md',
		external = false,
		class: className = '',
		children
	}: Props = $props();

	const baseClasses =
		'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow';

	const variantClasses: Record<string, string> = {
		primary:
			'bg-brand-yellow text-brand-black hover:bg-brand-yellow-hover active:scale-[0.98] shadow-sm',
		secondary:
			'bg-brand-black text-brand-bg border-2 border-brand-yellow hover:bg-brand-yellow hover:text-brand-black active:scale-[0.98]',
		outline:
			'bg-transparent text-brand-black border-2 border-brand-black hover:bg-brand-black hover:text-brand-bg active:scale-[0.98]'
	};

	const sizeClasses: Record<string, string> = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-6 py-3 text-base',
		lg: 'px-8 py-4 text-lg'
	};

	let classes = $derived(
		`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
	);
</script>

{#if href}
	<a
		{href}
		class={classes}
		target={external ? '_blank' : undefined}
		rel={external ? 'noopener noreferrer' : undefined}
	>
		{@render children()}
	</a>
{:else}
	<button class={classes}>
		{@render children()}
	</button>
{/if}
