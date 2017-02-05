import React, { PropTypes } from 'react'
import './PageContainer.css'

import Navbar from '../navbar/Navbar.js';
import AuthModal from '../authModal/AuthModal';

const PageContainer = ({children}) => {
  return (
    <div className='PageContainer'>
      <Navbar />
      <AuthModal />
      <div className='PageContainer-body'>
        {children}
      </div>
    </div>
  )
}

PageContainer.propTypes = {
  children: PropTypes.node
}

export default PageContainer
