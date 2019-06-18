import React from 'react';
import FormGroup from 'react-bootstrap/FormGroup';

const PrefferedWayCommuniction = ({ onChange, name, value = '' }) => (
    <FormGroup>
        <label>Preferred Way of Communication</label>
        <div className="radio-buttons-wrapper">
            <label className="radio-wrapper">Email
                <input type="radio" name={name} value="email" checked={value.toLowerCase() === 'email'} onChange={onChange} />
                <span className="checkmark"></span>
            </label>
            <label className="radio-wrapper">Phone
                <input type="radio" name={name} value="phone" checked={value.toLowerCase() === 'phone'} onChange={onChange} />
                <span className="checkmark"></span>
            </label>
        </div>
    </FormGroup>
);

export default PrefferedWayCommuniction;