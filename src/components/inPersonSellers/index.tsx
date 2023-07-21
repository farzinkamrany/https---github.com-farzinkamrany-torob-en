import React,{FC} from 'react'
import { StAll } from './style'
import { Button } from 'antd'
import { BsFlag } from 'react-icons/bs'

interface PropTypes{
    chart?:any
    }
const InPersonSellers:FC<PropTypes> = ({data}) => {
    uses
  return (
    <StAll>
   {data?.sellers?.inPerson?.map((res:any)=><div className="list-of-cards">
        <div className="card">
            <div className='card-location'>
                <b>{res?.shop_name}</b>
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
                                contact info
                            </Button>
                    </div>
                    <div className='update-details'>
                        <p>The last price change in the store: 20 hours ago</p>
                    </div>
                </a>
            </div>
        </div>
    </div>)?.slice(0,3)}
        <div className="all-sellers">
            <Button>
                show all ... stores
            </Button>
        </div>
</StAll>
  )
}

export default InPersonSellers
