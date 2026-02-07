<script lang="ts">
	import { page } from '$app/state';
	import { EVENT_NAME, TICKETS_URL, CFS_URL } from '$lib/config/event';

	let mobileOpen = $state(false);

	const navItems = [
		{ label: 'Home', href: '/' },
		{ label: 'Tickets', href: '/tickets' },
		{ label: 'Sponsors', href: '/sponsors' },
		{ label: 'Venue', href: '/venue' },
		{ label: 'Call for Speakers', href: '/call-for-speakers' }
	];

	function closeMobile() {
		mobileOpen = false;
	}

	function isActive(href: string): boolean {
		if (href === '/') return page.url.pathname === '/';
		return page.url.pathname.startsWith(href);
	}
</script>

<nav
	class="sticky top-0 z-50 border-b border-brand-black/10 bg-brand-bg/95 backdrop-blur-sm"
	aria-label="Main navigation"
>
	<div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
		<!-- Logo / Event name -->
		<a href="/" class="flex items-center gap-2 text-lg font-bold text-brand-black hover:text-brand-yellow-hover">
			<img src="/Bee.png" alt="" class="h-8 w-8" aria-hidden="true" />
			<span class="hidden sm:inline">{EVENT_NAME}</span>
		</a>

		<!-- Desktop nav -->
		<div class="hidden items-center gap-1 lg:flex">
			{#each navItems as item}
				<a
					href={item.href}
					class="rounded-md px-3 py-2 text-sm font-medium transition-colors {isActive(item.href)
						? 'bg-brand-yellow text-brand-black'
						: 'text-brand-black/80 hover:bg-brand-yellow-light hover:text-brand-black'}"
				>
					{item.label}
				</a>
			{/each}
		</div>

		<!-- Desktop CTA buttons -->
		<div class="hidden items-center gap-3 lg:flex">
			<a
				href={TICKETS_URL}
				target="_blank"
				rel="noopener noreferrer"
				class="rounded-lg bg-brand-yellow px-4 py-2 text-sm font-semibold text-brand-black transition-colors hover:bg-brand-yellow-hover"
			>
				Get Tickets
			</a>
			<a
				href={CFS_URL}
				target="_blank"
				rel="noopener noreferrer"
				class="rounded-lg border-2 border-brand-yellow bg-brand-black px-4 py-2 text-sm font-semibold text-brand-bg transition-colors hover:bg-brand-yellow hover:text-brand-black"
			>
				Call for Speakers
			</a>
		</div>

		<!-- Mobile hamburger -->
		<button
			class="flex items-center justify-center rounded-md p-2 lg:hidden"
			aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
			aria-expanded={mobileOpen}
			onclick={() => (mobileOpen = !mobileOpen)}
		>
			{#if mobileOpen}
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			{:else}
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			{/if}
		</button>
	</div>

	<!-- Mobile menu -->
	{#if mobileOpen}
		<div class="border-t border-brand-black/10 bg-brand-bg px-4 pb-4 pt-2 lg:hidden">
			{#each navItems as item}
				<a
					href={item.href}
					onclick={closeMobile}
					class="block rounded-md px-3 py-3 text-base font-medium transition-colors {isActive(item.href)
						? 'bg-brand-yellow text-brand-black'
						: 'text-brand-black/80 hover:bg-brand-yellow-light'}"
				>
					{item.label}
				</a>
			{/each}
			<div class="mt-4 flex flex-col gap-3">
				<a
					href={TICKETS_URL}
					target="_blank"
					rel="noopener noreferrer"
					onclick={closeMobile}
					class="rounded-lg bg-brand-yellow px-4 py-3 text-center text-sm font-semibold text-brand-black"
				>
					Get Tickets
				</a>
				<a
					href={CFS_URL}
					target="_blank"
					rel="noopener noreferrer"
					onclick={closeMobile}
					class="rounded-lg border-2 border-brand-yellow bg-brand-black px-4 py-3 text-center text-sm font-semibold text-brand-bg"
				>
					Call for Speakers
				</a>
			</div>
		</div>
	{/if}
</nav>
