import React from 'react'
import Cards from './Cards'

export default function Dashboard({heading}) {
  const revenue = "Total Users";
  return (
    <>
        <h1 className='dashboard-heading'>{heading}</h1>
        <hr />
        <Cards heading={"Total Users"} />
        <Cards heading={revenue} />
    </>
  )
}
