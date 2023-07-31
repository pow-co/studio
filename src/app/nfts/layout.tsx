import React from 'react'

const layout = ({children}: {
    children: React.ReactNode
  }) => {
  return (
    <>
    <div>{children}</div>
    <div id="createPopupController"/>
    </>
  )
}

export default layout