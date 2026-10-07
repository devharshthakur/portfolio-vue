<script setup lang="ts">
	import { ArrowUpRight } from '@lucide/vue';
	import { Button } from '@/components/ui/button';

	export interface ContactMethod {
		label: string;
		href: string;
		display: string;
		/** Open in a new tab with noopener noreferrer (external links only). */
		external?: boolean;
		/** Truncate the display text instead of wrapping. */
		truncate?: boolean;
	}

	defineProps<{
		method: ContactMethod;
	}>();
</script>

<template>
	<Button
		as-child
		variant="outline"
		class="group h-auto w-full justify-between gap-4 px-4 py-4 text-left whitespace-normal shadow-none sm:px-5"
	>
		<a
			:href="method.href"
			:target="method.external ? '_blank' : undefined"
			:rel="method.external ? 'noopener noreferrer' : undefined"
		>
			<span class="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:gap-6">
				<span class="shrink-0 sm:w-20">{{ method.label }}</span>
				<span
					class="min-w-0 text-xs font-normal text-muted-foreground sm:text-sm"
					:class="method.truncate ? 'truncate' : 'break-all'"
				>
					{{ method.display }}
				</span>
			</span>
			<ArrowUpRight
				class="size-4 text-muted-foreground group-hover:text-foreground"
				aria-hidden="true"
			/>
		</a>
	</Button>
</template>
