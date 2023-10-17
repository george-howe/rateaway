import * as React from 'react';

const RatingBox = ({ node }) => {
    return (
        <div>
            <h3>{node.frontmatter.name}</h3>
            <p>{node.frontmatter.takeaway}</p>
            <p>{node.frontmatter.rating}</p>
            <p>{node.frontmatter.notes}</p>
        </div>
    )
}

export default RatingBox;