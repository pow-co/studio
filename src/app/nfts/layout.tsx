import React from 'react'
import Script from 'next/script'

const layout = ({children}: {
    children: React.ReactNode
  }) => {
  return (
    <>
    <Script src="https://kit.fontawesome.com/090ca49637.js" crossOrigin="anonymous"/>
    <div>{children}</div>
    <div id="createPopupController"/>
    </>
  )
}

export default layout