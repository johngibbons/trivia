import React, { PropTypes } from 'react'
import './PageContainer.css'

import Navbar from '../navbar/Navbar.js';
import NewGameModal from '../game/newGameModal/NewGameModal';

const PageContainer = ({children}) => {
  return (
    <div>
      <Navbar />
      <NewGameModal />
      <div className='PageContainer'>
        {children}
      </div>
    </div>
  )
}

PageContainer.propTypes = {

}

export default PageContainer
