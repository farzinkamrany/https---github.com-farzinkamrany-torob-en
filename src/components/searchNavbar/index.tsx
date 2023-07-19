import { Button, Input, Select } from 'antd'
import React from 'react'
import SearchBox from '../searchBox'
import { StAll } from './style'
import Link from 'next/link'

const SearchNavbar = () => {
  return (
    <StAll>
        <div className='icon-searchs'>
        <Link href="/">
            <img src="https://torob.com/static/images/logo_original.png" alt="" />
        </Link>
      <SearchBox/>
      </div>
        <div>
            
      <Button>
        login/sign-up
      </Button>
        </div>
    </StAll>
  )
}

export default SearchNavbar
