import { Box } from "@material-ui/core"
import React from "react"

interface WelcomeMessagesProps{
   position: string
   country?:string
}

const WelcomeMessages = ({position, country}: WelcomeMessagesProps) =>{

   return(
      <Box mb={1} >
          Welcome {position} from {country} 
      </Box> 

   )
}

export default WelcomeMessages