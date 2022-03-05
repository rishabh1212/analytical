import React from 'react'
import Charts from '../charts/Charts'

import Map from '../maps/Map'
import "./Home.css"
export default function Home() {
  return (
    <div className='Home'>
      {/* <FeaturedInfo/> */}
      <Charts/>
      <Map/>
    </div>
  )
}
