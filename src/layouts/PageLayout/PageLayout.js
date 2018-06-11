/* eslint-disable max-len */
import React from 'react'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className={'wrapper'}>
    <div className='d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow'>
      <h5 className='my-0 mr-md-auto font-weight-normal'>
          One2Team - Sample Project
      </h5>
    </div>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
