import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies';
import NavBar from './components/NavBar';
import ToggleThemeBtn from './components/ToggleThemBtn';
import MovieContextProvider from './contexts/MoviesContext';
import ProgressContextProvider from "./contexts/ProgressContext"
import ThemeContextProvider from './contexts/ThemeContext';


function App() {
   return (
      <div>
         <MovieContextProvider>
            <ThemeContextProvider  >
               <ProgressContextProvider >
                  <NavBar />
                  <Movies />
                  <ToggleThemeBtn/>
               </ProgressContextProvider>
            </ThemeContextProvider>
         </MovieContextProvider>
         
      </div>    
   );
}

export default App;
