
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
    test('El valor por defecto en la etiqueta <p> debe ser 100', () => { 
        // Wrapper 
        const wrapper = shallowMount(Counter);
        // pTags
        // const pTags = wrapper.findAll('p')
        const value = wrapper.find('[data-testid="counter"]')

        // expect segundo p=== 100
        // expect(pTags[0].text()).toBe('100')
        expect((value).text()).toBe('100');
    })
    test('Debe incrementar y decrementar el contador', async() => { 
        const wrapper = shallowMount (Counter);

        const increaseBtn = wrapper.find('button')  //encuentra el primero y no busca más coincidencias
        await  increaseBtn.trigger('click');
        let value = wrapper.find('[data-testid="counter"]').text()
        expect(value).toBe('101')

        const decreaseBtn = wrapper.findAll('button')[1]  //encuentra el primero y no busca más coincidencias;

        await decreaseBtn.trigger('click');
        await decreaseBtn.trigger('click');
        value = wrapper.find('[data-testid="counter"]').text()

        expect(value).toBe('99');    
    })
})