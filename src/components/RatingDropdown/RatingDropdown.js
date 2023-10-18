import { Link } from 'gatsby';
import * as React from 'react';
import './style/ratingDropdown.scss';
import Dropdown from '../Dropdown/Dropdown';

const RatingDropdown = ({ ratings }) => {
    let takeawayOptions = [];
    ratings.map(ratingNode => (
        takeawayOptions.push(ratingNode.frontmatter.takeaway)
    ));

    return (
        <div className="ratingDropdown-container">
            <h1>WE WANT A</h1>
            <Dropdown options={takeawayOptions} dropdownLabel="Takeaway"/>
        </div>
    )
}

export default RatingDropdown;