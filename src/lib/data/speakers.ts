// ============================================================
// SPEAKERS DATA
// Add, remove, or edit speaker entries here.
// Photos go in /static/speakers/ — reference by filename.
// ============================================================

export interface Speaker {
	name: string;
	title: string;
	company: string;
	bio: string;
	photo: string;
	linkedin?: string;
}

export const speakers: Speaker[] = [
	{
		name: 'Sarah Chen',
		title: 'Head of Data Engineering',
		company: 'Northern Health Analytics',
		bio: 'Sarah leads a team of 20 data engineers building real-time pipelines for NHS trusts across the North West.',
		photo: '/speakers/placeholder-1.jpg',
		linkedin: '#'
	},
	{
		name: 'James Okonkwo',
		title: 'Principal ML Engineer',
		company: 'AutoTrader',
		bio: 'James works on recommendation systems and has a passion for making ML accessible to product teams.',
		photo: '/speakers/placeholder-2.jpg',
		linkedin: '#'
	},
	{
		name: 'Priya Sharma',
		title: 'Analytics Director',
		company: 'Co-op Digital',
		bio: 'Priya leads analytics strategy and champions data literacy across one of the UK\'s largest co-operatives.',
		photo: '/speakers/placeholder-3.jpg',
		linkedin: '#'
	},
	{
		name: 'Tom Mayfield',
		title: 'Data Governance Lead',
		company: 'BBC MediaCity',
		bio: 'Tom specialises in responsible AI governance and building trust frameworks for large media organisations.',
		photo: '/speakers/placeholder-4.jpg',
		linkedin: '#'
	},
	{
		name: 'Aisha Patel',
		title: 'Senior Data Scientist',
		company: 'Booking.com',
		bio: 'Aisha focuses on causal inference and experimentation platforms. A regular speaker at community meetups.',
		photo: '/speakers/placeholder-5.jpg',
		linkedin: '#'
	},
	{
		name: 'David Roberts',
		title: 'Power BI Consultant',
		company: 'Independent',
		bio: 'David helps organisations across Manchester unlock value from their data with Power BI and Fabric.',
		photo: '/speakers/placeholder-6.jpg',
		linkedin: '#'
	}
];
