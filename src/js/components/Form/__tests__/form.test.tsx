import Enzyme, {mount, ShallowWrapper, ReactWrapper} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Form from '../Form'
import FormItem from '../FormItem'
import React, {useRef} from 'react'

Enzyme.configure({
  adapter: new Adapter()
})

describe('<Form />', () => {
  test('getValues', () => {
    const defaultVals = {val: 'abc'}
    const mockOnValuesChange = jest.fn()
    const wrapper = mount<ReactWrapper>(
      (<Form onValuesChange={mockOnValuesChange} ref={ref}>
        <FormItem label="labelName" name='val'>
          <input />
        </FormItem>
      </Form>)
    )

    wrapper.find('input').at(0).simulate('change', {target: {name: 'val', value: defaultVals.val}})

    expect(wrapper.find('input')).toHaveLength(1)
    expect(mockOnValuesChange).toHaveBeenCalledTimes(1)
  })

})
