import IsDraggable from './IsDraggable'

import Seat from './_element/Seat'

export default {
	install (Vue) {
		Vue.component('IsDraggable', IsDraggable)
		Vue.component('Seat', Seat)
	}
}
