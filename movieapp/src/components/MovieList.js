import React from "react";
import { Card } from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';


const Movielist = (props) => {
    return <div className="Movielist">
        {props.movies.map(el => <Card style={{ width: '18rem' }}>
            <Card.Img height='400px' width='350px' variant="top" src={el.image} />
            <Card.Body>
                <Card.Title>{el.name}</Card.Title>
                <StarRatingComponent value={el.rating} starCount={10} />
            </Card.Body>
        </Card>)}
    </div>
}
export default Movielist