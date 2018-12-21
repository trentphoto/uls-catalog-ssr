import * as React from 'react'
import './home2.css'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { ReduxState } from '../../types/redux'
// import { Link } from 'react-router-dom'

import FeatureCard from '../../components/FeatureCard'

interface Props {
  pages: Page[]
}

const Home: React.SFC<Props> = ({ pages }) => (
  <div className="home page">
    <Helmet>
      <title>ULS Academic Catalog 2018-19</title>
    </Helmet>
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="card-columns-custom">
            {pages.map(i => (
              <FeatureCard key={i.id} page={i} />
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-12 font-italic">
            <small>
              The Seminary Catalog is a statement of the policies, personnel,
              programs, and financial arrangements of United Lutheran Seminary
              as projected by the responsible authorities of the Seminary. The
              Seminary reserves the right to make alterations without prior
              notice, in accordance with the Seminary’s institutional needs and
              academic purposes.
            </small>
          </div>
        </div>
      </div>
    </section>
  </div>
)

const mapStateToProps = (state: ReduxState) => ({
  pages: state.pages.allPages.data
})

export default connect(mapStateToProps)(Home)
