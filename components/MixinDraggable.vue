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
	},
	data() {
		return {
			isDragOver: false
		}
	},
	methods: {
		dragStart (event) {
			event.dataTransfer.setData('text', event.target.id)
			console.info('=== dragStart ===', event.target)
		},
		dragEnd (e) {
			console.info('=== dragEnd ===', e.target)
			this.isDragOver = false
		},
		dragOver (e) {
			// console.info('=== dragOver ===', e.target)
			this.isDragOver = true
		},
		drop (e) {
			console.info('=== drop ===', e.target)
		},
	}
}
</script>
