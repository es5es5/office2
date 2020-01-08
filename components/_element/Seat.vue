<template>
	<div class="seat" :class="{ 'draggable' : _isDraggable }" :draggable="_isDraggable">
		<p class="seatTitle">{{ 'title' }}</p>
	</div>
</template>

<script>
import MixinDraggable from '../MixinDraggable'

export default {
	name: 'Seat',
	mixins: [ MixinDraggable ]
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
