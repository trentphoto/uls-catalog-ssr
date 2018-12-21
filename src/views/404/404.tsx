import * as React from 'react'
import { Link } from 'react-router-dom'
import './404.css'
import Helmet from 'react-helmet'
import PostContentWrapper from '../../components/PostContentWrapper'

const NotFound = () => (
  <div className="page not-found">
    <Helmet>
      <title>Page Not Found</title>
    </Helmet>
    <div className="page">
      <Helmet title={'ULS Academic Catalog'} />
      <PostContentWrapper>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>Page not found.</p>
              <Link to="/">Back to Catalog Home</Link>
            </div>
          </div>
        </div>
      </PostContentWrapper>
    </div>
  </div>
)

export default NotFound
