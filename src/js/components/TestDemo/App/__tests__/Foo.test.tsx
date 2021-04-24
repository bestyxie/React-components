import React from 'react'
import { shallow } from 'enzyme'
import Foo from '../Foo'

describe('Test App Entry point', function () {
  it('simulates click events', function () {
    const mockOnClick = jest.fn(count => count + 1)
    const wrapper = shallow(
      <Foo onBtnClick={mockOnClick}>
        <h2>Hello My Son</h2>
      </Foo>
    )

    wrapper.find('button').simulate('click')

    expect(mockOnClick).toHaveBeenCalledTimes(1)
    expect(mockOnClick.mock.calls[0][0]).toBe(0)
    expect(wrapper.find('span').text()).toBe('1')
    expect(wrapper.find('h1').length).toBe(0)
    expect(wrapper.contains(<h2>Hello My Son</h2>)).toBe(true)
  })
})
