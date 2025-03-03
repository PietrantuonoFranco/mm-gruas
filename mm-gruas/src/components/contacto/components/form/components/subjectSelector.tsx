'use client'

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"

interface SubjectSelectorProps {
  onChange: (value: string) => void;
}

const SubjectSelector: React.FC<SubjectSelectorProps> = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayValue, setDisplayValue] = useState('');

  const options = [
    { display: 'Transporte de auto', value: 'transportar un auto' },
    { display: 'Transporte de moto', value: 'transportar una moto' },
    { display: 'Transporte de camioneta', value: 'transportar una camioneta' },
    { display: 'Transporte de utilitario', value: 'transportar un utilitario' },
    { display: 'Transporte de máquina agrícola', value: 'transportar una máquina agrícola' },
    { display: 'Otro', value: 'otro' },
  ];

  const handleOptionClick = (option: { display: string; value: string }) => {
    setDisplayValue(option.display);
    onChange(option.value); // Llama a la función onChange con el valor seleccionado
    setIsOpen(false);
  };

  const handleInputClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full rounded-3xl">
        <input
            id="subject"
            type="text"
            value={displayValue}
            onClick={handleInputClick}
            readOnly
            placeholder="Selecciona un asunto"
            className="w-full bg-white mt-1 px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-1 focus:ring-gray-900 cursor-pointer"
        />
        <FontAwesomeIcon
            icon={faCaretDown}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none"
        />
        {isOpen && (
            <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-3xl shadow-lg">
            {options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${option.display === "Transporte de auto" ? "rounded-t-3xl" : ""} ${option.display === "Otro" ? "rounded-b-3xl" : ""}`}
                >
                  {option.display}
                </li>
            ))}
            </ul>
        )}
        </div>
  );
};

export default SubjectSelector;