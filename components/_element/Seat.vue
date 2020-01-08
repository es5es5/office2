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
		<p class="seatTitle">{{ 'title' }}</p>
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
	width: 4rem;
	height: 4rem;
	background-color: red;
}

.seatTitle {
	position: absolute;
	top: 0;
	left: 0;
}
</style>
