import React from 'react';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';

const englishLevels = [ 'A1', 'A2', 'B1', 'B2', 'C1' ];


const EnglishSelect = ({ id, label, name, value, onChange }) => (
    <FormGroup>
        <FormLabel htmlFor={id}>{label}</FormLabel>
        <select
            name={name} 
            value={value}
            onChange={onChange}
            className="form-control"
            required
        >
            {englishLevels.map(level => <option key={`list-item-${level}`} value={level}>{level}</option>)}
        </select>
    </FormGroup>
);

export default EnglishSelect;