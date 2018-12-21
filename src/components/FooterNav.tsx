import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { ReduxState } from '../types/redux';

interface Props {
  pages: Page[]
  pageSlug: string
}

const FooterNav: React.SFC<Props> = ({ pageSlug, pages }) => {
  // create array of all page titles
  const pageSlugs = pages.map((i: Page) => i.slug)
  // find index of current page
  const currentPageIndex = pageSlugs.indexOf(pageSlug)

  const prevPage = pages[currentPageIndex - 1]
  const nextPage = pages[currentPageIndex + 1]

  return (
    <div className="FooterNav">
      {prevPage && (
        <Link className="FooterNav__item" to={`/${prevPage.slug}`}>
          <div>
            <span>Previous</span>
            <br />
            <span className="FooterNav__label">{prevPage.title}</span>
          </div>
          <div className="FooterNav__icon FooterNav__icon_left">
            <FontAwesomeIcon icon="caret-left" />
          </div>
        </Link>
      )}
      {nextPage && (
        <Link className="FooterNav__item" to={`/${nextPage.slug}`}>
          <div>
            <span>Next</span>
            <br />
            <span className="FooterNav__label">{nextPage.title}</span>
          </div>
          <div className="FooterNav__icon FooterNav__icon_right">
            <FontAwesomeIcon icon="caret-right" />
          </div>
        </Link>
      )}
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  pages: state.pages.allPages.data,
  pageSlug: state.router.location.pathname.split('/')[1]
})

export default connect(mapStateToProps)(FooterNav)
