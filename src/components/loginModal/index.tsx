import { Button, Divider, Form, Input, Modal, Row } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { FC, useEffect, useState } from 'react'

interface PropTypes{
  isModalOpen?:any
  setIsModalOpen?:any
}
const LoginModal:FC<PropTypes> = ({isModalOpen=false,setIsModalOpen}) => {
  const [login, setlogin] = useState(false)
  const [phoneNumber, setphoneNumber] = useState<string>('')
  const [showCodeInput, setshowCodeInput] = useState(false)
  const [triggerButton, settriggerButton] = useState(false)
  const [code, setcode] = useState<any>()

  const handleOk = () => {
    setIsModalOpen(false);
    setshowCodeInput(false)
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setshowCodeInput(false)
  };

  const router=useRouter()
  useEffect(() => {
    phoneNumber.length>10&&phoneNumber.slice(0,2)==='09'&&settriggerButton(true)
  }, [phoneNumber])
  
  return (
    <Modal
    footer={false}
    destroyOnClose
    title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form>
<Divider
 plain>Login or register</Divider>
    <p>{!login?"phone number":"email" }</p>
    <Input onBlur={(e)=>{
      setphoneNumber(e.target.value)
      e.target.value.slice(0,2)==='09'&& e.target.value.length>10&&setshowCodeInput(true)
      settriggerButton(true)
      }} />
    <br />
    {(phoneNumber.slice(0,2)!=='09'|| phoneNumber.length<11)&&triggerButton&&<span style={{color:'#ff3333'}}>enter the right number</span>}
    {
    // (phoneNumber).length>10&&
    showCodeInput&&
    <>
    <br />
    <p> verification code</p>
    <Input onBlur={(e)=>setcode(e.target.value)}/>
    </>}
    <Button  style={{width:'80%',margin:'3% 10%',background:'#bf1f25 ',color:'#fff'}}
    onClick={()=>{
      code?localStorage.setItem('phone number',phoneNumber):null
      handleCancel()
      router.refresh()
    }}
    >
    {!triggerButton?'Receive verification code':'enter code'}
    </Button>
    <br />
    <div style={{width:'100%',justifyContent:'center',display:'flex',flexDirection:'column'}} className="about">
   <Row style={{justifyContent:'center'}}>
   Registering in Torob means agreeing to  
    <Link style={{marginLeft:'1%'}} href="/">  the terms of use of Torob .</Link>
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
