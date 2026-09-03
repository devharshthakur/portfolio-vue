<script setup lang="ts">
	useHead({
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	});
</script>

<template>
	<div>
		<div class="fixed right-6 top-8 z-50">
			<ModeToggle />
		</div>
		<NuxtPage />
	</div>
</template>
