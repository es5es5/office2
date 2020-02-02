<template>
	<div class="seat"
		:draggable="_isDraggable"
		:class="[
			{ 'draggable' : _isDraggable },
			{ 'dragOver' : isDragOver },
		]"
		@dragstart="dragStart"
		@dragend="dragEnd"
		@dragover="dragOver"
		@drop="drop"
	>
		<p class="seatTitle">{{ 'SEAT' }}</p>
	</div>
</template>

<script>
import MixinDraggable from '../MixinDraggable'

export default {
	name: 'Seat',
	mixins: [ MixinDraggable ],
	data() {
		return {
		}
	},
}
</script>

<style lang="scss" scoped>
.seat {
	position: relative;
	display: inline-block;
	width: 4rem;
	height: 4rem;
	margin: .25rem;
	background-color: aquamarine;
}

.seatTitle {
	position: absolute;
	top: 0;
	left: 0;
}
</style>
