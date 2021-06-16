import React from "react"
import {
   AppBar, 
   Toolbar, 
   Box, 
   Typography, 
   FormControl,
   Select,
   MenuItem,
   Button,
   Chip
} 
from "@material-ui/core";
import WelcomeMessages from "./WelcomeMessages"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
import {ProgressContext} from "../contexts/ProgressContext"
import { ThemeContext } from "../contexts/ThemeContext";
const useStyles = makeStyles((theme: Theme ) =>createStyles({
   positionSelect: {
      color: "white",
      borderBottom: "1px solid white"
   }
}))

const NavBar  = () =>{

   const classes = useStyles()

   const {lastTime, status} =  React.useContext(ProgressContext)
   const {theme} = React.useContext(ThemeContext)
   // state
   const [position, setPosition] = React.useState<string>("Developer")
   const [time, setTime] = React.useState<Date>( ()=> new Date(Date.now()))

   React.useEffect(()=>{
      const timer = setInterval(() =>setTime(new Date(Date.now() )),1000)
      return () => clearInterval(timer)
   },[])

   const onPositionChange = (event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown ;
  }>) =>{
      setPosition(event.target.value as string)
      
   }

   return(
      <AppBar position="static" color={theme}>
         <Toolbar> 
            <Box 
               display="flex" 
               justifyContent="space-between" 
               alignItems="center" 
               width={1} py={2} 
            >
               <Typography variant="h6">
                  My movies
               </Typography>
               <Box textAlign="center">
                  <WelcomeMessages position={position} />
                  <Chip 
                     label = {`Last time on this project: ${lastTime} - Status: ${status}`}
                  />
                  <Box mt={1}>
                     <FormControl>
                        <Select value={position} onChange={onPositionChange} className={classes.positionSelect}  >
                           <MenuItem  value="Developer">Develop</MenuItem>
                           <MenuItem  value="Tester">Tester</MenuItem>
                           <MenuItem  value="Customer">Customer</MenuItem>
                        </Select>
                     </FormControl>
                  </Box>
               </Box>
               <Box textAlign="center" >
                  <Box my={1} >
                     <Typography variant="h6">
                        {time.toUTCString()}
                     </Typography>
                  </Box>
                  <Box>
                     <Button variant="contained">Login</Button>
                  </Box>
                 
               </Box>
            </Box>
         </Toolbar>
      </AppBar>

   )
} 
export default NavBar
