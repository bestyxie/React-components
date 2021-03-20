import React, {useContext} from 'react'
import { FormContextProvider, FormContext } from './FormContextProvider'

const FieldForm: React.FC<FormProps> = ({ children, forwardedRef, ...otherProps }) => {
  const { values, updateValues } = useContext(FormContext) as FormContextType

  React.useImperativeHandle(forwardedRef, () => ({
    setFieldsValue: (fields) => updateValues(fields),
    getFieldsValue: () => values
  }))

  return (
    <form>
      {React.Children.map(children, (child: React.ReactElement) => {
        return React.cloneElement(child, {
          onValuesChange: otherProps.onValuesChange
        })
      })}
    </form>
  )
}

const FormForward: React.ForwardRefRenderFunction<FormInstance, FormProps> = (props, ref) => {
  return (
    <FormContextProvider>
      <FieldForm {...props} forwardedRef={ref} />
    </FormContextProvider>
  )
}
// React.forwardRef()
const Form = React.forwardRef(FormForward)

export default Form
