import React from 'react'
import { StAll } from './style'
import {BsFlag} from 'react-icons/bs'
import { Button, Dropdown, MenuProps } from 'antd'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';

const PriceCard = () => {
    const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item (disabled)
        </a>
      ),
    //   icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: '4',
      danger: true,
      label: 'a danger item',
    },
  ];
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
                            <br />
                        <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <>
        Hover me
        <DownOutlined />
      </>
    </a>
  </Dropdown>
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
