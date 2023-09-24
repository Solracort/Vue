import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/indecision.vue'

describe ('Indecision Component Suit', ()=>{
    
    let wrapper;
    let clgSpy;
    // simulamos (mock) el metodo fetch, el then y el json de respuesta: 
    global.fetch = jest.fn( ()=> Promise.resolve({
        json: ()=> Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
        })
    }) ) ;

    beforeEach(()=> {
        wrapper = shallowMount(Indecision);

        clgSpy = jest.spyOn(console, 'log');

        jest.clearAllMocks();

    })

    test('Debe hacer match con el snapshot: ', () => { 
       
        expect(wrapper.html()).toMatchSnapshot();
    })

    test('Escribir en el input no debe disparar nada (console.log)', async() => {
        
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer');
        
        const input = wrapper.find('input');
        await input.setValue('Hola Mundo');

        expect ( clgSpy).toHaveBeenCalledTimes(1);
        // expect ( getAnswerSpy).toHaveBeenCalledTimes(0);
        expect(getAnswerSpy).not.toHaveBeenCalled();
    });

    test('Escribir el simbolo de "?" debe disparar el getAnswer', async()=>{
        
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
        
        const input = wrapper.find('input');
        await input.setValue('Hola Mundo?');
        
        expect(getAnswerSpy).toHaveBeenCalled();
    });

    test('Pruebas en getAnswer', async() => {
        
        await wrapper.vm.getAnswer();
        // console.log( wrapper.vm.img);
        // console.log(wrapper.vm.answer);

        const img = wrapper.find('img');
        expect ( img.exists() ).toBeTruthy();
        expect (wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif');
        expect (wrapper.vm.answer).toBe('Si!!');

    });

    test('Pruebas en getAnswer - Fallo en el API', async () => {
        
        fetch.mockImplementationOnce(()=>Promise.reject('API is down - Failure'));

        await wrapper.vm.getAnswer();

        const img = wrapper.find('img');
        
        expect ( img.exists() ).toBeFalsy();
        expect (wrapper.vm.answer).toBe('No ha sido posible cargar los datos de la API');

    });
})
