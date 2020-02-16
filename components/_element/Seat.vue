<template>
	<div class="seat"
		:id="_id"
		:draggable="_isDraggable"
		:class="[
			{ 'draggable' : _isDraggable },
			{ 'dragOver' : isDragOver },
		]"
		:style="`background-color: ${_color};`"
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
	props: {
		id: {
			type: String,
			required: true,
			default: () => ''
		},
		color: {
			type: String,
			required: false,
			default: () => 'aquamarine'
		}
	},
	computed: {
		_id () {
			return this.id
		},
		_color () {
			return this.color
		}
	},
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
}

.seatTitle {
	position: absolute;
	top: 0;
	left: 0;
}
</style>
