import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import FormItem from '../FormItem'
import React from 'react'

Enzyme.configure({
  adapter: new Adapter()
})

describe('<FormItem />', () => {
  test('base render', () => {
    const labelName="labelName"
    const wrapper = shallow(
      (<FormItem label={labelName} name="test">
        <input />
      </FormItem>)
    )

    expect(wrapper.find('input')).toHaveLength(1)
    expect(wrapper.find('label').text()).toBe(labelName)
  })
})

