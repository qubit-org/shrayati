import React, { useEffect, useRef, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import "./Splash.css"
function Splash() {
    const ref = useRef();
    useEffect(()=>{
      ref.current.continuousStart()
    },[])
  return (
   <> <LoadingBar 
      style={{zIndex:'10000'}}
      color='#68D338' 
      ref={ref}
      height={7}
   />
   <div className="loaderr">
    <img src="./imgs/prod/logo.png"  alt="" />
   </div>
  </>
  )
}

export default Splash
