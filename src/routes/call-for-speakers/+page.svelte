<script lang="ts">
	import { base } from '$app/paths';
	import {
		EVENT_NAME,
		CFS_URL,
		SEO_URL
	} from '$lib/config/event';
	import { speakerFaq } from '$lib/data/faq';

	import Container from '$lib/components/Container.svelte';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import Badge from '$lib/components/Badge.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import FAQAccordion from '$lib/components/FAQAccordion.svelte';

	const topics = [
		'Data Engineering',
		'Business Intelligence',
		'Data Analytics',
		'Machine Learning',
		'Generative AI',
		'Data Governance',
		'Data Architecture',
		'Career & Soft Skills',
		'Data Visualisation',
		'Cloud & Infrastructure'
	];

	const formats = [
		{
			name: 'Lightning Talk',
			duration: '20–30 minutes',
			description:
				'Focused, punchy sessions on a single topic. Great for sharing a specific tool, technique, or lesson learned.'
		},
		{
			name: 'Standard Session',
			duration: '45–60 minutes',
			description:
				'Deeper dives into a subject. Room for demos, case studies, and audience interaction. Ideal for sharing a project or methodology.'
		}
	];

	const guidelines = [
		'Talks should be practical and relevant to a broad data/AI audience.',
		'Avoid product pitches — teach, inspire, or share a genuine experience.',
		'We value diverse perspectives. First-time speakers are encouraged.',
		'Include a clear takeaway — what should the audience leave with?',
		'Sessions will be in English.',
		'Let us know if you need any support with preparation or delivery.'
	];
</script>

<svelte:head>
	<title>Call for Speakers — {EVENT_NAME}</title>
	<meta
		name="description"
		content="Submit a talk for {EVENT_NAME}. We're looking for speakers across data, analytics, AI, and more."
	/>
	<meta property="og:title" content="Call for Speakers — {EVENT_NAME}" />
	<meta property="og:url" content="{SEO_URL}/call-for-speakers" />
</svelte:head>

<PageHero title="Call for Speakers" subtitle="Share what you know. We'd love to hear from you.">
	<Button href={CFS_URL} size="lg" external>Submit Your Talk</Button>
</PageHero>

<!-- Intro -->
<section class="py-16 md:py-20">
	<Container>
		<div class="mx-auto max-w-3xl">
			<h2 class="text-3xl font-bold text-brand-black md:text-4xl">
				We want to hear from you
			</h2>
			<p class="mt-4 text-lg text-brand-black/70">
				{EVENT_NAME} is built by the community, for the community. We're looking for speakers who
				can share practical insights, honest lessons, and real-world experience. Whether you're a
				seasoned conference speaker or thinking about your first talk, we want to hear your story.
			</p>
		</div>
	</Container>
</section>

<!-- Topics -->
<section class="bg-white py-16 md:py-20">
	<Container>
		<SectionHeader
			title="Topics We're Looking For"
			subtitle="Anything in the data, analytics, and AI space. Here are some ideas."
		/>
		<div class="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
			{#each topics as topic}
				<Badge variant="dark">{topic}</Badge>
			{/each}
		</div>
		<p class="mt-6 text-center text-sm text-brand-black/60">
			Don't see your topic? Submit anyway — we love surprises.
		</p>
	</Container>
</section>

<!-- Formats -->
<section class="py-16 md:py-20">
	<Container>
		<SectionHeader
			title="Session Formats"
			subtitle="Choose the format that suits your topic."
		/>
		<div class="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
			{#each formats as format}
				<Card>
					<div class="flex items-center gap-3">
						<h3 class="text-xl font-bold text-brand-black">{format.name}</h3>
						<Badge>{format.duration}</Badge>
					</div>
					<p class="mt-3 text-sm text-brand-black/70">{format.description}</p>
				</Card>
			{/each}
		</div>
	</Container>
</section>

<!-- Guidelines -->
<section class="bg-white py-16 md:py-20">
	<Container>
		<SectionHeader title="Submission Guidelines" />
		<div class="mx-auto max-w-3xl">
			<Card>
				<ul class="space-y-3">
					{#each guidelines as guideline}
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
							<span class="text-brand-black/80">{guideline}</span>
						</li>
					{/each}
				</ul>
			</Card>
		</div>
		<div class="mt-8 text-center">
			<Button href={CFS_URL} size="lg" external>Submit Your Talk</Button>
		</div>
	</Container>
</section>

<!-- Speaker FAQ -->
<section class="py-16 md:py-20">
	<Container>
		<SectionHeader title="Speaker FAQ" />
		<div class="mx-auto max-w-3xl">
			<FAQAccordion items={speakerFaq} />
		</div>
	</Container>
</section>

<!-- Final CTA -->
<section class="bg-brand-black py-16">
	<Container>
		<div class="mx-auto max-w-2xl text-center">
			<img src="{base}/MCRDH.png" alt="Manchester Data Hive" class="mx-auto mb-4 h-24 w-auto" />
			<h2 class="text-3xl font-bold text-brand-bg">First-time speaker?</h2>
			<p class="mt-4 text-brand-bg/70">
				We actively support first-time speakers. We'll pair you with a mentor who can help with your
				abstract, slide design, and delivery. Don't let nerves stop you — submit and we'll help you
				get there.
			</p>
			<div class="mt-8">
				<Button href={CFS_URL} size="lg" external>Submit Your Talk</Button>
			</div>
		</div>
	</Container>
</section>
