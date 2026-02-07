<script lang="ts">
	import {
		EVENT_NAME,
		EVENT_VENUE_NAME,
		EVENT_VENUE_ADDRESS,
		EVENT_VENUE_MAP_EMBED,
		SEO_URL
	} from '$lib/config/event';

	import Container from '$lib/components/Container.svelte';
	import Card from '$lib/components/Card.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';

	const travelOptions = [
		{
			title: 'By Tram',
			details:
				'MediaCityUK Metrolink stop is a short walk from the hotel. Trams run frequently from Manchester city centre, Piccadilly, and across Greater Manchester.'
		},
		{
			title: 'By Train',
			details:
				'Manchester Piccadilly and Manchester Victoria are both well connected to the Metrolink for onward travel to Salford Quays. Salford Crescent station is also nearby.'
		},
		{
			title: 'By Car',
			details:
				'The hotel has on-site parking. Salford Quays is well signposted from the M60 and M602. Sat nav postcode: M50 3SN.'
		},
		{
			title: 'By Bus',
			details:
				'Several bus routes serve Salford Quays and MediaCityUK. Check TfGM for the latest routes and timetables.'
		},
		{
			title: 'Accommodation',
			details:
				'The Copthorne Hotel itself offers on-site accommodation — ideal if you\'re travelling from further afield. Book directly with the hotel for best rates.'
		}
	];

	const accessibilityInfo = [
		'The venue is fully wheelchair accessible with step-free access throughout.',
		'Accessible toilets are available on every floor.',
		'An induction loop is available in the main auditorium.',
		'Quiet rooms will be available for anyone who needs a break.',
		'Service dogs are welcome.',
		'If you have specific accessibility needs, please get in touch and we\'ll do our best to accommodate.'
	];

	const nearbySpots = [
		{
			name: 'The Lowry Theatre',
			type: 'Culture',
			distance: '5 min walk'
		},
		{
			name: 'Imperial War Museum North',
			type: 'Culture',
			distance: '10 min walk'
		},
		{
			name: 'MediaCityUK',
			type: 'Landmark',
			distance: '10 min walk'
		},
		{
			name: 'The Quays Shopping Centre',
			type: 'Food & Shopping',
			distance: '5 min walk'
		}
	];
</script>

<svelte:head>
	<title>Venue — {EVENT_NAME}</title>
	<meta
		name="description"
		content="Find {EVENT_VENUE_NAME} — venue for {EVENT_NAME}. Directions, parking, public transport, and accessibility info."
	/>
	<meta property="og:title" content="Venue — {EVENT_NAME}" />
	<meta property="og:url" content="{SEO_URL}/venue" />
</svelte:head>

<PageHero title="Venue" subtitle="Join us at the Copthorne Hotel, Salford Quays." />

<!-- Venue Info + Map -->
<section class="py-16 md:py-20">
	<Container>
		<div class="grid gap-8 md:grid-cols-2">
			<div>
				<h2 class="text-3xl font-bold text-brand-black">{EVENT_VENUE_NAME}</h2>
				<p class="mt-2 text-lg text-brand-black/70">{EVENT_VENUE_ADDRESS}</p>
				<p class="mt-4 text-brand-black/70">
					The event will take place at the Copthorne Hotel Manchester, Salford Quays, offering two
					rooms that each seat 50 attendees — enabling us to run two parallel tracks throughout the
					day.
				</p>
				<p class="mt-4 text-brand-black/70">
					The hotel is ideal for anyone needing on-site accommodation, and catering will be provided,
					ensuring a smooth and comfortable experience for all.
				</p>
				<p class="mt-4 text-brand-black/70">
					Doors open at 08:30. Registration and coffee will be available from arrival, with the first
					session starting at 09:15.
				</p>
			</div>
			<div class="overflow-hidden rounded-xl border border-brand-black/10 shadow-sm">
				<iframe
					src={EVENT_VENUE_MAP_EMBED}
					width="100%"
					height="350"
					style="border:0;"
					allowfullscreen
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					title="Venue location on map"
				></iframe>
			</div>
		</div>
	</Container>
</section>

<!-- Travel -->
<section class="bg-white py-16 md:py-20">
	<Container>
		<SectionHeader title="Getting Here" subtitle="All the ways to reach the venue." />
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each travelOptions as option}
				<Card>
					<h3 class="text-lg font-bold text-brand-black">{option.title}</h3>
					<p class="mt-2 text-sm text-brand-black/70">{option.details}</p>
				</Card>
			{/each}
		</div>
	</Container>
</section>

<!-- Accessibility -->
<section class="py-16 md:py-20">
	<Container>
		<SectionHeader
			title="Accessibility"
			subtitle="We want everyone to feel welcome and comfortable."
		/>
		<div class="mx-auto max-w-3xl">
			<Card>
				<ul class="space-y-3">
					{#each accessibilityInfo as item}
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
							<span class="text-brand-black/80">{item}</span>
						</li>
					{/each}
				</ul>
			</Card>
		</div>
	</Container>
</section>

<!-- Nearby -->
<section class="bg-white py-16 md:py-20">
	<Container>
		<SectionHeader title="Nearby" subtitle="Things to see and do around the venue." />
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{#each nearbySpots as spot}
				<Card>
					<h3 class="font-bold text-brand-black">{spot.name}</h3>
					<p class="mt-1 text-sm text-brand-black/60">{spot.type} &middot; {spot.distance}</p>
				</Card>
			{/each}
		</div>
	</Container>
</section>
