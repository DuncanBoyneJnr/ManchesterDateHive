// ============================================================
// SPONSORS DATA
// Add sponsors here. Logos go in /static/sponsors/.
// Tiers match the sponsorship pack.
// ============================================================

export type SponsorTier = 'gold' | 'silver' | 'recruitment' | 'microsoft-partner' | 'conference-lunch' | 'track' | 'digital';

export interface Sponsor {
	name: string;
	tier: SponsorTier;
	logo: string;
	url: string;
}

export const sponsors: Sponsor[] = [
	// Add sponsors as they are confirmed, e.g.:
	// { name: 'Acme Corp', tier: 'gold', logo: '/sponsors/acme.png', url: 'https://acme.com' },
];

export interface TierInfo {
	label: string;
	price: string;
	availability: string;
	colour: string;
	benefits: string[];
}

export const tiers: Record<SponsorTier, TierInfo> = {
	gold: {
		label: 'Gold',
		price: '£2,000',
		availability: '2 available',
		colour: 'bg-brand-yellow',
		benefits: [
			'Slot for 5 min keynote',
			'Premium visibility across all materials',
			'Logo placement on slides and website',
			'Social media spotlight',
			'Access to track sponsorship add-on',
			'Recognition in opening/closing remarks'
		]
	},
	silver: {
		label: 'Silver',
		price: '£1,000',
		availability: '3 available',
		colour: 'bg-gray-300',
		benefits: [
			'Slot for 5 min keynote',
			'Premium visibility across all materials',
			'Logo placement on slides and website',
			'Social media spotlight'
		]
	},
	recruitment: {
		label: 'Recruitment',
		price: '£2,000',
		availability: '1 exclusive',
		colour: 'bg-pink-400',
		benefits: [
			'Slot for 5 min keynote',
			'Includes branding on all "Careers & Community" materials',
			'Access to the candidate networking area',
			'Visibility across all event channels'
		]
	},
	'microsoft-partner': {
		label: 'Microsoft Partner',
		price: '£2,000',
		availability: '1 exclusive',
		colour: 'bg-sky-400',
		benefits: [
			'Slot for 5 min keynote',
			'Exclusive opportunity for a Microsoft Partner to highlight their community work',
			'Logo across all materials',
			'Recognition in opening and closing remarks'
		]
	},
	'conference-lunch': {
		label: 'Conference Lunch',
		price: '£1,300',
		availability: '1 exclusive',
		colour: 'bg-brand-black',
		benefits: [
			'Premium visibility during lunch with banners',
			'Recognition in opening/closing remarks',
			'Logo on printed materials'
		]
	},
	track: {
		label: 'Track Sponsorship',
		price: '£500',
		availability: 'Gold Add-on (2 available)',
		colour: 'bg-orange-300',
		benefits: [
			'Exclusive naming rights for one conference track',
			'Agenda placement',
			'Logo on slides',
			'Shout-outs during opening and closing remarks'
		]
	},
	digital: {
		label: 'Digital',
		price: '£250',
		availability: 'Unlimited',
		colour: 'bg-green-400',
		benefits: [
			'Logo on website and slides',
			'Thank you mention on social media and event materials'
		]
	}
};

// Tier display order
export const tierOrder: SponsorTier[] = [
	'gold',
	'silver',
	'recruitment',
	'microsoft-partner',
	'conference-lunch',
	'track',
	'digital'
];
