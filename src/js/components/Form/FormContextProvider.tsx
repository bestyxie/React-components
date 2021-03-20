import React, {useCallback, useState, useMemo} from 'react'

export const FormContext = React.createContext({})

export const FormContextProvider: React.FC = ({children}) => {
  const [values, setValues] = useState({})
  const updateValues = useCallback((newValues) => {
    setValues({...values, ...newValues})
  }, [setValues, values])

  const providerValue = useMemo(() => ({values, updateValues}),
    [values, updateValues]
  )

  return (
    <FormContext.Provider value={providerValue}>
      {children}
    </FormContext.Provider>
  )
}