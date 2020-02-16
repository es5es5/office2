<template>
	<div class="office_create">
		<Seat :id="COMMON.UUID()" :color="COMMON.COLOR141()" v-for="index in 5" :key="index">
		</Seat>
		<SimpleZone :id="COMMON.UUID()" :color="COMMON.COLOR141()"></SimpleZone>
	</div>
</template>

<script>
export default {
	name: 'OfficeCreate',
	created () {
	},
	data () {
		return {
		}
	},
	methods: {
	}
}
</script>

<style lang="scss" scoped>
</style>
