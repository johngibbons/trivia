import React, { PropTypes } from 'react'
import './PageContainer.css'

import Navbar from '../navbar/Navbar.js';
import NewGameModal from '../game/newGameModal/NewGameModal';

const PageContainer = ({children}) => {
  return (
    <div className='PageContainer'>
      <Navbar />
      <NewGameModal />
      <div className='PageContainer-body'>
        {children}
      </div>
    </div>
  )
}

PageContainer.propTypes = {

}

export default PageContainer
