import Vue from 'vue'
import Message from '@/components/message'

describe('message.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Message)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.message h1').textContent)
      .to.equal('Hello from this side')
  })
  it('should have the right default data', () => {
  	expect(typeof Message.data).to.equal('function')
  	const defaultMessage = Message.data()
  	expect(defaultMessage.message).to.equal('Hello from this side')
  })
})
