import React, {useCallback, useContext} from 'react'
import {FormContext} from './FormContextProvider'

const FormItem: React.FC<FormItemProps> = ({name, label, onChange, onValuesChange, children}) => {
  const {values, updateValues} = useContext(FormContext) as FormContextType

  const handleChange = useCallback((e) => {
    // console.log(e.target.value)
    updateValues({ [name]: e.target.value })
    onValuesChange && onValuesChange({ [name]: e.target.value }, values)
    onChange && onChange(e.target.value)
  }, [values, updateValues])

  return (
    <div>
      {label && <label>{label}</label>}
      {React.cloneElement(
        React.Children.only(children as React.ReactElement),
        {
          onChange: handleChange,
          value: values ? values[name] || '' : '',
        }
      )}
    </div>
  )
}

export default FormItem