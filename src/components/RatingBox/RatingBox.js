import * as React from 'react';
import './style/ratingBox.scss';

const RatingBox = ({ node }) => {
    return (
        <div className="ratingBox-container">
            <h3>{node.frontmatter.name}</h3>
            <p>{node.frontmatter.takeaway}</p>
            <p>{node.frontmatter.rating}</p>
        </div>
    )
}

export default RatingBox;