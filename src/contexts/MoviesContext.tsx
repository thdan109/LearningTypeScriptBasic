import React from "react"
import { createEmitAndSemanticDiagnosticsBuilderProgram } from "typescript"
import {v4 as uuidv4} from "uuid"

interface MovieContextProps {
   children: React.ReactNode
}
interface Movie{
   id: string
   title: string
}

interface MovieContextDefault {
   movies: Movie[]
   addMovie: (title: string) => void
   deleteMovie: (id: string) => void
}

const movieContextDefaultData = {
   movies: [],
   addMovie: () => {},
   deleteMovie: () => {}
}

export const MovieContext = React.createContext<MovieContextDefault>(
   movieContextDefaultData
)

const MovieContextProvider = ({children}: MovieContextProps) =>{
   const [movies, setMovies] = React.useState<Movie[]>(
      movieContextDefaultData.movies
   )

   const addMovie = (title: string) => 
      setMovies([...movies, {id: uuidv4(), title}])
   
   const deleteMovie = (id: string) => setMovies(movies.filter(movie => movie.id !== id))   
  
   const movieContextData = {movies, addMovie, deleteMovie}

   return  (
      <MovieContext.Provider value={movieContextData}>
         {children}
      </MovieContext.Provider>
   )
      
}
export default MovieContextProvider

