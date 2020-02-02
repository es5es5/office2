<template>
	<div class="office_create">
		<Seat v-for="(item, index) in 3" :key="index">
		</Seat>
		<SimpleZone></SimpleZone>
	</div>
</template>

<script>
export default {
	name: 'OfficeCreate',
	methods: {
	}
}
</script>

<style lang="scss" scoped>
</style>
