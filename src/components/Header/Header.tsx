import React from 'react'
import './Header.css'
import Logo from '../Logo'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPrint,
  faCaretLeft,
  faCaretRight
} from '@fortawesome/free-solid-svg-icons'
library.add(faPrint, faCaretLeft, faCaretRight)

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <div className="container">
          <Logo />
          <span className="Header__title">Academic Catalog 2018-19</span>
          <a
            href="https://unitedlutheranseminary.edu/wp-content/uploads/2018/10/ULS-Academic-Catalog-2018-19.pdf"
            className="btn btn-primary btn_print"
          >
            <FontAwesomeIcon icon="print" className="mr-2" />
            <span>Printable PDF Catalog</span>
          </a>
        </div>
      </header>
    )
  }
}

export default Header
