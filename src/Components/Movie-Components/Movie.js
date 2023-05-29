import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

/*NOTE - This component returns the all properties of the movie object, except for the reviews object. It is styled
with react-bootstrap. On the page, only the Poster will show and when you click on the image, it will reveal the rest of the information.
The synopsis is styled as a card within the accordion */

export default function Movie({movie, styles}) {




  return (
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header><img src={movie.poster} className={styles.posters} /></Accordion.Header>
            <Accordion.Body>
            <h1>{movie.title}</h1>
            <h2>{movie.rating}</h2>
            <h3>{movie.runTime}</h3>
            <Card style={{width: "400px"}}>
              <Card.Body>
                {movie.synopsis}
              </Card.Body>
            </Card>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
  )
}
