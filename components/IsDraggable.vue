<template>
	<div class="is_draggable" :draggable="_isDraggable">
	</div>
</template>

<script>
export default {
	name: 'IsDraggable',
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
	},
}
</script>

<style lang="scss" scoped>
.is_draggable {
	width: 100%;
	height: auto;
}
</style>
