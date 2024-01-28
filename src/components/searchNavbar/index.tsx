import { Button, Input, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import SearchBox from '../searchBox'
import { StAll } from './style'
import Link from 'next/link'
import LoginModal from '../loginModal'

const SearchNavbar = () => {
  const [showLoginModal, setshowLoginModal] = useState<boolean>(false)
  const [userId, setuserId] = useState<any>('')
  useEffect(() => {
     if(typeof window !== 'undefined') setuserId(localStorage.getItem('phone number'))
  }, [])
  
  return (
    <StAll>
        <div className='icon-searchs'>
        <Link href="/">
            <img src="https://torob.com/static/images/logo_original.png" alt="" />
            Torob
        </Link>
      <SearchBox/>
      </div>
        <div>
            
      <Button className='signup' onClick={()=>setshowLoginModal(true)}>
        {userId?userId:'login/sign-up'}
      </Button>
        </div>
          <LoginModal setIsModalOpen={setshowLoginModal} isModalOpen={showLoginModal} />
    </StAll>
  )
}

export default SearchNavbar
