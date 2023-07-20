import { Button, Input, Select } from 'antd'
import React, { useState } from 'react'
import SearchBox from '../searchBox'
import { StAll } from './style'
import Link from 'next/link'
import LoginModal from '../loginModal'

const SearchNavbar = () => {
  const [showLoginModal, setshowLoginModal] = useState<boolean>(false)
  return (
    <StAll>
        <div className='icon-searchs'>
        <Link href="/">
            <img src="https://torob.com/static/images/logo_original.png" alt="" />
        </Link>
      <SearchBox/>
      </div>
        <div>
            
      <Button onClick={()=>setshowLoginModal(true)}>
        login/sign-up
      </Button>
        </div>
          <LoginModal setIsModalOpen={setshowLoginModal} isModalOpen={showLoginModal} />
    </StAll>
  )
}

export default SearchNavbar
