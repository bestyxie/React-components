import React, {useCallback, useRef} from 'react'
import Form from './Form'
import FormItem from './FormItem'

const App: React.FC = (props) => {
  const ref= useRef<FormInstance>()

  const changeName = useCallback(() => {
    ref.current.setFieldsValue({ lastname: 'Besty', firstname: 'Xie'})
  }, [ref])

  const getName = useCallback(() => {
    console.log(ref.current.getFieldsValue())
  }, [ref])

  return (
    <div>
      <h1>This a custom Form component</h1>
      <Form onValuesChange={values => console.log('onValuesChange', values)} ref={ref}>
        <FormItem name='firstname' label="名">
          <input />
        </FormItem>
        <FormItem name='lastname' label="姓">
          <input />
        </FormItem>
      </Form>
      <button onClick={changeName}>name = Besty</button>
      <button onClick={getName}>get Name</button>
    </div>
  )
}

export default App