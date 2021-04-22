import React, { useState, useCallback } from 'react'
import App from './App'

interface FooProps {
  onBtnClick: (count: number) => number
  children?: React.ReactElement
}

const Foo: React.FC<FooProps> = ({ onBtnClick, children }) => {
  const [count, setCount] = useState<number>(0)

  const onButtonClick = useCallback(
    () => {
      setCount(onBtnClick(count))
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

export class FooClass extends React.Component {
  state = {
    count: 0,
  }
  onButtonClick = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  render() {
    const { count } = this.state
    const { children } = this.props

    return (
      <div>
        <span>{count}</span>
        <button onClick={this.onButtonClick}>add</button>
        {children}
        <App />
      </div>
    )
  }
}
