import React from 'react'
import { StAll } from './style'
import Link from 'next/link'

const ItemsList = () => {
  return (
    <StAll>
      <Link href=''>
        <h4>Title</h4>
      </Link>
      <div className='dropitems'>
        <Link href=''>
        link
        </Link>
        <ul>
    ul
        </ul>
      </div>
    </StAll>
  )
}

export default ItemsList
