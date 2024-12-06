import React from 'react'

const Movie = (movies) => {
  return (
    <div> <div>
    <div className="movie-container">
    <h2>Movies</h2>
    <nav className="movie-items">
    {(movies || []).map(movie => (
     <div 
     key={movie.id} 
     className="movie-card"
     // onClick={() => fetchMovieDetails(movie.id)}
   >
     <img 
       src={`${movie.poster_path}`} 
       alt={movie.title}
     />
     <h3>{movie.title}</h3>
     <p>Rating: {movie.vote_average}/10</p>
   </div>
    ))}
    </nav>
   
    {/* {selectedMovie && (
        <div className="movie-details">
          <h2>{selectedMovie.title}</h2>
          <img 
            src={`${IMAGE_PATH}${selectedMovie.backdrop_path}`} 
            alt={selectedMovie.title}
          />
          <p>{selectedMovie.overview}</p>
          <div>
            <strong>Genres:</strong>
            {selectedMovie.genres.map(genre => genre.name).join(', ')}
          </div>
        </div>
      )} */}
    </div>
 
         </div>
    </div>
  )
}

export default Movie