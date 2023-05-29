import React from 'react'
import { Card } from 'react-bootstrap'
import { Rating } from '@mui/material'

/*NOTE - The following function is conditional on whether or not the individual review in the review list has any stars.
If there are no stars, then it returns an empty div. Else, it will return a read only version of the stars based on the value and
the text value of the reviews object. Each review is styled with React Bootstrap as a card */

export default function Review({individualReview, styles}) {
 
    if (individualReview.stars === null) {
        return (
            <div></div>
        )
    } else {
        return (
            <div className={styles.individualReview}>
                <Card style={{maxWidth: "275px"}}>
                    <Card.Body>
                        <Rating 
                        readOnly
                        value={individualReview.stars} />
                    <div>{individualReview.review}</div>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
