import React from 'react';
import Movie from './Movie';
import ReviewForm from './ReviewForm';
import Navigation from '../Navigation';


/*NOTE - This function uses the movies array and maps over each object index in the array and returns the Movie and a Review Form.
The Movie component calls the movie object as its property, while the ReviewForm calls on the movie.reviews as its object. That means
it is specifically calling on the reviews object within each movie object.*/

export default function MovieList({movies, styles}) {
  

  return (
    <div className={styles.movieContainer}>
        {movies.map((movie, index) => (
          <div key={index}>
          <Movie 
            movie={movie}
            styles={styles}
          />
          <ReviewForm 
            listOfReviews={movie.reviews}
            styles={styles} />
          </div>
        ))}
    </div>
  )
}



