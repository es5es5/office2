<template>
	<div class="simple_zone">
		<div class="dropZone"
			@dragover="onDragOver"
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
		onDragOver (event) {
			event.preventDefault()
			// console.log('Zone DragOver', ev)
		},
		onDrop (event) {
			event.preventDefault()
			const id = event.dataTransfer.getData('text')
			console.log('event', event.dataTransfer)
			console.log('id', id)

			const draggableElement = document.getElementById(id)
			// const draggableElement = document.createElement('p') // is a node
			// draggableElement.innerHTML = 'test satu dua tiga'
			const dropzone = event.target


			console.log('dropzone', dropzone)
			console.log('draggableElement', draggableElement)
			dropzone.appendChild(draggableElement)

			event
				.dataTransfer
				.clearData()
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
