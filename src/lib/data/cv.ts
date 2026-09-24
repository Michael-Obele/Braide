/**
 * Single source of truth for all site content,
 * distilled from "Damiete Katerina's CV (1).pdf".
 */

export const profile = {
	name: 'Damiete Katerina Braide',
	firstName: 'Damiete',
	role: 'Network Solutions Engineer',
	location: 'Abuja, Nigeria',
	email: 'ambraidekaterina@gmail.com',
	phone: '+234 907 731 7693',
	phoneHref: 'tel:+2349077317693',
	/** Sole social profile — keep other channels out unless explicitly added. */
	linkedin: 'https://www.linkedin.com/in/katerina-braide',
	/** dev.to profile + API username — powers the Writing section feed. */
	devto: 'https://dev.to/braide',
	devtoUsername: 'braide',
	tagline: 'Network Solutions Sales Engineer',
	summary:
		'I design and run enterprise WLAN and campus networks for banks, government offices, and schools in Nigeria. I hold 13 Huawei certifications across Datacom, WLAN, security, storage, IP networking, and presales, and I work hands-on with iMaster NCE, SD-WAN, and Wi-Fi 7 proofs of concept.'
} as const;

/**
 * Social profiles rendered in the footer — edit hrefs or delete rows you do not use.
 * Icon keys must match an entry in `socials.svelte` `paths`.
 */
export const socials = [
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/katerina-braide', icon: 'linkedin' },
	// { label: 'GitHub', href: 'https://github.com/', icon: 'github' },
	// { label: 'X', href: 'https://x.com/', icon: 'x' },
	// { label: 'Medium', href: 'https://medium.com/', icon: 'medium' },
	// { label: 'Substack', href: 'https://substack.com/', icon: 'substack' },
	{ label: 'dev.to', href: 'https://dev.to/braide', icon: 'devdotto' }
] as const;

export const roles = ['Network Engineer', 'Technical Writer', 'ICT Instructor'] as const;

export const stats = [
	{ value: 15, suffix: '+', label: 'Enterprise clients served' },
	{ value: 100, suffix: '+', label: 'Engineers mentored' },
	{ value: 13, suffix: '', label: 'Huawei certifications' },
	{ value: 7, suffix: '', label: 'Sites, largest rollout' }
] as const;

export interface Experience {
	company: string;
	role: string;
	period: string;
	current?: boolean;
	highlights: string[];
}

export const experience: Experience[] = [
	{
		company: 'Huawei Technologies Co., Ltd.',
		role: 'Network Solutions Engineer',
		period: 'Jul 2025 to Present',
		current: true,
		highlights: [
			'I design and deliver WLAN for 15 enterprise clients in banking, government, and education, including Sterling Bank, Alternative Bank, the Federal Ministry of Agriculture (7 sites), Kano Airport, and Port Harcourt Airport.',
			'I run predictive WLAN simulations and heatmaps with Huawei WLAN Planner to plan coverage, capacity, and performance for new builds and upgrades.',
			'I deployed iMaster NCE-Campus on live networks at the Nigerian Civil Aviation Authority and Mainstream Energy, setting up SSID, WPA3, AD sync, and 802.1X across wired and wireless.',
			'I ran a Wi-Fi 7 proof of concept at Mainstream Energy, testing top speeds and showing C-level staff what a cloud-managed campus can do.',
			'I present CloudCampus solutions to the National Population Commission and Mainstream Energy, walking technical and executive teams through the design, daily running, and return on cost.',
			'I train my team on Cloud-Campus, SD-WAN, and CCTV networking, so we can repeat what works on each new job.'
		]
	},
	{
		company: 'WELTEK Limited',
		role: 'Tech Support Engineer',
		period: 'Apr 2024 to Mar 2025',
		highlights: [
			'I set up and kept up routing, switching, and firewall gear, cutting downtime with proactive fault fixing and clear security rules.',
			'I built network designs to fit each client, working with sales and delivery so the build matched how the business runs.',
			'I kept bid documents and topology records in order, so every job was ready for audit.',
			'I fixed complex faults across layers and got services back inside agreed times.'
		]
	},
	{
		company: 'Huawei ICT Academy · University of Port Harcourt',
		role: 'ICT Instructor',
		period: '2021 to 2025',
		highlights: [
			'I started and grew a Huawei ICT certification program, guiding 100+ students toward HCIA and HCIP and helping them get job-ready.',
			'I wrote hands-on lab lessons on networking, cloud, and enterprise setups, matched to Huawei global standards.'
		]
	},
	{
		company: 'Viguo IT Solutions',
		role: 'IT Support',
		period: '2021 to 2022',
		highlights: [
			'I gave first- and second-line IT support across hardware, software, and network for a media company.',
			'I set up workstations, printers, and network gear, which helped new staff start faster.'
		]
	}
];

