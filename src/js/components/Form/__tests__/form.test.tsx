import Enzyme, {mount, ShallowWrapper, ReactWrapper} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Form from '../Form'
import FormItem from '../FormItem'
import React from 'react'
import {act} from 'react-dom/test-utils'

Enzyme.configure({
  adapter: new Adapter()
})

describe('<Form />', () => {
  test('getValues', () => {
    const defaultVals = {firstname: 'abc', lastname: 'edf'}
    const mockOnValuesChange = jest.fn()
    const formRef = React.createRef<FormInstance>()

    const wrapper = mount<ReactWrapper>(
      (<Form onValuesChange={mockOnValuesChange} ref={formRef}>
        <FormItem label="labelName" name='firstname'>
          <input />
        </FormItem>
        <FormItem label="labelName" name='lastname'>
          <input />
        </FormItem>
      </Form>)
    )

    wrapper.find('input').at(0).simulate('change', {target: {name: 'val', value: defaultVals.firstname}})
    act(() => formRef.current.setFieldsValue({lastname: defaultVals.lastname}))
    const effectValues = formRef.current.getFieldsValue()

    expect(wrapper.find('input')).toHaveLength(2)
    expect(mockOnValuesChange).toHaveBeenCalledTimes(1)
    expect(effectValues).toEqual(defaultVals)
  })

})
