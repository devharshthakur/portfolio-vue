export enum STATUS {
	IN_PROGRESS,
	COMPLETED,
}

export type Project = {
	title: string;
	description: string;
	techStack: string[];
	githubUrl: string;
	status: STATUS;
	livePreviewUrl: string | null;
};

export const projects: Project[] = [
	{
		title: 'rs-torrent-client',
		description:
			'Implementation of go-torrent-client in rust. A BitTorrent client implementation showcasing Rust programming capabilities.',
		techStack: ['Rust', 'BitTorrent'],
		githubUrl: 'https://github.com/devharshthakur/rs-torrent-client',
		status: STATUS.IN_PROGRESS,
		livePreviewUrl: null,
	},
	{
		title: 'shabdakosha',
		description:
			'A blazing-fast offline dictionary lookup system built in Rust, featuring multiple search algorithms and performance benchmarking capabilities.',
		techStack: ['Rust'],
		githubUrl: 'https://github.com/devharshthakur/shabdakosha',
		status: STATUS.COMPLETED,
		livePreviewUrl: null,
	},
	{
		title: 'rdns.toys',
		description:
			'A rust implementation of dns.toys project by Kailash Nadh. A DNS-based toy API service.',
		techStack: ['Rust', 'DNS'],
		githubUrl: 'https://github.com/devharshthakur/rdns.toys',
		status: STATUS.COMPLETED,
		livePreviewUrl: null,
	},
	{
		title: 'nodetsp',
		description:
			'A CLI tool that bootstraps a Node.js based TypeScript project with standard configs applied for you. Simplifies project setup with best practices.',
		techStack: ['TypeScript', 'Node.js', 'CLI'],
		githubUrl: 'https://github.com/devharshthakur/nodetsp',
		status: STATUS.COMPLETED,
		livePreviewUrl: null,
	},
	{
		title: 'ispub',
		description:
			'NPM Package Checker is a developer utility tool that allows you to quickly verify if a package name is available for publishing on npm. Built with Next.js and styled with Tailwind CSS.',
		techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Radix UI'],
		githubUrl: 'https://github.com/devharshthakur/ispub',
		status: STATUS.COMPLETED,
		livePreviewUrl: null,
	},
	{
		title: 'trycatch-lib',
		description:
			'A utility to replace try-catch blocks with a tuple based error handling pattern. Provides a functional approach to error handling in TypeScript.',
		techStack: ['TypeScript', 'Node.js', 'Library'],
		githubUrl: 'https://github.com/devharshthakur/trycatch-lib',
		status: STATUS.COMPLETED,
		livePreviewUrl: null,
	},
	{
		title: 'quickpng',
		description: 'A SVG to PNG converter tool providing quick image conversion capabilities.',
		techStack: ['TypeScript', 'Next.js'],
		githubUrl: 'https://github.com/devharshthakur/quickpng',
		status: STATUS.COMPLETED,
		livePreviewUrl: null,
	},
	{
		title: 'portfolio',
		description: 'Personal developer portfolio website showcasing projects and skills.',
		techStack: ['TypeScript', 'Next.js'],
		githubUrl: 'https://github.com/devharshthakur/portfolio',
		status: STATUS.COMPLETED,
		livePreviewUrl: null,
	},
	{
		title: 'fu-go-rs',
		description: 'A Rust implementation project.',
		techStack: ['Rust'],
		githubUrl: 'https://github.com/devharshthakur/fu-go-rs',
		status: STATUS.IN_PROGRESS,
		livePreviewUrl: null,
	},
	{
		title: 'securepass',
		description: 'A simple password manager',
		techStack: ['Typescript', 'svelte', 'express', 'turbo repo'],
		githubUrl: 'https://github.com/devharshthakur/securepass',
		status: STATUS.COMPLETED,
		livePreviewUrl: null,
	},
];
