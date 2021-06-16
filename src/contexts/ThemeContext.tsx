import { PropTypes } from "@material-ui/core"
import React from "react"

interface ThemeContextProps {
   children: React.ReactNode
}
interface ThemeContextDefault {
   theme: PropTypes.Color
   toggleTheme: (theme: PropTypes.Color) => void
}
const themeContextDefaultData = {
   theme: "primary" as PropTypes.Color,
   toggleTheme: () => {}
}

export const ThemeContext = React.createContext<ThemeContextDefault>(themeContextDefaultData)

const ThemeContextProvider = ({children}: ThemeContextProps) =>{
   const [theme, setTheme] = React.useState<PropTypes.Color>(themeContextDefaultData.theme)
   
   const toggleTheme = (theme: PropTypes.Color) =>setTheme(theme)

   const themeContextDynamicData = {theme, toggleTheme}

   return  (
      <ThemeContext.Provider value={themeContextDynamicData}>
         {children}
      </ThemeContext.Provider>
   )
      
}
export default ThemeContextProvider