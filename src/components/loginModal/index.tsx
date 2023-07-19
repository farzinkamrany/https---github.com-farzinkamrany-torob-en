import { Button, Divider, Form, Input, Modal, Row } from 'antd'
import Link from 'next/link'
import React, { FC, useState } from 'react'

interface PropTypes{
  isModalOpen?:any
  setIsModalOpen?:any
}
const LoginModal:FC<PropTypes> = ({isModalOpen=false,setIsModalOpen}) => {
  const [login, setlogin] = useState(false)
  const [phoneNumber, setphoneNumber] = useState<number>(0)

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal
    footer={false}
    title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form>
<Divider
 plain>Login or register</Divider>
    <p>{!login?"phone number":"email" }</p>
    <Input onBlur={()=>setphoneNumber} />
    <br />
    <Button  style={{width:'80%',margin:'3% 10%',background:'#bf1f25 ',color:'#fff'}}>
    Receive verification code
    </Button>
    <br />
    {phoneNumber>0&&
    <>
    <p>receive verification code</p>
    <Input />
    </>}
    <div style={{width:'100%',justifyContent:'center',display:'flex',flexDirection:'column'}} className="about">
   <Row style={{justifyContent:'center'}}>
   Registering in Tarb means agreeing to  
    <Link style={{marginLeft:'1%'}} href="/">  the terms of use of Tarb .</Link>
   </Row>
   
    <Button style={{border:'none'}} onClick={()=>setlogin((prev:any)=>!prev)}>
   {login? "I create a new user account.":"I used to have an account in Torb."}
    </Button>
    </div>
    </Form>
  </Modal>
  )
}

export default LoginModal
