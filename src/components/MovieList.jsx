import React from 'react'

const MovieList = (movie) => {
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
    <div><div key={movie.id} className="movie-item">
    <img
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
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
     </div>
  )
}

export default MovieList