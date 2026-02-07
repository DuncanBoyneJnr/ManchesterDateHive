<script lang="ts">
	import {
		EVENT_NAME,
		CONTACT_EMAIL,
		SOCIAL_LINKS,
		TICKETS_URL,
		CFS_URL,
		SPONSOR_EMAIL
	} from '$lib/config/event';
	import Container from './Container.svelte';

	const footerNav = [
		{ label: 'Home', href: '/' },
		{ label: 'Tickets', href: '/tickets' },
		{ label: 'Sponsors', href: '/sponsors' },
		{ label: 'Venue', href: '/venue' },
		{ label: 'Call for Speakers', href: '/call-for-speakers' }
	];

	const activeSocials = Object.entries(SOCIAL_LINKS).filter(([, url]) => url);
</script>

<footer class="border-t border-brand-black/10 bg-brand-black text-brand-bg">
	<Container class="py-12">
		<div class="grid gap-8 md:grid-cols-3">
			<!-- Column 1: About -->
			<div>
				<div class="flex items-center gap-2">
					<img src="/Bee.png" alt="" class="h-8 w-8" aria-hidden="true" />
					<h3 class="text-lg font-bold text-brand-yellow">{EVENT_NAME}</h3>
				</div>
				<p class="mt-3 text-sm text-brand-bg/70">
					A Manchester Data & AI Community Day — bringing together data, analytics, and AI
					professionals for free.
				</p>
				{#if activeSocials.length > 0}
					<div class="mt-4 flex gap-4">
						{#each activeSocials as [platform, url]}
							<a
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								class="text-brand-bg/60 transition-colors hover:text-brand-yellow"
								aria-label="{platform}"
							>
								{platform.charAt(0).toUpperCase() + platform.slice(1)}
							</a>
						{/each}
					</div>
				{/if}
			</div>

			<!-- Column 2: Quick links -->
			<div>
				<h3 class="text-lg font-bold text-brand-yellow">Quick Links</h3>
				<ul class="mt-3 space-y-2">
					{#each footerNav as item}
						<li>
							<a
								href={item.href}
								class="text-sm text-brand-bg/70 transition-colors hover:text-brand-yellow"
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Column 3: Get involved -->
			<div>
				<h3 class="text-lg font-bold text-brand-yellow">Get Involved</h3>
				<ul class="mt-3 space-y-2">
					<li>
						<a
							href={TICKETS_URL}
							target="_blank"
							rel="noopener noreferrer"
							class="text-sm text-brand-bg/70 transition-colors hover:text-brand-yellow"
						>
							Get Tickets
						</a>
					</li>
					<li>
						<a
							href={CFS_URL}
							target="_blank"
							rel="noopener noreferrer"
							class="text-sm text-brand-bg/70 transition-colors hover:text-brand-yellow"
						>
							Submit a Talk
						</a>
					</li>
					<li>
						<a
							href="mailto:{SPONSOR_EMAIL}"
							class="text-sm text-brand-bg/70 transition-colors hover:text-brand-yellow"
						>
							Become a Sponsor
						</a>
					</li>
					<li>
						<a
							href="mailto:{CONTACT_EMAIL}"
							class="text-sm text-brand-bg/70 transition-colors hover:text-brand-yellow"
						>
							Contact Us
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="mt-10 border-t border-brand-bg/10 pt-6 text-center text-xs text-brand-bg/50">
			<p>&copy; {new Date().getFullYear()} {EVENT_NAME}. Made with care by the community.</p>
		</div>
	</Container>
</footer>