export interface Project {
	client: string;
	scope: string;
	detail: string;
	featured?: boolean;
}

export const projects: Project[] = [
	{
		client: 'Mainstream Energy',
		scope: 'Wi-Fi 7 POC',
		detail:
			'Set up iMaster NCE-Campus, added live devices, configured the full WLAN stack, and ran a Wi-Fi 7 proof of concept that tested next-gen speeds.',
		featured: true
	},
	{
		client: 'Sterling Bank',
		scope: 'Survey + Simulation',
		detail:
			'Full site survey with WLAN simulation and heatmaps, plus a technical proposal to fix coverage and capacity.'
	},
	{
		client: 'Alternative Bank',
		scope: 'Greenfield Design',
		detail:
			'Full wireless design for a site with no connectivity at all, from survey to heatmap-checked proposal.'
	},
	{
		client: 'Federal Ministry of Agriculture & Food Security',
		scope: '7-Site Rollout',
		detail:
			'Surveyed and designed WLAN across 7 sites nationwide, and proposed iMaster NCE to monitor and maintain it all in one place.'
	},
	{
		client: 'Nigerian Civil Aviation Authority',
		scope: 'Live Deployment',
		detail:
			'Put iMaster NCE-Campus on a live production network, adding devices and setting up SSID, login, and AD sync.'
	},
	{
		client: 'Ministry of Foreign Affairs',
		scope: 'Tiered Proposal',
		detail:
			'Surveyed the site and wrote a three-tier proposal to fit the budget, with simulation results and coverage heatmaps.'
	},
	{
		client: 'National Population Commission',
		scope: '10 Gbps CloudCampus',
		detail:
			'Showed execs how Huawei 10 Gbps CloudCampus works, including cloud management and automated daily running.'
	},
	{
		client: 'University of Abuja',
		scope: '5 Departments',
		detail:
			'Surveyed 5 departments and wrote a full WLAN upgrade proposal with simulation and coverage maps.'
	},
	{
		client: 'Glisten International Academy',
		scope: 'Indoor + Outdoor',
		detail:
			'Designed indoor and outdoor WLAN with routers, firewall, core switches, PoE switches, and APs.'
	},
	{
		client: 'Airports, Universities & Tribunal',
		scope: 'Simulation Portfolio',
		detail:
			'Simulation-based WLAN designs for Kano Airport, Port Harcourt Airport, University of Ilorin, University of Katsina, and the Code of Conduct Tribunal, with predicted coverage maps.'
	}
];

