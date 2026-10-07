<script setup lang="ts">
	import { Icon } from '@iconify/vue';
	import { FolderKanban, Mail } from '@lucide/vue';
	import { Button } from '@/components/ui/button';

	useSeoMeta({
		title: 'Personal Portfolio',
		description:
			'Software developer specializing in web development. Explore my projects, blog, and get in touch.',
		ogTitle: 'Harsh Thakur — Portfolio',
		ogDescription:
			'Software developer specializing in web development. Explore my projects, blog, and get in touch.',
	});

	useHead({
		link: [{ rel: 'canonical', href: 'https://devht.in/' }],
	});
</script>

<template>
	<div>
		<Button as-child variant="link" size="icon-lg" class="fixed right-16 top-8 z-50 size-11">
			<a
				href="https://github.com/devharshthakur/portfolio-sv"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="View source on GitHub"
			>
				<Icon icon="mdi:github" class="h-8 w-8" />
			</a>
		</Button>

		<div id="about-section" class="flex min-h-screen flex-col items-center justify-center p-5">
			<section class="flex flex-col items-center gap-8 md:flex-row md:gap-12">
				<div class="shrink-0 rounded-full border-2 border-border p-1.5">
					<img
						src="/images/pfp.webp"
						alt="Harsh Thakur"
						class="h-36 w-36 rounded-full object-cover md:h-50 md:w-50"
					/>
				</div>
				<div class="max-w-prose text-center md:text-left">
					<h1 class="mb-4 text-4xl font-semibold tracking-tighter md:text-5xl">Harsh Thakur</h1>
					<p class="text-muted-foreground">
						I'm a software developer who just finished college, specializing in web development. I'm
						passionate about building web applications and have recently started learning Rust to
						explore low-level programming projects. I enjoy the challenge of working across
						different layers of technology, from frontend interfaces to system-level code, and I'm
						always eager to expand my skills in both web technologies and systems programming.
					</p>
				</div>
			</section>

			<nav class="ml-10 mt-4 flex flex-wrap items-center justify-center gap-3">
				<Button as-child variant="outline">
					<NuxtLink to="/projects"> <FolderKanban class="h-4 w-4" />Projects </NuxtLink>
				</Button>

				<Button as-child variant="outline" class="hover:bg-transparent">
					<a href="https://github.com/devharshthakur" target="_blank" rel="noopener noreferrer">
						<Icon icon="mdi:github" class="h-4 w-4" />GitHub
					</a>
				</Button>

				<Button as-child variant="outline">
					<NuxtLink to="/contact"> <Mail class="h-4 w-4" />Contact </NuxtLink>
				</Button>
				<CvPopover />
			</nav>
		</div>
	</div>
</template>
