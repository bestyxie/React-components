import React, { useState, useCallback } from 'react'
import App from './App'

interface FooProps {
  onBtnClick?: (count: number) => number
  children?: React.ReactElement
}

const Foo: React.FC<FooProps> = ({ onBtnClick, children }) => {
  const [count, setCount] = useState<number>(0)

  const onButtonClick = useCallback(
    () => {
      if (onBtnClick) {
        setCount(onBtnClick(count))
      } else {
        setCount(count + 1)
      }
    },
    [setCount, count, setCount]
  )

  return (
    <div>
      <span>{count}</span>
      <button onClick={onButtonClick}>add</button>
      {children}
      <App />
    </div>
  )
}

export default Foo
