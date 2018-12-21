import React from 'react'
import './LeftNav.css'
import { Dispatch } from 'redux'
import NavItem from '../NavItem'
import { connect } from 'react-redux'
import { ReduxState } from '../../types/redux'
import { fetchAllPages } from '../../modules/ducks/pages/operations'

interface Props {
  pages: Page[]
  fetchPages: () => Promise<void>
}

interface State {
  open: boolean
}

class LeftNav extends React.Component<Props, State> {
  state = {
    open: false
  }
  componentDidMount() {
    const { pages, fetchPages } = this.props
    if (pages.length === 0) {
      fetchPages()
    }
  }
  toggle = () => {
    this.setState(prevState => {
      return { open: !prevState.open }
    })
  }
  close = () => {
    this.setState(() => {
      return { open: false }
    })
  }
  render() {
    const { props } = this
    return (
      <React.Fragment>
        <div className="l_LeftNav">
          <nav className={this.state.open ? 'LeftNav LeftNav_open' : 'LeftNav'}>
            <div className="LeftNav__wrapper">
              <ul className="LeftNav__ul">
                <NavItem to="/" text="Home" onClick={this.close} />
                {props.pages.map(page => (
                  <NavItem
                    key={page.slug}
                    to={'/' + page.slug}
                    text={page.title}
                    onClick={this.close}
                  />
                ))}
              </ul>
            </div>
          </nav>
        </div>
        <button
          className={
            this.state.open
              ? 'navToggle hamburger hamburger--spin is-active'
              : 'navToggle hamburger hamburger--spin'
          }
          type="button"
          onClick={this.toggle}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: ReduxState) => ({
  pages: state.pages.allPages.data
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchPages: () => fetchAllPages()(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false }
)(LeftNav)
