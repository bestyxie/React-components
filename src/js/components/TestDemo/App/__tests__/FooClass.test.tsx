import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Foo from '../FooClass'

Enzyme.configure({
  adapter: new Adapter()
})

beforeEach(() => {

})

describe('Test Foo with shallow', function () {
  it('test life cycle: componentDidmount', function () {
    const componentDidMount = jest.spyOn(Foo.prototype, 'componentDidMount')
    const wrapper = shallow<Foo>(
      <Foo>
        <span>Hello</span>
      </Foo>
    )
    const instance = wrapper.instance() as Foo
    const mockUpdateCount = jest.spyOn(instance, 'updateCount')
    const state = wrapper.state()
    instance.componentDidMount()

    expect(componentDidMount).toBeCalledTimes(2)
    expect(mockUpdateCount).toBeCalledTimes(1)
    expect(state.count).toBe(2)
  })

  it('test instance method: updateCount', function() {
    const wrapper = shallow<Foo>(
      <Foo>
        <span>Hello</span>
      </Foo>
    )
    const instance = wrapper.instance()
    const mockUpdateCount = jest.spyOn(instance, 'updateCount')
    const state = wrapper.state()
    instance.componentDidMount()

    expect(mockUpdateCount).toBeCalledTimes(1)
    expect(state.count).toBe(1)
  })
})
