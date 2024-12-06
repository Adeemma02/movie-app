import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import './App.css'
import Movie from './components/Movie';
import Footer from './components/Footer';

const key = '151c59ca14ad05d5e4c3c147c43bb53d';
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular`, {
          params: { api_key: key }
        });
        setMovies(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchPopularMovies();
  }, []);

  const searchMovies = async (query) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
        params: { 
          api_key: key, 
          query: query 
        }
      });
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      searchMovies(searchQuery);
    }
  };

  const fetchMovieDetails = async (movieId) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        params: { 
          api_key: key,
          append_to_response: 'credits,videos'
        }
      });
      setSelectedMovie(response.data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };
  
  const setVote = (vote) =>{
    if(vote >= 8){
      return 'green'
    } else if(vote >= 6){
      return 'orange'
    }else{
      return 'red'
    }
  }

  return (
    <div className="app">
        {/* <Header onSubmit={handleSearch} onChang={setSearchQuery} value={searchQuery}/> */}

      <header className="header">
      <h2> <span>AdeEmma</span> movie app</h2>
        <form onSubmit={handleSearch}>
          <input 
          className="header-search"
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </header>

        {/* <Movie movies={movies} /> */}
        <div className="movie-container">
    <h2>Movies</h2>
    <nav className="movie-items">
    {movies.map(movie => (
          <div 
            key={movie.id} 
            className="movie-item"
            onClick={() => fetchMovieDetails(movie.id)}
          >
            <img 
              src={`${IMAGE_PATH}${movie.poster_path}`} 
              alt={movie.title}
              className="movie-img"
            />
              <div className='movie-title'>{movie.title}</div>
        <div className='movie-flex'>
        <div className='movie-date'>{movie.release_date}</div>
        <div className= {`movie-rate ${setVote(movie.vote_average )}`}>{Number(movie.vote_average).toFixed(1)}</div>
    </div>
    <div className="movie-overview">
      <h2>Overview</h2>
      <p>{movie.overview}</p>
    </div>
          </div>
        ))}

    </nav>
   
    </div>
      <Footer />
    </div>
  );
};

export default App;