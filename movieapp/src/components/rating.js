import React, { Component } from "react";
import StarRatingComponent from 'react-star-rating-component';

export default class Rating extends React.Component {
    state = {
        rating: 1
    };
    onStarClick = (nextValue, prevValue, name) => {
        this.setState({ rating: nextValue });
        this.props.rating(nextValue);
    }

    render() {
        const { rating } = this.state;

        return (
            <div>
                <StarRatingComponent
                    starCount={10}
                    value={this.state.rating}
                    onStarClick={this.onStarClick}
                />
            </div>
        );
    };

};