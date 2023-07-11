import React from 'react'
import { StAll } from './style'
import { Button } from 'antd'

const ProductSection = () => {
  return (
    <StAll>
      <div className='title'>
        <h2>
        Product selection guide
        </h2>
        <h3>
    <small>Make sure to choose by checking the key pros and cons.</small>
        </h3>
      </div>
      <div className='qualities'>
        <div className="strengths">
            <span className="s-title">
                Strengths
            </span>
            <ul>
                <li>
                <p>beautiful design</p></li>
                <li>
            <p>Attractive colors</p></li>
                <li>
            <p>Good camera</p></li>
            </ul>
        </div>
        <div className="weaknesses">
            <span className="w-title">
            weak points
            </span>
            <ul>
                <li>
                <p>beautiful design</p></li>
                <li>
            <p>Attractive colors</p></li>
                <li>
            <p>Good camera</p></li>
            </ul>
        </div>
      </div>
      <div className="continue">
            <Button>Continue review</Button>
            </div>
    </StAll>
  )
}

export default ProductSection
