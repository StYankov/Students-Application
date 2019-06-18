import React from 'react';
import FormGroup from 'react-bootstrap/FormGroup';
import Label from 'react-bootstrap/FormLabel';
import FormInput from 'react-bootstrap/FormControl';

const Input = ({ label, id, name, value, onChange, type='text', required = false }) => (
    <FormGroup>
        <Label htmlFor={id}>{label}</Label>
        <FormInput 
            type={type} 
            id={id} 
            name={name}
            value={value} 
            onChange={onChange}
            required={required} 
        />
    </FormGroup>
);

export default Input;