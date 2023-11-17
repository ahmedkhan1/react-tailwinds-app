import React from 'react'
import Cards from './Cards'

export default function Dashboard({heading}) {
  return (
    <>
        <h1>{heading}</h1>
        <hr />
        <Cards heading={"Total Users"} />
        <Cards heading={"Total revenue"} />
    </>
  )
}
