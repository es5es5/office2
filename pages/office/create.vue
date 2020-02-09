<template>
	<div class="office_create">
		<Seat :id="COMMON.UUID()" v-for="index in 5" :key="index">
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
