import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
  to: string
  text: string
  onClick: () => any
}

const NavItem: React.SFC<Props> = props => (
  <NavLink
    exact={true}
    to={props.to}
    className="LeftNav__li nav-item"
    onClick={props.onClick}
  >
    <span className="LeftNav__active-indicator" />
    <span>{props.text}</span>
  </NavLink>
)

export default NavItem
