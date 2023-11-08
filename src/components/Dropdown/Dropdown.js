import React, { useState, useContext } from 'react';
import { Context } from '../../context';
import './style/dropdown.scss';

const Dropdown = ({ options, dropdownLabel, handleOnClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (e) => {
        handleOnClick(e.target.innerText);
        setIsOpen(!isOpen);
    }

    return (
        <div className="dropdown__container">
            <button type="button" className="dropdown__button" id="dropdown__button" onClick={() => setIsOpen(!isOpen)}>{dropdownLabel}</button>
            {isOpen && (
                <ul className="dropdown__options">
                    {options.map(option => (
                        <li onClick={handleOptionClick}>{option}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Dropdown;