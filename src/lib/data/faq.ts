// ============================================================
// FAQ DATA
// Edit questions and answers here.
// ============================================================

export interface FAQItem {
	question: string;
	answer: string;
}

export const generalFaq: FAQItem[] = [
	{
		question: 'Is the event really free?',
		answer: 'Yes, completely free. Manchester Data Hive is a community-run event. We keep it free thanks to the generosity of our sponsors.'
	},
	{
		question: 'Who is this event for?',
		answer: 'Anyone who works with data, analytics, or AI — whether you\'re a data engineer, analyst, scientist, BI developer, architect, or just data-curious. All experience levels are welcome.'
	},
	{
		question: 'Do I need to bring anything?',
		answer: 'Just yourself and an open mind. We\'ll provide coffee, lunch, and refreshments throughout the day. A laptop is optional but not necessary.'
	},
	{
		question: 'Will sessions be recorded?',
		answer: 'We plan to record sessions where speakers consent. Recordings will be published on our YouTube channel after the event.'
	},
	{
		question: 'Is there a Code of Conduct?',
		answer: 'Yes. We\'re committed to providing a welcoming and harassment-free experience for everyone. Our full Code of Conduct will be published ahead of the event and shared with all attendees.'
	},
	{
		question: 'How do I get to the venue?',
		answer: 'The venue is centrally located in Manchester with excellent public transport links. Check our Venue page for detailed directions, parking info, and accessibility details.'
	},
	{
		question: 'Can I sponsor or partner with the event?',
		answer: 'Absolutely! We have sponsorship tiers to suit different budgets. Head to the Sponsors page or email us directly to start a conversation.'
	}
];

export const ticketsFaq: FAQItem[] = [
	{
		question: 'How much do tickets cost?',
		answer: 'Nothing — tickets are completely free. We believe community events should be accessible to everyone.'
	},
	{
		question: 'Can I get a refund?',
		answer: 'Since tickets are free, there\'s no refund to process. If you can\'t make it, please cancel your ticket so someone on the waitlist can attend.'
	},
	{
		question: 'Is there a waitlist?',
		answer: 'If tickets sell out, we\'ll open a waitlist. We\'ll notify waitlisted attendees if spaces become available.'
	},
	{
		question: 'Will food be provided?',
		answer: 'Yes. We\'ll provide coffee, tea, and refreshments on arrival and during breaks, plus a full lunch. Please let us know about dietary requirements when registering.'
	}
];

export const speakerFaq: FAQItem[] = [
	{
		question: 'What topics are you looking for?',
		answer: 'Anything in the data, analytics, and AI space — from Power BI tips to ML engineering, data governance to GenAI, career advice to architectural deep-dives. We want a diverse programme.'
	},
	{
		question: 'I\'ve never spoken before. Can I still apply?',
		answer: 'Yes, please do! We actively encourage first-time speakers. We\'ll pair you with a mentor to help with your abstract, slides, and delivery.'
	},
	{
		question: 'What session formats are available?',
		answer: 'Lightning talks (20–30 minutes) and standard sessions (45–60 minutes). Let us know your preference and we\'ll work with you.'
	},
	{
		question: 'Will my session be recorded?',
		answer: 'We\'d like to record sessions, but it\'s entirely your choice. You can opt out of recording with no questions asked.'
	},
	{
		question: 'Is travel support available?',
		answer: 'We have a limited fund to help speakers with travel costs. If budget is a barrier, please mention it in your submission and we\'ll do our best.'
	},
	{
		question: 'When will I hear back?',
		answer: 'We aim to review all submissions within four weeks of the CfS closing date. You\'ll hear from us either way.'
	}
];
