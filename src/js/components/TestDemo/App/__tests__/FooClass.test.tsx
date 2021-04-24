import React from 'react'
import { shallow, } from 'enzyme'
import Foo from '../FooClass'

describe('Test Foo with shallow', function () {
  it('test life cycle: componentDidmount', function () {
    const componentDidMount = jest.spyOn(Foo.prototype, 'componentDidMount')
    const wrapper = shallow<Foo>(
      <Foo>
        <span>Hello</span>
      </Foo>
    )
    const instance = wrapper.instance()
    const mockUpdateCount = jest.spyOn(instance, 'updateCount')
    instance.componentDidMount()
    const state = wrapper.state()

    expect(componentDidMount).toBeCalledTimes(2)
    expect(mockUpdateCount).toBeCalledTimes(1)
    expect(state.count).toBe(2)
  })

  it('test instance method: updateCount', function () {
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
