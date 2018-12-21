import React from 'react'
import './Hero.css'

interface Props {
  title: string
  imgUrl: string
  home?: boolean
}

const Hero: React.SFC<Props> = props => (
  <div
    className={props.home ? 'Hero Hero_home' : 'Hero'}
    style={{ backgroundImage: `url(${props.imgUrl})` }}
  >
    <div className="Hero__overlay" />
    <div className="container">
      <h1 className="Hero__h1">{props.title}</h1>
    </div>
  </div>
)

export default Hero
