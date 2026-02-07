<script lang="ts">
	import { base } from '$app/paths';
	import {
		EVENT_NAME,
		TICKETS_URL,
		SEO_URL
	} from '$lib/config/event';
	import { ticketsFaq } from '$lib/data/faq';

	import Container from '$lib/components/Container.svelte';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import FAQAccordion from '$lib/components/FAQAccordion.svelte';

	const benefits = [
		'Full day of talks and sessions across data, analytics, and AI',
		'Coffee, refreshments, and a full lunch included',
		'Networking with hundreds of data professionals',
		'Access to sponsor exhibits and demos',
		'Community swag and giveaways',
		'Post-event networking drinks'
	];
</script>

<svelte:head>
	<title>Tickets — {EVENT_NAME}</title>
	<meta
		name="description"
		content="Get your free ticket to {EVENT_NAME}. A full day of talks, networking, and community — completely free."
	/>
	<meta property="og:title" content="Tickets — {EVENT_NAME}" />
	<meta property="og:url" content="{SEO_URL}/tickets" />
</svelte:head>

<PageHero title="Tickets" subtitle="Completely free. Seriously.">
	<Button href={TICKETS_URL} size="lg" external>Get Your Free Ticket</Button>
</PageHero>

<section class="py-16 md:py-20">
	<Container>
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="text-3xl font-bold text-brand-black md:text-4xl">
				A full day, completely free
			</h2>
			<p class="mt-4 text-lg text-brand-black/70">
				{EVENT_NAME} is a community event supported by sponsors who believe in making data and AI
				knowledge accessible. Your ticket gets you everything — no hidden costs, no upsells.
			</p>
		</div>
	</Container>
</section>

<section class="bg-white py-16 md:py-20">
	<Container>
		<SectionHeader title="What You Get" />
		<div class="mx-auto max-w-2xl">
			<Card>
				<div class="space-y-1 p-2">
					<div class="mb-4 text-center">
						<span class="text-4xl font-extrabold text-brand-yellow">FREE</span>
						<p class="mt-1 text-sm text-brand-black/60">No cost, no catch</p>
					</div>
					<ul class="space-y-3">
						{#each benefits as benefit}
							<li class="flex items-start gap-3">
								<svg
									class="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2.5"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
								</svg>
								<span class="text-brand-black/80">{benefit}</span>
							</li>
						{/each}
					</ul>
					<div class="mt-8 text-center">
						<Button href={TICKETS_URL} size="lg" external>Register Now</Button>
					</div>
				</div>
			</Card>
		</div>
	</Container>
</section>

<section class="py-16 md:py-20">
	<Container>
		<SectionHeader title="Ticket FAQ" />
		<div class="mx-auto max-w-3xl">
			<FAQAccordion items={ticketsFaq} />
		</div>
	</Container>
</section>

<section class="bg-brand-black py-12">
	<Container>
		<div class="text-center">
			<p class="text-sm text-brand-bg/60">
				We're committed to a safe and inclusive event. Our full
				<a href="{base}/code-of-conduct" class="text-brand-yellow underline hover:text-brand-yellow-hover">Code of Conduct</a>
				will be published ahead of the event.
			</p>
		</div>
	</Container>
</section>
