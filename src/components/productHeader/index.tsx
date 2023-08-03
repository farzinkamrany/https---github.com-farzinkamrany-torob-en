import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { AiFillBell, AiFillHeart, AiOutlineArrowLeft, AiOutlineBell, AiOutlineHeart } from 'react-icons/ai'
import { BsShare } from 'react-icons/bs'
import { StAll } from './style'

const ProductTitle = () => {
  const location=window.location.pathname
  console.log(location)
  const [heart, setheart] = useState(false)
  const [bell, setbell] = useState(false)
  const router=useRouter()
  return (
    <StAll>
       <AiOutlineArrowLeft onClick={()=>router.back()}/>
       <h2>ProductTitle</h2>
       {location!=='/product'&&<span>{" "}</span>}
       {location==='/product'&&<div>{bell?<AiFillBell onClick={()=>setbell(!bell)} style={{fill:'rgb(215, 57, 72)',fontSize:20}}/>:<AiOutlineBell  
       style={{fontSize:20}}
        onClick={()=>setbell(!bell)}/>}
        {heart?<AiFillHeart style={{fill:'rgb(215, 57, 72)',fontSize:20}}onClick={(e)=>{
          e.preventDefault()
          setheart(!heart)}}

        />:<AiOutlineHeart 
        style={{fontSize:20}} onClick={(e)=>{
          e.preventDefault()
          setheart(!heart)}} />}
          
        <BsShare/></div>}
    </StAll>
  )
}

export default ProductTitle