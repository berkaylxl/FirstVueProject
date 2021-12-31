import { shallowMount } from "@vue/test-utils"

import HelloWorld from '@/components/HelloWorld.vue';

describe('Render a todo component',()=>{

    const wrapper=shallowMount(HelloWorld);
    it('Render a textinput',()=>{
        expect(wrapper.find('#textinput').exists()).toBeTruthy()
    })

    it('Render a show button',()=>{
        expect(wrapper.find('button').text()).toBe('Show')
    })
    it('Render a h2',()=>{
        expect(wrapper.find('h2').exists()).toBeTruthy()
    })
  
    





})