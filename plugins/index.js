import Vue from 'vue'

import GlobalComponents from '../components'

import COMMON from '../assets/js/common'


Vue.use(GlobalComponents)
Vue.use(COMMON)

Vue.prototype.COMMON = COMMON
