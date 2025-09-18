import React from 'react'

const layout = ({children}: {children : React.ReactNode}) => {
  return (
    <div className=' w-full h-screen flex justify-center pt-10 md:pt-26'>
      {children}
    </div>
  )
}

export default layout
