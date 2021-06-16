import React from "react"

interface ProgressContextProps{
   children: React.ReactNode
}
interface ProgressContextDefault{
   lastTime: string
   status: string
}
const ProgressDefault = {
   lastTime: "16/06/2021",
   status: "In Progress"
}

export const ProgressContext = React.createContext<ProgressContextDefault>(ProgressDefault)


const ProgressContextProvider = ({children}: ProgressContextProps) =>{
   return(

      <ProgressContext.Provider value={ProgressDefault}>
         {children}
      </ProgressContext.Provider>

   )
}

export default ProgressContextProvider


