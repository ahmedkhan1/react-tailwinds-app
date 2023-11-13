import React from 'react'

export default function Cards({heading}) {
  return (
    <div className='total-users-container'>
        <h1>{heading}:</h1>
        <div className='toal-users-charts'></div>
    </div>
  )
}
