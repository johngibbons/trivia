import React, { PropTypes } from 'react'
import './PageHeading.css'
import Divider from 'material-ui/Divider';

const PageHeading = ({
  text,
  children
}) => {
  return (
    <div className='PageHeading'>
      <h1 className='PageHeading-text'>{text}</h1>
      {children}
      <Divider />
    </div>
  )
}

PageHeading.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node
}

export default PageHeading
