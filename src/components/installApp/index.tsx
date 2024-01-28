import React, { useState } from 'react'
import { StAll } from './style'
import { Button } from 'antd'

const InstallApp = () => {
    const [displayApp, setdisplayApp] = useState(true)
  return (
    displayApp?<StAll>
      <div className='img'>
        <img src="https://torob.com/static/images/torob_logo.svg" alt="" />
      <div>install torob app</div>
      </div>
      <Button onClick={()=>setdisplayApp(false)}>
        x
      </Button>
    </StAll>:<>
    </>
  )
}

export default InstallApp
