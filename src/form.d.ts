type ValueType = string | number

interface ValuesType {
  [key: string]: ValueType;
}

interface FormContextType {
  values: ValuesType;
  updateValues: (ValuesType) => void;
  children: React.ReactChildren;
}

interface FormInstance {
  setFieldsValue: (fields: ValuesType) => void
  getFieldsValue: () => void
}

type onValuesChange = (changedValues: ValuesType, allValues: ValuesType) => void

interface FormProps {
  onValuesChange?: onValuesChange;
  children: React.ReactNode;
  forwardedRef?: React.ForwardedRef<FormInstance>
}

interface FormItemProps {
  label?: string | React.ReactNode;
  onChange?: (value: ValueType) => void;
  children: React.ReactElement;
  name: string;
  value?: ValueType;
  onValuesChange?: onValuesChange;
}