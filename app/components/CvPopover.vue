<script setup lang="ts">
	import { Download, ExternalLink, FileText } from '@lucide/vue';
	import { Button } from '@/components/ui/button';
	import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

	const VIEW_URL = 'https://devharshthakur.github.io/cv/assets/cv.pdf';
	const DOWNLOAD_URL = 'https://github.com/devharshthakur/cv/releases/latest/download/cv.pdf';
</script>

<template>
	<Popover>
		<PopoverTrigger as-child>
			<Button variant="outline"> <FileText class="h-4 w-4" />CV </Button>
		</PopoverTrigger>
		<PopoverContent class="w-72">
			<div class="flex flex-col gap-1">
				<h3 class="font-semibold leading-none">Curriculum Vitae</h3>
				<p class="text-xs text-muted-foreground">Last updated July 2026</p>
			</div>
			<div class="mt-4 flex flex-col gap-2">
				<Button as-child size="sm">
					<a
						:href="VIEW_URL"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="View CV (opens PDF in new tab)"
					>
						<ExternalLink class="h-4 w-4" />View CV
					</a>
				</Button>
				<Button as-child variant="outline" size="sm">
					<a :href="DOWNLOAD_URL" aria-label="Download CV as PDF">
						<Download class="h-4 w-4" />Download PDF
					</a>
				</Button>
			</div>
		</PopoverContent>
	</Popover>
</template>
