
import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'
import { TestWatcher, createTestScheduler } from 'jest'


describe ('Counter Component', ()=>{

    let wrapper 

    beforeEach(()=> {
        wrapper = shallowMount(Counter)
    })

    // test('Debe hacer match con el snapshot', () => { 

    //     const wrapper = shallowMount(Counter)
        
    //     expect(wrapper.html()).toMatchSnapshot()
    // })

    test('h2 debe tener el valor por defecto "Counter"', () => 
   { 

        const h2Value = wrapper.find('h2').text()

        expect (h2Value).toBe('Counter')
    })

    // test('El valor por defecto en la etiqueta <p> debe ser 100', () => { 
        // Wrapper 
        // pTags
        // const pTags = wrapper.findAll('p')
        // const value = wrapper.find('[data-testid="counter"]')

        // expect segundo p=== 100
        // expect(pTags[0].text()).toBe('100')
    //     expect((value).text()).toBe('100');
    // })

    test('Debe incrementar y decrementar el contador', async() => { 

        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')
        
        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');
        
        
        await decreaseBtn.trigger('click');
        await decreaseBtn.trigger('click');

        const value = wrapper.find('[data-testid="counter"]').text()
       
        expect(value).toBe('101');   
           
    })
    test('Debe establecer el valor por defecto ', () => {

        // const start = wrapper.props('start')
        // otra forma
        const {start} = wrapper.props();
        // console.log ( start );
        const value = wrapper.find('[data-testid="counter"]').text();
        expect (Number(value)).toBe( start );
    });

})