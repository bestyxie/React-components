import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Foo from '../Foo'

describe('Test Foo with shallow', function () {
  it('should not mount App inner Foo but children prop', function () {

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
  })
})

describe('Test Foo with mount', function () {
  it('should render App and children prop', function () {
    const wrapper = mount(
      <Foo>
        <h2>Hello My Son</h2>
      </Foo>
    )

    expect(wrapper.find('h1').length).toBe(1)
    expect(wrapper.contains(<h2>Hello My Son</h2>)).toBe(true)
  })
})

describe('Test Foo with render', function () {
  it('should render App and children prop', function () {
    const wrapper = render(
      <Foo>
        <h2>Hello My Son</h2>
      </Foo>
    )

    expect(wrapper.find('h1').length).toBe(1)
    expect(wrapper.find('h2').length).toBe(1)
  })
})
