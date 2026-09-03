<script setup lang="ts">
	import { Download, ExternalLink } from '@lucide/vue';
	import { Button } from '@/components/ui/button';

	useSeoMeta({
		title: 'CV — Harsh Thakur',
		description:
			"View or download Harsh Thakur's curriculum vitae — full-stack web developer specializing in Svelte, React, Express, and databases, with experience in Rust.",
		ogTitle: 'CV — Harsh Thakur',
		ogDescription:
			"View or download Harsh Thakur's curriculum vitae — full-stack web developer specializing in Svelte, React, Express, and databases, with experience in Rust.",
	});

	useHead({
		link: [{ rel: 'canonical', href: 'https://devht.in/cv' }],
	});

	const VIEW_URL = 'https://devharshthakur.github.io/cv/assets/cv.pdf';
	const DOWNLOAD_URL = 'https://github.com/devharshthakur/cv/releases/latest/download/cv.pdf';
</script>

<template>
	<div class="mx-auto flex min-h-screen flex-col px-5 sm:px-6">
		<main class="flex flex-1 flex-col items-center justify-center">
			<BackHome />

			<div class="flex flex-col items-center gap-8 text-center">
				<div class="flex flex-col items-center gap-3">
					<div class="flex flex-col gap-1.5">
						<h1 class="text-4xl font-semibold tracking-tighter sm:text-5xl">Curriculum Vitae</h1>
						<p class="text-sm text-muted-foreground">Last updated July 2026</p>
					</div>
				</div>
				<div class="flex flex-col gap-3 sm:flex-row">
					<Button as-child>
						<a
							:href="VIEW_URL"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="View CV (opens PDF in new tab)"
						>
							<ExternalLink class="h-4 w-4" />
							View CV
						</a>
					</Button>
					<Button as-child variant="outline">
						<a :href="DOWNLOAD_URL" aria-label="Download CV as PDF">
							<Download class="h-4 w-4" />
							Download PDF
						</a>
					</Button>
				</div>
			</div>
		</main>
	</div>
</template>
