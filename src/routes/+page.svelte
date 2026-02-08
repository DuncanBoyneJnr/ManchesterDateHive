<script lang="ts">
	import {
		EVENT_NAME,
		EVENT_SUBTITLE,
		EVENT_TAGLINE,
		EVENT_DATE_TEXT,
		EVENT_CITY,
		EVENT_COUNTRY,
		EVENT_VENUE_NAME,
		EVENT_VENUE_ADDRESS,
		EVENT_VENUE_MAP_EMBED,
		TICKETS_URL,
		CFS_URL,
		SPONSOR_EMAIL,
		SPONSORSHIP_PACK_URL,
		EVENT_MISSION,
		SEO_TITLE,
		SEO_DESCRIPTION,
		SEO_URL,
		SEO_IMAGE
	} from '$lib/config/event';
	import { base } from '$app/paths';
	import { speakers } from '$lib/data/speakers';
	import { sponsors, tiers, tierOrder } from '$lib/data/sponsors';
	import { agenda } from '$lib/data/agenda';
	import { generalFaq } from '$lib/data/faq';

	import Container from '$lib/components/Container.svelte';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import Badge from '$lib/components/Badge.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import FAQAccordion from '$lib/components/FAQAccordion.svelte';

	const expectCards = [
		{
			icon: '🎤',
			title: 'Talks',
			description:
				'Practical, real-world sessions from data engineers, analysts, scientists, and AI practitioners across the region.'
		},
		{
			icon: '🤝',
			title: 'Networking',
			description:
				'Connect with fellow data professionals, hiring managers, and community leaders in Manchester and beyond.'
		},
		{
			icon: '🌍',
			title: 'Community',
			description:
				'A welcoming, inclusive event built by the community, for the community. First-timers especially welcome.'
		},
		{
			icon: '🛠️',
			title: 'Practical Takeaways',
			description:
				'Leave with ideas you can apply on Monday morning — from tooling tips to architectural patterns.'
		}
	];

	const featuredSpeakers = speakers.slice(0, 4);

	const mainTierKeys = ['gold', 'silver', 'recruitment', 'microsoft-partner'] as const;

	function getAgendaTypeColor(type?: string): string {
		switch (type) {
			case 'keynote':
				return 'yellow';
			case 'break':
				return 'outline';
			default:
				return 'dark';
		}
	}
</script>

<svelte:head>
	<title>{SEO_TITLE}</title>
	<meta name="description" content={SEO_DESCRIPTION} />
	<meta property="og:title" content={SEO_TITLE} />
	<meta property="og:description" content={SEO_DESCRIPTION} />
	<meta property="og:url" content={SEO_URL} />
	<meta property="og:image" content={SEO_IMAGE} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={SEO_TITLE} />
	<meta name="twitter:description" content={SEO_DESCRIPTION} />
</svelte:head>

<!-- ============ HERO ============ -->
<section class="relative overflow-hidden bg-brand-black py-20 md:py-28">
	<img
		src="{base}/Manchester.jpg"
		alt=""
		aria-hidden="true"
		class="absolute inset-0 h-full w-full object-cover opacity-25"
	/>
	<div class="absolute inset-0 bg-gradient-to-b from-brand-black/60 to-brand-black/90"></div>
	<Container class="relative z-10">
		<div class="mx-auto max-w-4xl text-center">
			<img src="{base}/Sticker-MCRDH.png" alt="Manchester Data Hive" class="mx-auto mb-6 h-40 w-auto drop-shadow-lg md:h-52" />
			<Badge variant="yellow" class="mb-6">{EVENT_DATE_TEXT}</Badge>
			<h1 class="text-4xl font-extrabold leading-tight text-brand-bg md:text-6xl lg:text-7xl">
				{EVENT_NAME}
			</h1>
			<p class="mt-3 text-xl font-semibold text-brand-yellow md:text-2xl">
				{EVENT_SUBTITLE}
			</p>
			<p class="mt-3 text-lg text-brand-bg/80 md:text-xl">
				{EVENT_TAGLINE}
			</p>
			<p class="mt-2 text-base text-brand-bg/60">
				📍 {EVENT_CITY}, {EVENT_COUNTRY} &middot; 📅 {EVENT_DATE_TEXT}
			</p>
			<div class="mt-8 flex flex-wrap items-center justify-center gap-4">
				<Button href={TICKETS_URL} size="lg" class="min-w-[200px]" external>Get Tickets</Button>
				<Button href={CFS_URL} variant="secondary" size="lg" class="min-w-[200px]" external>Call for Speakers</Button>
				<Button href="mailto:{SPONSOR_EMAIL}" variant="outline" size="lg" class="min-w-[200px] !border-brand-bg/30 !text-brand-bg hover:!bg-brand-bg hover:!text-brand-black">Call for Sponsors</Button>
			</div>
		</div>
	</Container>
</section>

<!-- ============ ABOUT ============ -->
<section class="py-16 md:py-20">
	<Container>
		<SectionHeader
			title="About the Day"
			subtitle="Everything you need to know about Manchester's community day for data and AI."
		/>
		<div class="mx-auto max-w-3xl space-y-4 text-brand-black/80">
			<p>
				Manchester Data & AI Community Day is a volunteer-led event uniting data and AI professionals,
				engineers, analysts, and leaders passionate about Microsoft's Data & AI ecosystem — including
				Microsoft Fabric, Azure SQL, Power BI and Microsoft AI/Copilot technologies.
			</p>
			<p class="text-xl font-semibold text-brand-black">
				Our mission: {EVENT_MISSION}
			</p>
			<p>
				Attendance is completely free, made possible through the generosity of sponsors who believe in
				giving back to the community. Whether you're a seasoned data engineer, a BI analyst levelling
				up your skills, or just curious about what AI means for your career — this event is for you.
			</p>
		</div>
	</Container>
