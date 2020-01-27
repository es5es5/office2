import { shallowMount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

describe('Logo.vue', () => {
	it('Logo is Vue Instance.', () => {
		const wrapper = shallowMount(Logo)
		expect(wrapper.isVueInstance).toBeTruthy()
	})
})
