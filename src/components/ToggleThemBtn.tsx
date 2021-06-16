import React from "react"
import { Fab } from "@material-ui/core"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
import { ThemeContext } from "../contexts/ThemeContext"

const useStyles = makeStyles((them: Theme) =>
   createStyles({
      floatBtn: {
         position: "fixed",
         right: "3rem",
         bottom: "3rem"
      }
   }) 
)

const ToggleThemeBtn = ( ) =>{

   const classes = useStyles()
   const {theme, toggleTheme} = React.useContext(ThemeContext)

   return(
      <Fab 
         color="primary" 
         variant="extended" 
         className={classes.floatBtn} 
         onClick={
            toggleTheme.bind(this, theme === "primary" ? "secondary" : "primary")
         }
      >
         Toggle Theme
      </Fab>
   )
}

export default ToggleThemeBtn