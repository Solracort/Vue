
import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'


describe ('Counter Component', ()=>{

    // test('Debe hacer match con el snapshot', () => { 

    //     const wrapper = shallowMount(Counter)
        
    //     expect(wrapper.html()).toMatchSnapshot()
    // })

    test('h2 debe tener el valor por defecto "Counter"', () => 
   { 
        const wrapper = shallowMount(Counter)

        const h2Value = wrapper.find('h2').text()

        expect (h2Value).toBe('Counter')
    })

})