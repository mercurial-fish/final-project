import React from 'react'
import Review from './Review'

export default function ReviewList({individualMovieReviews, styles}) {
/*NOTE - This function maps over the index of each object in the array of individualMovieReviews and returns the Review
component. The Review component then takes the individual review as its property*/
  return (
    <div className={styles.individualMovieReviews}>
      {individualMovieReviews.map((individualReview, index) => <Review individualReview={individualReview} styles={styles}/>)}
    </div>
  )
}
