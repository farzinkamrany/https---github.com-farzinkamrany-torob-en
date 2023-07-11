import React from 'react'
import { StAll } from './style'
import {BsFlag} from 'react-icons/bs'
import { Button } from 'antd'

const PriceCard = () => {
  return (
    <StAll>
        <div className="list-of-cards">
            <div className="card">
                <div className='card-location'>
                    <b>Mobile 140</b>
                    <small>
                        Tehran
                    </small>
                </div>
                <div className='delivery'>
                            <div className='garranty'>
                            <span>★5 (2 years in Tarb)</span>
                            <div className='report'>
                                <b>report</b>
                              <BsFlag/>
                            </div>
                            </div>
                        <a href="">Samsung Galaxy A14 mobile phone with 64 GB capacity and 4 GB RAM</a>
                        <a href="">18 months warranty - registered</a>
                        <div>
                            dropdown
                        </div>

                </div>
                <div className='shopping'>
                    <a href="">
                    <p>4,899,000 Tomans</p>
                    </a>
                    <a href="">
                        <div>
                                <Button>
                                    online
                                </Button>
                        </div>
                        <div className='update-details'>
                            <p>The last price change in the store: 20 hours ago</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="all-sellers">
                <Button>
                    show all ... stores
                </Button>
            </div>
        </div>
    </StAll>
  )
}

export default PriceCard
