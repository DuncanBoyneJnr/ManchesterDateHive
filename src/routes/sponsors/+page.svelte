<script lang="ts">
	import { base } from '$app/paths';
	import {
		EVENT_NAME,
		SPONSOR_EMAIL,
		SPONSOR_PHONE,
		SPONSORSHIP_PACK_URL,
		SEO_URL
	} from '$lib/config/event';
	import { sponsors, tiers, tierOrder } from '$lib/data/sponsors';

	import Container from '$lib/components/Container.svelte';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
</script>

<svelte:head>
	<title>Sponsors — {EVENT_NAME}</title>
	<meta
		name="description"
		content="Sponsor {EVENT_NAME} and invest in the growth of Manchester's inclusive, innovative data and AI community."
	/>
	<meta property="og:title" content="Sponsors — {EVENT_NAME}" />
	<meta property="og:url" content="{SEO_URL}/sponsors" />
</svelte:head>

<PageHero
	title="Sponsorship"
	subtitle="You're not just supporting an event — you're investing in the growth of an inclusive, innovative tech community."
>
	<Button href="mailto:{SPONSOR_EMAIL}" size="lg">Get in Touch</Button>
	<Button href="{base}{SPONSORSHIP_PACK_URL}" variant="secondary" size="lg" external>Download Sponsorship Pack</Button>
</PageHero>

<!-- Why Sponsor -->
<section class="py-16 md:py-20">
	<Container>
		<SectionHeader title="Why Sponsor Us?" />
		<div class="mx-auto max-w-4xl">
			<div class="grid gap-6 md:grid-cols-3">
				<Card>
					<h3 class="text-lg font-bold text-brand-black">Business Benefits</h3>
					<ul class="mt-3 space-y-2">
						<li class="flex items-start gap-2">
							<svg class="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
							<span class="text-sm text-brand-black/70">Build meaningful connections with professionals, partners, and community leaders</span>
						</li>
						<li class="flex items-start gap-2">
							<svg class="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
							<span class="text-sm text-brand-black/70">Strengthen your organisation's presence in one of the UK's fastest-growing data regions</span>
						</li>
					</ul>
				</Card>
				<Card>
					<h3 class="text-lg font-bold text-brand-black">Brand Benefits</h3>
					<ul class="mt-3 space-y-2">
						<li class="flex items-start gap-2">
							<svg class="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
							<span class="text-sm text-brand-black/70">Enjoy visibility across event materials, signage, and digital channels</span>
						</li>
						<li class="flex items-start gap-2">
							<svg class="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
							<span class="text-sm text-brand-black/70">Be recognised as a key supporter of innovation, education, and collaboration in Manchester</span>
						</li>
					</ul>
				</Card>
				<Card>
					<h3 class="text-lg font-bold text-brand-black">Community Benefits</h3>
					<ul class="mt-3 space-y-2">
						<li class="flex items-start gap-2">
							<svg class="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
							<span class="text-sm text-brand-black/70">Empower a volunteer-run, not-for-profit initiative</span>
						</li>
						<li class="flex items-start gap-2">
							<svg class="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
							<span class="text-sm text-brand-black/70">Support anonymised speaker submissions and mentoring programmes that create opportunities for new voices</span>
						</li>
					</ul>
				</Card>
			</div>
		</div>
	</Container>
</section>

<!-- Sponsorship Packages -->
<section class="bg-white py-16 md:py-20">
	<Container>
		<SectionHeader title="Sponsorship Packages" subtitle="Choose the package that works for you." />

		<!-- Main tiers -->
		<div class="grid gap-6 md:grid-cols-2">
			{#each tierOrder as tierKey}
				{@const tier = tiers[tierKey]}
				<Card class="{tierKey === 'gold' ? 'border-brand-yellow border-2' : ''} {tierKey === 'digital' ? '' : ''}">
					<div class="flex flex-wrap items-center gap-3">
						<span class="rounded px-3 py-1 text-sm font-bold text-white {tier.colour} {tierKey === 'conference-lunch' ? 'text-brand-bg' : tierKey === 'digital' ? 'text-brand-black' : 'text-brand-black'}">{tier.label}</span>
						<span class="text-sm font-bold text-brand-black">{tier.price}</span>
						<span class="text-xs text-brand-black/50">{tier.availability}</span>
					</div>
					<ul class="mt-4 space-y-2">
						{#each tier.benefits as benefit}
							<li class="flex items-start gap-2">
								<svg
									class="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2.5"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
								</svg>
								<span class="text-sm text-brand-black/70">{benefit}</span>
							</li>
						{/each}
					</ul>
					<div class="mt-6">
						<Button href="mailto:{SPONSOR_EMAIL}?subject={tier.label} sponsorship enquiry" size="sm">
							Enquire about {tier.label}
						</Button>
					</div>
				</Card>
			{/each}
		</div>
	</Container>
</section>

<!-- Current Sponsors -->
{#if sponsors.length > 0}
	<section class="py-16 md:py-20">
		<Container>
			<SectionHeader title="Our Sponsors" subtitle="Thank you to the organisations supporting this event." />
			{#each tierOrder as tierKey}
				{@const tierSponsors = sponsors.filter((s) => s.tier === tierKey)}
				{#if tierSponsors.length > 0}
					<div class="mb-8">
						<h3 class="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-brand-black/50">
							{tiers[tierKey].label}
						</h3>
						<div class="flex flex-wrap items-center justify-center gap-6">
							{#each tierSponsors as sponsor}
								<a
									href={sponsor.url}
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center justify-center rounded-lg border border-brand-black/10 bg-white p-4 transition-shadow hover:shadow-md {tierKey === 'gold' ? 'h-24 w-48' : 'h-20 w-40'}"
									aria-label={sponsor.name}
								>
									<span class="text-xs font-medium text-brand-black/40">{sponsor.name}</span>
								</a>
							{/each}
						</div>
					</div>
				{/if}
			{/each}
		</Container>
	</section>
{/if}

<!-- CTA -->
<section class="bg-brand-black py-16">
	<Container>
		<div class="mx-auto max-w-2xl text-center">
			<img src="{base}/MCRDH.png" alt="Manchester Data Hive" class="mx-auto mb-4 h-24 w-auto" />
			<h2 class="text-3xl font-bold text-brand-bg">Get in Touch</h2>
			<p class="mt-4 text-brand-bg/70">
				We'd love to discuss how you can take part and contribute to the buzz of Manchester Data Hive.
			</p>
			<p class="mt-4 text-sm text-brand-bg/50">
				{SPONSOR_EMAIL} &middot; {SPONSOR_PHONE}
			</p>
			<div class="mt-6 flex flex-wrap items-center justify-center gap-4">
				<Button href="mailto:{SPONSOR_EMAIL}" size="lg">Email Us</Button>
				<Button href="{base}{SPONSORSHIP_PACK_URL}" variant="secondary" size="lg" external>Download Sponsorship Pack</Button>
			</div>
		</div>
	</Container>
</section>
