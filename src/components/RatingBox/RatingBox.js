import React, { useContext } from 'react';
import { Context } from '../../context';
import './style/ratingBox.scss';

const RatingBox = ({ takeawayRating }) => {
    const {
        name,
        takeaway,
        overallRating
    } = takeawayRating[0].frontmatter;
    
    return (
        <div className="ratingBox">
            <h3>{name}</h3>
            <p>{overallRating}</p>
        </div>
    )
}

export default RatingBox;