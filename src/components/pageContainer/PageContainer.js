import React, { PropTypes } from 'react'
import './PageContainer.css'

import Navbar from '../navbar/Navbar.js';

const PageContainer = ({children}) => {
  return (
    <div>
      <Navbar />
      <div className='PageContainer'>
        {children}
      </div>
    </div>
  )
}

PageContainer.propTypes = {

}

export default PageContainer
