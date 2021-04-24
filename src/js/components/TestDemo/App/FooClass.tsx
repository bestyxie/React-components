import React from 'react'
import App from './App'

interface FooClassProps {}
interface FooClassState {
  count: number
}

export default class FooClass extends React.Component<FooClassProps, FooClassState> {
  state = {
    count: 0,
  }

  componentDidMount() {
    this.updateCount()
  }

  updateCount = () => {
    this.setState({
      count: this.state.count + 1
    })
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