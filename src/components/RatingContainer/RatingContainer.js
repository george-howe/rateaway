import React, { useContext } from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { Context } from '../../context';
import './style/ratingContainer.scss';
import RatingBox from '../RatingBox/RatingBox';

const RatingContainer = ({ ratings }) => {
    const {takeawayType, setTakeawayType } = useContext(Context);

    const hasTakeawayBeenDecided = () => {
        return takeawayType !== 'Takeaway';
    }

    const getTopRatedForChosenTakeaway = () => {
        const takeawayRatings = ratings.filter((rating) => rating.frontmatter.takeaway.toUpperCase() === takeawayType);
        
        takeawayRatings.map((tr) => {
            const {
                georgeRating,
                joshRating,
                peteRating
            } = tr.frontmatter;

            const allRatings = [];
            allRatings.push(georgeRating, joshRating, peteRating);

            const initialValue = 0;
            const overallRating = Math.round(allRatings.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue,)/allRatings.length);
            
            tr.frontmatter.overallRating = overallRating;
        })

        const topRatingNumber = Math.max(...takeawayRatings.map(takeawayRating => takeawayRating.frontmatter.overallRating));

        const topRated = takeawayRatings.filter((rating) => rating.frontmatter.overallRating === topRatingNumber);

        return topRated;
        
    }


    return (
        <div className="ratingContainer">
            {hasTakeawayBeenDecided() ?
                <RatingBox takeawayRating={getTopRatedForChosenTakeaway()} />
            :
                <StaticImage src="../../images/pizza.jpg" alt="Hand taking a slice of pizza" />
            }
        </div>
    )
}

export default RatingContainer;