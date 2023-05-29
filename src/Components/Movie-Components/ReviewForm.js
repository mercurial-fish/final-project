import React, { useState } from 'react';
import { Button, Form, Accordion } from "react-bootstrap";
import { Rating } from '@mui/material'; //NOTE - this is the star rating functionality imported from pre-existing library
import ReviewList from './ReviewList';

/*NOTE - The constants below useState to set the base state of each of these values, and a way to change these values with functions,
without losing the base value. For example, the state of review is an empty string. When we pass in a string to setReview, it will change
the review to that new string. But once we refresh the page, the review will be set back to the empty string. This is true for each of
the below variables. */

export default function ReviewForm({listOfReviews, styles}) {
  const [review, setReview] = useState("");
  const [value, setValue] = useState(null);
  const [reviews, setReviews] = useState(listOfReviews);

  /*NOTE - a new variable is created using the input from the rating component (value) and the text input from the form (review) */

  const submitReview = (e) => {
    e.preventDefault();
    const newReview = {
      stars: value,
      review: review,
    };

    //NOTE - destructures the reviews, which is the listOfReviews from this specific movie and adds in the new review.
    setReviews([...reviews, newReview]);

    //NOTE - sets the value and the text input field back to the original
    setValue(null);
    setReview("");
  };
  
  /*NOTE - The review form is styled with React Bootstrap. The only thing that will show on the page is the word "Reviews".
  Once this is clicked on, the accordion will expand and show the star rating, the text input field and the review list. */

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
          <Accordion.Header>Reviews</Accordion.Header>
                 <Accordion.Body>
                 <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                  <Form.Group>
                  <Form.Control
                      key="reviewForm" 
                      as="textarea" 
                      rows={3} value={review} 
                      onChange={(e) => setReview(e.target.value)} />
                  </Form.Group>
                    <Button 
                    key= "submitButton"
                    className='mt-2'
                    variant='success'
                    disabled={review === ""} 
                    onClick={(e) => submitReview(e)}>Submit</Button>
                <ReviewList individualMovieReviews={reviews} styles={styles}/>
                </Accordion.Body>
          </Accordion.Item>
    </Accordion>
  )
}

/*NOTE - the ReviewList component calls on the reviews variable as its individualMovieReviews property. The reviews
are the reviews given to this particular movie, not all of the movies across the movies array, hence the distinction */

