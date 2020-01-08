<template>
	<div></div>
</template>

<script>
export default {
	name: 'MixinDraggable',
	props: {
		isDraggable: {
			type: Boolean,
			default: () => true
		}
	},
	computed: {
		_isDraggable () {
			return this.isDraggable
		}
	}
}
</script>

<style>

</style>
