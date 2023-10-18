import React, { useState } from 'react';
import './style/dropdown.scss';

const Dropdown = ({ options, dropdownLabel }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(dropdownLabel);

    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    }

    const handleOptionClick = (e) => {
        setSelectedOption(e.target.innerText);
        setIsOpen(!isOpen);
    }

    return (
        <div className="dropdown__container">
            <button type="button" className="dropdown__button" onClick={handleButtonClick}>{selectedOption}</button>
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