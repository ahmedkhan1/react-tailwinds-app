import React from 'react'

export default function Cards({heading}) {
  return (
    <div className='total-container'>
      {
        heading &&
        <h1>{heading}:</h1>
      }
        <div className='toal-charts'></div>
    </div>
  )
}
