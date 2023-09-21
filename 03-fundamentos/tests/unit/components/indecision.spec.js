import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/indecision.vue'

describe ('Indecision Component Suit', ()=>{
    let wrapper 

    beforeEach(()=> {
        wrapper = shallowMount(Indecision)
    })

    test('Debe hacer match con el snapshot: ', () => { 
       
        expect(wrapper.html()).toMatchSnapshot()
    })
})
