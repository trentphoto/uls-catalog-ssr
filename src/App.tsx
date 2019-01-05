// defaults
import * as React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import {
  Home,
  NotFound,
  Programs,
  PageTemplate,
  ProgramsTemplate
} from './views'
import Header from './components/Header'
import LeftNav from './components/LeftNav'
import { connect } from 'react-redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { pageIntro, pageOutro } from './utils/animations'
import RightSideWrapper from './components/RightSideWrapper'
import ReactGA from 'react-ga'
import { analyticsID } from './config'

interface Props {
  location: Location
}

interface Location {
  hash: string
  key: string
  search: string
  pathname: string
  state: any
}

class App extends React.Component<Props> {
  componentDidMount() {
    ReactGA.initialize(analyticsID)
    ReactGA.pageview(this.props.location.pathname)
  }
  componentDidUpdate(prevProps: Props) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      ReactGA.pageview(this.props.location.pathname)
    }
  }

  render() {
    const { location } = this.props
    return (
      <div className="App">
        <LeftNav />
        <RightSideWrapper>
          <Header />
          <div className="transition-wrapper">
            <TransitionGroup>
              <CSSTransition
                timeout={500}
                classNames="fade"
                appear={true}
                key={location.pathname}
                onEnter={node => pageIntro(node, location.pathname)}
                onExit={node => pageOutro(node)}
              >
                <Switch location={location}>
                  <Route exact={true} path="/" component={Home} />
                  <Route
                    exact={true}
                    path="/degree-programs"
                    component={Programs}
                  />
                  <Route
                    exact={true}
                    path="/degree-programs/:slug"
                    component={ProgramsTemplate}
                  />
                  <Route exact={true} path="/:slug" component={PageTemplate} />
                  <Route component={NotFound} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        </RightSideWrapper>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  location: state.router.location
})

export default connect(mapStateToProps)(App)
