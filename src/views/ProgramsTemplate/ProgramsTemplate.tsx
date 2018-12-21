import * as React from 'react'
import Helmet from 'react-helmet'
// import { Link } from 'react-router-dom'

import { fetchAllPrograms } from '../../modules/ducks/programs/operations'
import { ReduxState } from '../../types/redux'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { fetchAllPages } from '../../modules/ducks/pages/operations'
import Hero from '../../components/Hero'
import { NavLink, RouteComponentProps } from 'react-router-dom'
import { Element, Link } from 'react-scroll'

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
    const program = this.props.programs.data.filter(
      i => i.slug === this.props.match.params.slug
    )[0]

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
                <NavLink exact to="/degree-programs" className="nav-link">
                  All
                </NavLink>
              </li>
              {this.props.programs.data.map(i => (
                <li key={i.name} className="nav-item">
                  <NavLink
                    to={`/degree-programs/${i.slug}`}
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
              <div className="col-xl-8 col-12">
                <Element name="top">
                  <h1>{program && program.name}</h1>
                  <p className="lead">{program && program.subtitle}</p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: program && program.desc
                    }}
                  />
                </Element>

                {program &&
                  program.outcomes && (
                    <Element name="outcomes">
                      <h2>Learning Outcomes</h2>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: program ? program.outcomes : ''
                        }}
                      />
                    </Element>
                  )}
                {program &&
                  program.requirements && (
                    <Element name="requirements">
                      <h2>Requirements</h2>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: program ? program.requirements : ''
                        }}
                      />
                    </Element>
                  )}
                {program &&
                  program.sample_track && (
                    <Element name="sample_track">
                      <h2>Sample Track</h2>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: program ? program.sample_track : ''
                        }}
                      />
                    </Element>
                  )}
                {program &&
                  program.concentra && (
                    <Element name="concentrations">
                      <h2>Concentrations</h2>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: program ? program.concentra : ''
                        }}
                      />
                    </Element>
                  )}
              </div>

              <div className="col-xl-4 d-none d-xl-block">
                <div className="scrollspy">
                  {program &&
                    program.desc && (
                      <li>
                        <Link
                          to="top"
                          spy={true}
                          offset={-120}
                          smooth={true}
                          duration={500}
                        >
                          Description
                        </Link>
                      </li>
                    )}
                  {// not all programs will have all these fields - have to check for each
                  program &&
                    program.outcomes && (
                      <li>
                        <Link
                          to="outcomes"
                          spy={true}
                          offset={-120}
                          smooth={true}
                          duration={500}
                        >
                          Learning Outcomes
                        </Link>
                      </li>
                    )}
                  {program &&
                    program.requirements && (
                      <li>
                        <Link
                          to="requirements"
                          spy={true}
                          offset={-120}
                          smooth={true}
                          duration={500}
                        >
                          Requirements
                        </Link>
                      </li>
                    )}
                  {program &&
                    program.sample_track && (
                      <li>
                        <Link
                          to="sample_track"
                          spy={true}
                          offset={-120}
                          smooth={true}
                          duration={500}
                        >
                          Sample Track
                        </Link>
                      </li>
                    )}
                  {program &&
                    program.concentra && (
                      <li>
                        <Link
                          to="concentrations"
                          spy={true}
                          offset={-120}
                          smooth={true}
                          duration={500}
                        >
                          Concentrations
                        </Link>
                      </li>
                    )}
                </div>
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
