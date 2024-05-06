import React from 'react'

const ChartContainer = ({children}) => {
  return (
    <div className="w-2/3 bg-white px-[14px] py-[30px] rounded-xl  shadow-xl" >
      {children}
    </div>
  )
}

export default ChartContainer
