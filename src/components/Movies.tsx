import React from "react"
import {Box, TextField, Button, Chip,PropTypes } from "@material-ui/core"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
import { MovieContext } from "../contexts/MoviesContext"
import { ThemeContext } from "../contexts/ThemeContext"

const useStyles = makeStyles((them: Theme) =>
   createStyles({
      movieInput:{
         marginRight: "5px",
      },
      movieChip:{
         fontSize: "1.5rem",
         padding: "25px",
         margin: "5px"
      }
   })
)

const Movies: React.FC = () =>{

   // Classes
   const classes = useStyles()
   // state
   const [movie, setMovie] = React.useState<string>('')

   const {theme} = React.useContext(ThemeContext)
   const chipTheme = theme as Exclude<PropTypes.Color, 'inherit'>
   const {movies, addMovie, deleteMovie} = React.useContext(MovieContext)

   const onMovieInputChange = (event: React.ChangeEvent<HTMLInputElement>) => 
      setMovie(event.target.value)

   return (

      <>
         <Box
            display="flex"
            justifyContent="center"
            my={5}
         >
            <TextField 
               label="Your favorite movie..." 
               variant="outlined"
               onChange={onMovieInputChange}
               className={classes.movieInput}
               value={movie}
            />
            <Button 
               variant="contained" 
               color="primary" 
               onClick={() => {
                  addMovie(movie)
                  setMovie('')
               }}
            >
               Add Film
            </Button>
         </Box>

         <Box 
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            mx={5}
         >
            {movies.map( movie =>(
               <Chip 
                  key={movie.id} 
                  label={movie.title} 
                  clickable 
                  color={chipTheme} 
                  className={classes.movieChip} 
                  onDelete={() => deleteMovie(movie.id)}
               />
            ))}
         </Box>
      </>

   )

}
export default Movies