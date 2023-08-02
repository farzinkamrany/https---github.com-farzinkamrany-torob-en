import React,{FC} from 'react'
import { StAll } from './style'
import Link from 'next/link'
interface PropTypes{
  data?:any
}
const ItemsList:FC<PropTypes> = ({data}) => {
  return (
    <StAll>
      <Link href=''>
        {/* <h4>{data?.title}</h4> */}
      </Link>
      <p>
      {data?.items?.map((res:any)=><div className='dropitems'>
        <Link href={'/browse/x'}>
        <b>{res?.title}</b>
        </Link>
        {res?.items?.length>0&&<ul>
    {res?.items?.map((resp:any)=><Link href={'/product/'+res?.title}><li>{resp?.title}</li></Link>)}
        </ul>}
      </div>)}
      </p>
    </StAll>
  )
}

export default ItemsList
