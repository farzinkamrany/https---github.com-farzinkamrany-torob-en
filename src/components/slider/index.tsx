import React from 'react'
import { StAll } from './style'
import Link from 'next/link'
import Card from '../card'

const Slider = () => {
  return (
    <StAll>
      <div className="header">
    <h2>
        Title
    </h2>
    <Link href='/product'>
        link to product
    </Link>
      </div>
      <div className="body">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </StAll>
  )
}

export default Slider
