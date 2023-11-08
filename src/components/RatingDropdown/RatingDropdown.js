import { Link } from 'gatsby';
import React, { useContext } from 'react';
import { Context } from '../../context';
import './style/ratingDropdown.scss';
import Dropdown from '../Dropdown/Dropdown';

const RatingDropdown = ({ ratings }) => {
    

    const getTakeawayOptions = () => {
        let takeawayOptions = [];
        ratings.map(ratingNode => (
            takeawayOptions.push(ratingNode.frontmatter.takeaway)
        ));
        
        // return only unique takeaway options, no duplicates
        return [ ...new Set(takeawayOptions) ];
    }

    const {takeawayType, setTakeawayType } = useContext(Context);

    return (
        <div className="ratingDropdown-container">
            <h1>WE WANT A</h1>
            <Dropdown
                options={getTakeawayOptions()}
                dropdownLabel={takeawayType}
                handleOnClick={setTakeawayType}
            />
        </div>
    )
}

export default RatingDropdown;