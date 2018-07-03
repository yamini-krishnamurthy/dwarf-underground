import React from 'react'

import Headline from './Headline'
import NavLinks from './NavLinks'

const Header = () => {
  return (
    <div className="expanded row header">
      <div className="clearfix">
        <div className="float-left logo">
          <img src="http://www.iconninja.com/files/409/4/1006/axe-icon.svg" alt="axe" />
        </div>
        <NavLinks />
      </div> 
      <Headline />
    </div>
  )
}

export default Header
