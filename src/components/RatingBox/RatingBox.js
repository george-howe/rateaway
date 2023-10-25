import React, { useContext } from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { Context } from '../../context';
import './style/ratingBox.scss';

const RatingBox = ({ ratings }) => {
    const {takeawayType, setTakeawayType } = useContext(Context);

    const hasTakeawayBeenDecided = () => {
        return takeawayType !== 'Takeaway';
    }


    return (
        <div className="ratingBox-container">
            {/* <h3>{node.frontmatter.name}</h3>
            <p>{node.frontmatter.takeaway}</p>
            <p>{node.frontmatter.rating}</p> */}
            {hasTakeawayBeenDecided() ?
                <p>YEP</p>
            :
                <StaticImage src="../../images/pizza.jpg" alt="Hand taking a slice of pizza" />
            }
        </div>
    )
}

export default RatingBox;