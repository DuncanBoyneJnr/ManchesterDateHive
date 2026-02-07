<script lang="ts">
	import type { Snippet } from 'svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';

	let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<a href="#main-content" class="skip-link">Skip to main content</a>
<Nav />
<main id="main-content">
	{@render children()}
</main>
<Footer />