export const skillGroups = [
	{
		title: 'Networking & Infrastructure',
		icon: 'network',
		skills: [
			'TCP/IP',
			'OSI Model',
			'LAN/WAN',
			'VLAN',
			'Routing & Switching',
			'WLAN Design',
			'Network Security',
			'Firewall Configuration',
			'SD-WAN',
			'Campus Networks'
		]
	},
	{
		title: 'Huawei Stack',
		icon: 'router',
		skills: [
			'iMaster NCE-Campus',
			'VRP Platform',
			'eNSP',
			'WLAN Planner',
			'DemoCloud',
			'Cloud-Campus',
			'Wi-Fi 7',
			'Enterprise Switches · Routers · APs'
		]
	},
	{
		title: 'Protocols & Standards',
		icon: 'signal',
		skills: [
			'802.11a/b/g/n/ac/ax',
			'WPA / WPA2 / WPA3',
			'802.1X',
			'PPSK',
			'RADIUS AAA',
			'MAC Auth',
			'Portal Auth',
			'PoE',
			'AD Synchronization'
		]
	},
	{
		title: 'Presales & Solutions',
		icon: 'shield-check',
		skills: [
			'Site Surveys',
			'Heatmap Analysis',
			'Technical Proposal Writing',
			'Solution Presentations',
			'Predictive Coverage Design',
			'POC Planning & Delivery'
		]
	}
] as const;

export const pocCompetencies = [
	{
		title: 'WLAN',
		items: [
			'Basic services: multi-radio modes, WEP/WPA/WPA2/WPA3 security, multi-SSID, direct/tunnel forwarding, STA access control',
			'QoS: client- and SSID-based rate limits, VIP preferential access, congestion management',
			'Security: AP login via MAC/SN, allow and block lists, PPSK, RADIUS AAA, 802.1X (machine plus username, AD identity source), portal login via iMaster NCE',
			'O&M: AC web management, Fat/Fit mode switching, FTP/AC-mode AP upgrades, SYSLOG'
		]
	},
	{
		title: 'Campus Network · iMaster NCE-Campus',
		items: [
			'Deployment: controller setup, license upload, MSP/tenant accounts, site creation, device onboarding',
			'Network services: wireless/wired 802.1X, guest portal login, VIP bandwidth reservation, preferential access',
			'Monitoring and O&M: device monitoring, log management, fault alarms, network digital maps'
		]
	}
] as const;

export const certifications = [
	{
		tier: 'Professional',
		items: ['HCIP-WLAN', 'HCIA-Datacom', 'Huawei Certified Academy Instructor']
	},
	{
		tier: 'Presales Specialist',
		items: [
			'Network Security',
			'SME Network',
			'Storage',
			'IP Network',
			'Data Center Facility — Power',
			'Data Center Facility — Cooling',
			'Data Center Facility — Storage',
			'SME Network — Professional'
		]
	},
	{
		tier: 'Honors',
		items: ['Seed for the Future (CC)', 'Best Ambassador Award 2023–2024']
	}
] as const;

/**
 * Normalized article shape — whether it came from the live dev.to API
 * or the static fallback below (offline / API down).
 */
export interface Post {
	title: string;
	description: string;
	url: string;
	/** ISO date — sortable. */
	date: string;
	/** Pre-formatted date for display, e.g. "Dec 3 '24". */
	readableDate: string;
	readingMinutes: number;
	tags: string[];
}

/**
 * Static fallback mirroring the dev.to profile, used when the API
 * fetch fails at load time. Keep in sync with dev.to/braide.
 */
