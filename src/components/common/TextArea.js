import React from 'react';
import FormGroup from 'react-bootstrap/FormGroup';
import Label from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';

const TextArea = ({ id, label, name, value, onChange, rows = 4}) => (
    <FormGroup className="w-100">
        <Label htmlFor={id}>{label}</Label>
        <FormControl
            as="textarea"
            name={name}
            value={value}
            onChange={onChange}
            rows={rows}
            id={id}
        />
    </FormGroup>
);

export default TextArea;