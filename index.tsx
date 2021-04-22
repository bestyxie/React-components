import React, { Suspense, useCallback, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import routes from './src/routes'

class TestState extends React.Component {
  state = { count: 0 }

  componentDidMount() {
    this.setState({ count: this.state.count + 1 })
    console.log(this.state.count)
    this.setState({ count: this.state.count + 1 })
    console.log(this.state.count)

    setTimeout(() => {
      this.setState({ count: this.state.count + 1 })
      console.log(this.state.count)
      this.setState({ count: this.state.count + 1 })
      console.log(this.state.count)
    }, 1000)
  }

  render(): React.ReactNode {
    console.log('render ', this.state.count)
    return (
      <div>{this.state.count}</div>
    )
  }
}

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <Suspense fallback={() => <span>loading</span>}>
        <Router>
          <ul>
            {
              routes.map(r => {
                return <li key={r.path}><Link to={r.path}>{r.name}</Link></li>
              })
            }
          </ul>
          <Switch>
            {
              routes.map(r => {
                const PageComponent = r.component
                return (
                  <Route key={r.path} path={r.path}>
                    <PageComponent />
                  </Route>
                )
              })
            }
          </Switch>
        </Router>
      </Suspense>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))