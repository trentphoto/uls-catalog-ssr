import React from 'react'
import './FeatureCard.css'
import { Link } from 'react-router-dom'
import { defaultImgUrl } from '../../config'

interface Props {
  page: Page
}

const FeatureCard: React.SFC<Props> = ({ page }) => (
  <Link to={`/${page.slug}`} className="card FeatureCard">
    <img className="card-img" src={page.fullImgUrl || defaultImgUrl} />
    <div className="overlay overlay_dark" />
    <div className="card-img-overlay">
      <h4 className="card-title text-white">{page.title}</h4>
    </div>
  </Link>
)

export default FeatureCard
