import { useRouter } from 'next/navigation'
import React, { FC, useState } from 'react'
import { AiFillBell, AiFillHeart, AiOutlineArrowLeft, AiOutlineBell, AiOutlineHeart } from 'react-icons/ai'
import { BsShare } from 'react-icons/bs'
import { StAll } from './style'
interface PropTypes{
  data?:any
}
const ProductTitle:FC<PropTypes> = ({data}) => {
  const location=(typeof window!=='undefined') ?window.location.pathname:""
  const [heart, setheart] = useState(false)
  const [bell, setbell] = useState(false)
  const router=useRouter()
  return (
    <StAll>
       <div className="back"><AiOutlineArrowLeft onClick={()=>router.back()}/></div>
       <h2>{location!=='/product'?"products":data?.name1}</h2>
       {location!=='/product'&&<span>{" "}</span>}
       {location==='/product'&&<div className='btns'>{bell?<AiFillBell onClick={()=>setbell(!bell)} style={{fill:'rgb(215, 57, 72)'}}/>:<AiOutlineBell  
       
        onClick={()=>setbell(!bell)}/>}
        {heart?<AiFillHeart style={{fill:'rgb(215, 57, 72)'}}onClick={(e)=>{
          e.preventDefault()
          setheart(!heart)}}

        />:<AiOutlineHeart 
         onClick={(e)=>{
          e.preventDefault()
          setheart(!heart)}} />}
          
        <BsShare/></div>}
    </StAll>
  )
}

export default ProductTitle