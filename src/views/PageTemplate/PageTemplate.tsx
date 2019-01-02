import * as React from 'react'
import Helmet from 'react-helmet'
import { RouteComponentProps } from 'react-router'
import renderHTML from 'react-render-html'

// import { match } from 'react-router';
import { fetchAllPages } from '../../modules/ducks/pages/operations'
import { fetchAllPrograms } from '../../modules/ducks/programs/operations'
import { ReduxState } from '../../types/redux'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import Hero from '../../components/Hero'
import FooterNav from '../../components/FooterNav'
import PostContentWrapper from '../../components/PostContentWrapper'
import Loader from '../../components/Loader'
import NotFound from '../404'

interface Props extends RouteComponentProps<MatchParams> {
  pages: ReduxState['pages']['allPages']['data']
  page: Page
  fetchPages: () => Promise<void>
  fetchPrograms: () => Promise<void>
}

interface MatchParams {
  slug: string
}

class PageTemplate extends React.Component<Props> {
  public componentDidMount() {
    const { pages, fetchPages, fetchPrograms } = this.props
    if (pages.length === 0) {
      fetchPages()
      fetchPrograms()
    }
  }

  public render() {
    // if (this.props.pages.length === 0) return null

    const { page, pages } = this.props

    if (pages.length === 0) {
      // if the pages haven't loaded yet

      return <Loader />
    } else if (pages.length && !page) {
      // if the pages are loaded but a match isn't found

      return <NotFound />
    }

    console.log(this.props.page)

    return (
      <div className="page">
        <Helmet title={' | ULS Academic Catalog'} />
        <Hero
          title={this.props.page ? this.props.page.title : 'Loading...'}
          imgUrl={this.props.page ? this.props.page.fullImgUrl : ''}
        />
        <PostContentWrapper>
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-12">
                <div>
                  {renderHTML(this.props.page ? this.props.page.content : '')}
                </div>
              </div>
            </div>
          </div>
        </PostContentWrapper>
        <FooterNav />
      </div>
    )
  }
}

const mapStateToProps = (state: ReduxState, ownProps: any) => ({
  pages: state.pages.allPages.data,
  page: state.pages.allPages.data.filter(
    i => i.slug === ownProps.match.params.slug
  )[0]
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchPrograms: () => fetchAllPrograms()(dispatch),
  fetchPages: () => fetchAllPages()(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageTemplate)
