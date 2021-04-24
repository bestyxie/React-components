import { shallow, ShallowWrapper } from 'enzyme'
import FormItem from '../FormItem'
import React from 'react'

describe('<FormItem />', () => {
  test('base render', () => {
    const labelName = "labelName"
    const wrapper = shallow<ShallowWrapper>(
      (<FormItem label={labelName} name="test">
        <input />
      </FormItem>)
    )

    expect(wrapper.find('input')).toHaveLength(1)
    expect(wrapper.find('label').text()).toBe(labelName)
  })
})

