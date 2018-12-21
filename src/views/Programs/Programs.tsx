import * as React from 'react'
import Helmet from 'react-helmet'
// import renderHTML from 'react-render-html'
// import { Link } from 'react-router-dom'

import { fetchAllPrograms } from '../../modules/ducks/programs/operations'
import { ReduxState } from '../../types/redux'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { fetchAllPages } from '../../modules/ducks/pages/operations'
import Hero from '../../components/Hero'
import { NavLink, RouteComponentProps, Link } from 'react-router-dom'

interface Props extends RouteComponentProps<MatchParams> {
  programs: ReduxState['programs']['allPrograms']
  fetchPrograms: () => Promise<void>
  fetchPages: () => Promise<void>
}

interface MatchParams {
  slug: string
}

class Programs extends React.Component<Props> {
  public componentDidMount() {
    const { programs, fetchPrograms, fetchPages } = this.props
    if (programs.data.length === 0) {
      fetchPrograms()
      fetchPages()
    }
  }

  public render() {
    return (
      <div className="page degree">
        <Helmet>
          <title>Degree Programs</title>
        </Helmet>
        <Hero
          title="Degree Programs at ULS"
          imgUrl={
            'https://public.unitedlutheranseminary.org/catalog-admin/storage/uploads/00000000029.jpg'
          }
        />

        <nav className="navbar navbar-light bg-light">
          <div className="container">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink exact to={this.props.match.url} className="nav-link">
                  All
                </NavLink>
              </li>
              {this.props.programs.data.map(i => (
                <li key={i.name} className="nav-item">
                  <NavLink
                    to={`${this.props.match.url}/${i.slug}`}
                    className="nav-link"
                  >
                    {i.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <section className="section post-content">
          <div className="container">
            <div className="row">
              <div className="card-columns">
                {this.props.programs.data.map(i => (
                  <Link key={i.name} to={`${this.props.match.url}/${i.slug}`}>
                    <div className="card">
                      <div className="card-body">
                        <h2 className="card-title">{i.name}</h2>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state: ReduxState) => ({
  programs: state.programs.allPrograms,
  pages: state.pages.allPages
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchPrograms: () => fetchAllPrograms()(dispatch),
  fetchPages: () => fetchAllPages()(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Programs)