</section>

<!-- ============ WHAT TO EXPECT ============ -->
<section class="bg-white py-16 md:py-20">
	<Container>
		<SectionHeader title="What to Expect" />
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each expectCards as card}
				<Card>
					<div class="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-yellow-light">
						<img src="{base}/Bee.png" alt="" aria-hidden="true" class="h-7 w-7" />
					</div>
					<h3 class="text-xl font-bold text-brand-black">{card.title}</h3>
					<p class="mt-2 text-sm text-brand-black/70">{card.description}</p>
				</Card>
			{/each}
		</div>
	</Container>
</section>

<!-- ============ AGENDA (hidden until confirmed) ============ -->
<!-- ============ SPEAKERS (hidden until confirmed) ============ -->

<!-- ============ SPONSORS ============ -->
<section class="py-16 md:py-20">
	<Container>
		<SectionHeader
			title="Sponsors"
			subtitle="This event is free thanks to the support of our sponsors. Packages still available."
		/>
		{#if sponsors.length > 0}
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
									class="flex items-center justify-center rounded-lg border border-brand-black/10 bg-white p-4 transition-shadow hover:shadow-md h-20 w-40"
									aria-label={sponsor.name}
								>
									<span class="text-xs font-medium text-brand-black/40">{sponsor.name}</span>
								</a>
							{/each}
						</div>
					</div>
				{/if}
			{/each}
		{:else}
			<div class="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{#each mainTierKeys as tierKey}
					{@const tier = tiers[tierKey]}
					<div class="rounded-xl border border-brand-black/10 bg-white p-5 text-center">
						<span class="inline-block rounded px-3 py-1 text-xs font-bold {tier.colour} {tierKey === 'gold' ? 'text-brand-black' : 'text-white'}">{tier.label}</span>
						<p class="mt-2 text-lg font-bold text-brand-black">{tier.price}</p>
						<p class="text-xs text-brand-black/50">{tier.availability}</p>
					</div>
				{/each}
			</div>
		{/if}
		<div class="mt-8 flex flex-wrap items-center justify-center gap-4">
			<Button href="{base}/sponsors">View all packages</Button>
			<Button href="{base}{SPONSORSHIP_PACK_URL}" variant="outline" external>Download Sponsorship Pack</Button>
		</div>
	</Container>
</section>

<!-- ============ VENUE ============ -->
<section class="bg-white py-16 md:py-20">
	<Container>
		<SectionHeader title="Venue" subtitle="Join us in the heart of Manchester." />
		<div class="mx-auto max-w-3xl">
			<div class="grid gap-8 md:grid-cols-2">
				<div>
					<h3 class="text-xl font-bold text-brand-black">{EVENT_VENUE_NAME}</h3>
					<p class="mt-2 text-brand-black/70">{EVENT_VENUE_ADDRESS}</p>
					<p class="mt-4 text-sm text-brand-black/60">
						Two rooms seating 50 each, with two parallel tracks throughout the day.
						On-site accommodation available and catering provided.
						Easy to reach via Metrolink to MediaCityUK.
					</p>
					<div class="mt-6">
						<Button href="{base}/venue" variant="outline" size="sm">View full venue details</Button>
					</div>
				</div>
				<div class="overflow-hidden rounded-lg border border-brand-black/10">
					<iframe
						src={EVENT_VENUE_MAP_EMBED}
						width="100%"
						height="250"
						style="border:0;"
						allowfullscreen
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
						title="Venue location map"
					></iframe>
				</div>
			</div>
		</div>
	</Container>
</section>

<!-- ============ FAQ ============ -->
<section class="py-16 md:py-20">
	<Container>
		<SectionHeader title="Frequently Asked Questions" />
		<div class="mx-auto max-w-3xl">
			<FAQAccordion items={generalFaq} />
		</div>
	</Container>
</section>

<!-- ============ FINAL CTA ============ -->
<section class="bg-brand-black py-16 md:py-20">
	<Container>
		<div class="mx-auto max-w-2xl text-center">
			<img src="{base}/MCRDH.png" alt="Manchester Data Hive" class="mx-auto mb-4 h-28 w-auto" />
			<h2 class="text-3xl font-bold text-brand-bg md:text-4xl">
				Ready to join the hive?
			</h2>
			<p class="mt-4 text-brand-bg/70">
				Whether you want to attend, speak, or sponsor — there's a way for everyone to get involved.
			</p>
			<div class="mt-8 flex flex-wrap items-center justify-center gap-4">
				<Button href={TICKETS_URL} size="lg" class="min-w-[200px]" external>Get Tickets</Button>
				<Button href={CFS_URL} variant="secondary" size="lg" class="min-w-[200px]" external>Call for Speakers</Button>
				<Button href="mailto:{SPONSOR_EMAIL}" variant="outline" size="lg" class="min-w-[200px] !border-brand-bg/30 !text-brand-bg hover:!bg-brand-bg hover:!text-brand-black">Call for Sponsors</Button>
			</div>
		</div>
	</Container>
</section>