export const publications: Post[] = [
	{
		title: 'Managing a team can often feel overwhelming',
		description:
			'A productivity booster that automates repetitive tasks and centralizes project management.',
		url: 'https://dev.to/braide/managing-a-team-can-often-feel-overwhelming-especially-if-youre-not-a-professional-project-3pni',
		date: '2025-01-27',
		readableDate: "Jan 27 '25",
		readingMinutes: 1,
		tags: []
	},
	{
		title: 'Variable Fonts for Dynamic Typography',
		description:
			'One file, infinite weights — using variable fonts to cut payload and enable dynamic typography.',
		url: 'https://dev.to/braide/variable-fonts-for-dynamic-typography-ajm',
		date: '2024-12-03',
		readableDate: "Dec 3 '24",
		readingMinutes: 21,
		tags: ['webdev', 'tutorial', 'css', 'web3']
	},
	{
		title: 'Building Progressive Web Applications using SvelteKit',
		description:
			'Ship an installable, offline-capable app by pairing SvelteKit with service-worker basics.',
		url: 'https://dev.to/braide/building-progressive-web-applications-using-sveltekit-58gj',
		date: '2024-08-02',
		readableDate: "Aug 2 '24",
		readingMinutes: 11,
		tags: ['webdev', 'programming', 'sveltekit']
	},
	{
		title: 'Exploring CSS Units',
		description: 'A quick tour of relative units and when each one earns its place.',
		url: 'https://dev.to/braide/exploring-css-units-1e98',
		date: '2024-05-03',
		readableDate: "May 3 '24",
		readingMinutes: 1,
		tags: ['design', 'css', 'webdev', 'beginners']
	},
	{
		title: 'A Tiny Peep into CSS Houdini',
		description: 'How the CSS Houdini APIs let you extend the browser paint pipeline.',
		url: 'https://dev.to/braide/a-tiny-peep-into-css-houdini-3o7b',
		date: '2024-01-13',
		readableDate: "Jan 13 '24",
		readingMinutes: 4,
		tags: ['css', 'javascript', 'webdev', 'frontend']
	},
	{
		title: 'The Impact and Necessity of Dark Mode on User Experience',
		description: 'Why dark mode is an accessibility requirement, not a trend.',
		url: 'https://dev.to/braide/the-impact-and-necessity-of-dark-mode-on-user-experience-521n',
		date: '2024-01-01',
		readableDate: "Jan 1 '24",
		readingMinutes: 6,
		tags: ['webdev', 'ui', 'developer']
	},
	{
		title: 'Optimizing User Experience: Using Ajax for Dynamic Web Page Loading',
		description: 'Fetch and swap page fragments without a full reload.',
		url: 'https://dev.to/braide/optimizing-user-experience-using-ajax-for-dynamic-web-page-loading-3g43',
		date: '2023-12-31',
		readableDate: "Dec 31 '23",
		readingMinutes: 5,
		tags: ['webdev', 'javascript', 'productivity', 'tutorial']
	},
	{
		title: 'CSS Grid vs. Flexbox: Choosing the Right Layout Technique',
		description: 'One-dimensional vs two-dimensional — how to pick per component.',
		url: 'https://dev.to/braide/css-grid-vs-flexbox-choosing-the-right-layout-technique-1hfa',
		date: '2023-12-30',
		readableDate: "Dec 30 '23",
		readingMinutes: 4,
		tags: ['webdev', 'css', 'productivity']
	},
	{
		title: 'Secure Web Authentication with a Serverless API: A Quick Guide',
		description: 'Wire up token-based auth between a static front end and serverless functions.',
		url: 'https://dev.to/braide/css-deep-4d76',
		date: '2023-12-17',
		readableDate: "Dec 17 '23",
		readingMinutes: 6,
		tags: ['webdev', 'security', 'programming', 'aws']
	},
	{
		title: 'TCP/IP Overview',
		description: 'The four-layer model, encapsulation, and how the pieces actually talk.',
		url: 'https://dev.to/braide/tcpip-overview-58hg',
		date: '2021-12-30',
		readableDate: "Dec 30 '21",
		readingMinutes: 5,
		tags: ['model', 'network', 'beginners']
	},
	{
		title: 'Basic OSI',
		description: 'The seven layers mapped to real troubleshooting steps.',
		url: 'https://dev.to/braide/basic-osi-1pa4',
		date: '2021-12-26',
		readableDate: "Dec 26 '21",
		readingMinutes: 5,
		tags: ['network', 'troubleshooting', 'beginners']
	}
];

export const leadership = [
	{ role: 'Vice President', org: 'NACOS · University of Port Harcourt' },
	{ role: 'Face of NACOS', org: 'University of Port Harcourt' },
	{ role: 'Treasurer', org: 'Bakana Student Association' },
	{ role: 'Global Huawei ICT Competition', org: 'National & Regional stages' }
] as const;

export const education = [
	{ degree: 'MBA', school: 'Miva Open University', period: '2025 to Present' },
	{ degree: 'BSc Computer Science', school: 'University of Port Harcourt', period: '2018 to 2024' }
] as const;
