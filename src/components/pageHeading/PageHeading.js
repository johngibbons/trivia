import React, { PropTypes } from 'react'
import './PageHeading.css'

const PageHeading = ({
  text
}) => {
  return (
    <div className='PageHeading'>
      <h1 className='PageHeading-text'>{text}</h1>
      <div className='PageHeading-divider' />
    </div>
  )
}

PageHeading.propTypes = {
  text: PropTypes.string
}

export default PageHeading
