import MovieList from './Component/MovieList';
import { moviesData } from './Component/movieData';
import {useSelector, useDispatch} from 'react-redux'
import React, {useEffect} from 'react';
import './App.css';
import { get_movie } from './Redux/action';
import { connect } from 'react-redux';

function App() {
  
  const dispatch = useDispatch();
  const movies = useSelector((state)=> state.movies)

  useEffect (()=> {
    dispatch(get_movie(moviesData))
  },[])


  return (
    <div>
      <h1>Movie List</h1>
      <MovieList movies={movies} />
    </div>
  );
}


export default App;
