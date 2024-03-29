import React from 'react'
import TopBar from './TopBar'

const Workspace = ({children}) => {
  return (
    <div>
         <div>
         <div className="flex flex-col place-items-center w-full border-opacity-50 h-screen">
        <div className="grid h-30   m-1">
          <TopBar/>
        </div>
        <div className="grid gr h-70 place-items-center gap-3">
         {children}
        </div>
      </div>
    </div>
    </div>
  )
}
export default Workspace;