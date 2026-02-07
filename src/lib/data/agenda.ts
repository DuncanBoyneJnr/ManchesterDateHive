// ============================================================
// AGENDA DATA
// Edit the schedule here. Tracks are optional.
// ============================================================

export interface AgendaItem {
	time: string;
	title: string;
	description: string;
	speaker?: string;
	track?: string;
	type?: 'break' | 'keynote' | 'talk' | 'lightning' | 'panel';
}

export const agenda: AgendaItem[] = [
	{
		time: '08:30',
		title: 'Registration & Coffee',
		description: 'Doors open. Grab a coffee and find your seat.',
		type: 'break'
	},
	{
		time: '09:15',
		title: 'Welcome & Opening',
		description: 'Welcome to Manchester Data Hive. Housekeeping and the day ahead.',
		type: 'keynote'
	},
	{
		time: '09:30',
		title: 'Keynote: The State of Data in the North',
		description: 'A look at the thriving data community across Northern England and where it\'s heading.',
		speaker: 'Sarah Chen',
		type: 'keynote'
	},
	{
		time: '10:15',
		title: 'Building Real-Time Pipelines with Fabric',
		description: 'Practical lessons from migrating batch workloads to real-time with Microsoft Fabric.',
		speaker: 'David Roberts',
		track: 'Data Engineering',
		type: 'talk'
	},
	{
		time: '11:00',
		title: 'Break & Networking',
		description: 'Refreshments and time to connect with fellow attendees.',
		type: 'break'
	},
	{
		time: '11:20',
		title: 'From Notebooks to Production ML',
		description: 'How to bridge the gap between data science experimentation and production deployment.',
		speaker: 'James Okonkwo',
		track: 'Machine Learning',
		type: 'talk'
	},
	{
		time: '12:05',
		title: 'Lightning Talk: Responsible AI in Practice',
		description: 'Quick-fire insights on embedding responsible AI principles into your team\'s workflow.',
		speaker: 'Tom Mayfield',
		track: 'Governance',
		type: 'lightning'
	},
	{
		time: '12:30',
		title: 'Lunch',
		description: 'Lunch provided for all attendees. A great chance to network.',
		type: 'break'
	},
	{
		time: '13:30',
		title: 'Data Literacy: Making Analytics Stick',
		description: 'How to build a data-literate culture and get stakeholders to actually use dashboards.',
		speaker: 'Priya Sharma',
		track: 'Analytics',
		type: 'talk'
	},
	{
		time: '14:15',
		title: 'Designing Experiments That Matter',
		description: 'A practical guide to A/B testing, causal inference, and knowing when not to experiment.',
		speaker: 'Aisha Patel',
		track: 'Data Science',
		type: 'talk'
	},
	{
		time: '15:00',
		title: 'Break & Networking',
		description: 'Afternoon refreshments and sponsor exhibits.',
		type: 'break'
	},
	{
		time: '15:20',
		title: 'Panel: GenAI — Hype vs Reality',
		description: 'An honest panel discussion on what generative AI is actually delivering in enterprise today.',
		type: 'panel'
	},
	{
		time: '16:10',
		title: 'Closing Remarks & Community Awards',
		description: 'Wrapping up the day, shout-outs, and what\'s next for the Manchester Data Hive community.',
		type: 'keynote'
	},
	{
		time: '16:30',
		title: 'Networking Drinks',
		description: 'Stick around for drinks, conversations, and connections.',
		type: 'break'
	}
];
