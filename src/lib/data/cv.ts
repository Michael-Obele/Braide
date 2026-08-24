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
	tagline: 'Network Solutions Sales Engineer',
	summary:
		'Results-driven Network Solutions Engineer designing and deploying enterprise WLAN, campus network, and cloud-managed infrastructure for high-profile clients across banking, government, and education in Nigeria. Huawei-certified across six specializations — from Datacom and Network Security to IP Networking and Presales — with hands-on expertise in iMaster NCE, SD-WAN, and Wi-Fi 7 POC delivery.'
} as const;

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
		period: 'Jul 2025 — Present',
		current: true,
		highlights: [
			'I architect and deliver WLAN solutions for 15 enterprise clients spanning banking, government, and education — including Sterling Bank, Alternative Bank, the Federal Ministry of Agriculture (7 sites), Kano Airport, and Port Harcourt Airport.',
			'I engineer predictive WLAN simulation and heatmap analyses with Huawei WLAN Planner to design optimal coverage, capacity, and performance for greenfield and upgrade deployments.',
			'I deploy iMaster NCE-Campus on live networks at the Nigerian Civil Aviation Authority and Mainstream Energy — configuring SSID, WPA3 authentication, AD synchronization, and 802.1X across wired and wireless infrastructure.',
			'I executed a Wi-Fi 7 POC at Mainstream Energy, validating maximum-throughput benchmarks and demonstrating cloud-managed campus capabilities to C-level stakeholders.',
			'I deliver CloudCampus solution presentations to the National Population Commission and Mainstream Energy, articulating architecture, automated O&M, and ROI to technical and executive audiences.',
			'I drive POC training programs on Cloud-Campus, SD-WAN, and CCTV networking — equipping my team with repeatable delivery frameworks for new product lines.'
		]
	},
	{
		company: 'WELTEK Limited',
		role: 'Tech Support Engineer',
		period: 'Apr 2024 — Mar 2025',
		highlights: [
			'I configured and maintained enterprise routing, switching, and firewall infrastructure — measurably reducing network downtime through proactive fault management and security policy enforcement.',
			'I designed customized networking solutions for diverse business clients, collaborating cross-functionally with sales and delivery to align architecture with operational requirements.',
			'I managed contract-bidding documentation and network topology records, ensuring compliance readiness across all client engagements.',
			'I diagnosed and resolved complex multi-layer network incidents, consistently restoring service within agreed SLA windows.'
		]
	},
	{
		company: 'Huawei ICT Academy · University of Port Harcourt',
		role: 'ICT Instructor',
		period: '2021 — 2025',
		highlights: [
			'I launched and scaled a Huawei ICT certification program, mentoring 100+ students toward HCIA and HCIP credentials and building a pipeline of industry-ready network engineers.',
			'I developed hands-on lab curricula covering networking, cloud, and enterprise solutions aligned to Huawei global education standards.'
		]
	},
	{
		company: 'Viguo IT Solutions',
		role: 'IT Support',
		period: '2021 — 2022',
		highlights: [
			'I delivered first- and second-line IT support across hardware, software, and network layers for a publication and media organization.',
			'I configured workstations, peripherals, and network devices — accelerating onboarding timelines for new staff.'
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
			'Installed iMaster NCE-Campus, onboarded live devices, configured the full WLAN stack, and completed a Wi-Fi 7 proof-of-concept validating next-generation throughput benchmarks.',
		featured: true
	},
	{
		client: 'Sterling Bank',
		scope: 'Survey + Simulation',
		detail:
			'Full site survey with predictive WLAN simulation and heatmap analysis; delivered a technical proposal optimizing wireless coverage and capacity.'
	},
	{
		client: 'Alternative Bank',
		scope: 'Greenfield Design',
		detail:
			'End-to-end wireless design for a site with zero existing connectivity — from site survey through heatmap-validated proposal.'
	},
	{
		client: 'Federal Ministry of Agriculture & Food Security',
		scope: '7-Site Rollout',
		detail:
			'Scaled WLAN survey and design across 7 nationwide locations; proposed iMaster NCE for centralized monitoring and maintenance.'
	},
	{
		client: 'Nigerian Civil Aviation Authority',
		scope: 'Live Deployment',
		detail:
			'Deployed iMaster NCE-Campus on a live production network — onboarded devices and configured SSID, authentication, and AD synchronization.'
	},
	{
		client: 'Ministry of Foreign Affairs',
		scope: 'Tiered Proposal',
		detail:
			'Executed site survey and produced a three-tier budget-aligned WLAN proposal with simulation results and coverage heatmaps.'
	},
	{
		client: 'National Population Commission',
		scope: '10 Gbps CloudCampus',
		detail:
			'Presented Huawei’s 10 Gbps CloudCampus solution — architecture, cloud-managed operations, and automated O&M benefits — to executive stakeholders.'
	},
	{
		client: 'University of Abuja',
		scope: '5 Departments',
		detail:
			'Multi-department site survey and comprehensive WLAN upgrade proposal with simulation and coverage analysis.'
	},
	{
		client: 'Glisten International Academy',
		scope: 'Indoor + Outdoor',
		detail:
			'Designed WLAN topology for indoor and outdoor scenarios — routers, firewall, core switches, PoE access switches, and APs.'
	},
	{
		client: 'Airports, Universities & Tribunal',
		scope: 'Simulation Portfolio',
		detail:
			'Kano Airport · Port Harcourt Airport · University of Ilorin · University of Katsina · Code of Conduct Tribunal — simulation-based WLAN designs with predictive coverage insights.'
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
			'Basic services — multi-radio modes, WEP/WPA/WPA2/WPA3 security, multi-SSID, direct/tunnel forwarding, STA access control',
			'QoS — client- and SSID-based rate limiting, VIP preferential access, congestion management',
			'Security — AP authentication via MAC/SN, whitelist/blacklist, PPSK, RADIUS AAA, 802.1X (machine + username, AD identity source), Portal auth via iMaster NCE',
			'O&M — AC web management, Fat/Fit mode switching, FTP/AC-mode AP upgrades, SYSLOG'
		]
	},
	{
		title: 'Campus Network · iMaster NCE-Campus',
		items: [
			'Deployment — controller installation, license upload, MSP/tenant accounts, site creation, device onboarding',
			'Network services — wireless/wired 802.1X, guest portal auth, VIP bandwidth reservation, preferential access',
			'Monitoring & O&M — device monitoring, log management, fault alarms, network digital maps'
		]
	}
] as const;

export const certifications = [
	{
		tier: 'Professional',
		items: ['HCIP — WLAN', 'HCIA — Datacom', 'Huawei Certified Academy Instructor']
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

export const publications = [
	'Basic OSI & TCP/IP Overview',
	'Secure Web Authentication with a Serverless API: A Quick Guide',
	'CSS Grid vs Flexbox: Using Ajax for Dynamic Web Page Loading',
	'The Impact and Necessity of Dark Mode on User Experience',
	'Building Progressive Web Applications using SvelteKit',
	'Dynamic Styling with JIT Mode | Variable Fonts for Dynamic Typography'
] as const;

export const leadership = [
	{ role: 'Vice President', org: 'NACOS · University of Port Harcourt' },
	{ role: 'Face of NACOS', org: 'University of Port Harcourt' },
	{ role: 'Treasurer', org: 'Bakana Student Association' },
	{ role: 'Global Huawei ICT Competition', org: 'National & Regional stages' }
] as const;

export const education = [
	{ degree: 'MBA', school: 'Miva Open University', period: '2025 — Present' },
	{ degree: 'BSc Computer Science', school: 'University of Port Harcourt', period: '2018 — 2024' }
] as const;
