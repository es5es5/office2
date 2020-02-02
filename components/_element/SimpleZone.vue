<template>
	<div class="simple_zone">
		<div class="dropZone"
			@dragover.prevent="onDragOver"
			@drop="onDrop"
			>
			<p class="zoneName">Drop Zone</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SimpleZone',
	methods: {
		onDragOver (ev) {
			ev.preventDefault()
			// console.log('Zone DragOver', ev)
		},
		onDrop (ev) {
			if (ev) {
				ev.preventDefault()
				// console.log('Zone Dropped', ev)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.dropZone {
	width: 40rem;
	height: 40rem;
	padding: 1rem;
	background-color: lightblue;
}
</style>
