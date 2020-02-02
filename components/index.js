import Seat from './_element/Seat'
import SimpleZone from './_element/SimpleZone'

export default {
	install (Vue) {
		Vue.component('Seat', Seat)
		Vue.component('SimpleZone', SimpleZone)
	}
}
