<script setup lang="ts">
	import { ArrowLeft, ArrowUpRight, Mail } from '@lucide/vue';
	import { Button } from '@/components/ui/button';
	import { Card, CardContent } from '@/components/ui/card';
	import { CONTACT_DETAILS } from '@/data/contact';
	import type { ContactMethod } from '@/components/ContactCard.vue';

	useSeoMeta({
		title: 'Contact — Harsh Thakur',
		description:
			'Have a project, question, or want to collaborate? Get in touch with Harsh Thakur.',
		ogTitle: 'Contact — Harsh Thakur',
		ogDescription:
			'Have a project, question, or want to collaborate? Get in touch with Harsh Thakur.',
	});

	useHead({
		link: [{ rel: 'canonical', href: 'https://devht.in/contact' }],
	});

	const contactMethods: ContactMethod[] = [
		{
			label: 'LinkedIn',
			href: CONTACT_DETAILS.linkedin.link,
			display: `linkedin.com/${CONTACT_DETAILS.linkedin.username}`,
			external: true,
		},
		{
			label: 'GitHub',
			href: CONTACT_DETAILS.github.link,
			display: `github.com/${CONTACT_DETAILS.github.username}`,
			external: true,
		},
		{
			label: 'Phone',
			href: `tel:+${CONTACT_DETAILS.phone.country_code}${CONTACT_DETAILS.phone.number}`,
			display: `+${CONTACT_DETAILS.phone.country_code} ${CONTACT_DETAILS.phone.number}`,
		},
	];
</script>

<template>
	<div class="mx-auto flex min-h-screen max-w-4xl flex-col px-5 sm:px-6">
		<main class="flex flex-1 flex-col justify-center py-24 sm:py-28">
			<Button as-child variant="ghost" size="sm" class="fixed left-3 top-7 z-50 sm:left-4">
				<NuxtLink to="/"> <ArrowLeft class="size-3.5" aria-hidden="true" />Back home </NuxtLink>
			</Button>

			<header class="mx-auto mb-8 w-full max-w-2xl sm:mb-10">
				<h1 class="mb-4 text-4xl font-semibold tracking-tighter text-balance sm:text-5xl">
					Let's work together.
				</h1>
				<p class="max-w-lg leading-relaxed text-pretty text-muted-foreground">
					Have a project in mind, a question, or just want to say hello? I'd love to hear from you.
				</p>
			</header>

			<div class="mx-auto w-full max-w-2xl space-y-6">
				<Card class="shadow-none">
					<CardContent class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
						<div class="min-w-0 space-y-2">
							<p class="flex items-center gap-2 text-sm text-muted-foreground">
								<Mail class="size-4" aria-hidden="true" />Email
							</p>
							<p class="text-sm font-medium break-all sm:text-base">{{ CONTACT_DETAILS.email }}</p>
						</div>
						<Button as-child class="w-full sm:w-auto">
							<a :href="`mailto:${CONTACT_DETAILS.email}`">
								Email me <ArrowUpRight class="size-4" aria-hidden="true" />
							</a>
						</Button>
					</CardContent>
				</Card>

				<nav aria-label="Other contact methods" class="space-y-2">
					<ContactCard v-for="method in contactMethods" :key="method.label" :method="method" />
				</nav>
			</div>
		</main>
	</div>
</template>
