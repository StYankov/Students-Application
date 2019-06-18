import React from 'react';

const InfoRow = ({ label, value }) => (
    <div className="i-row">
        <p className="label">{label}</p>
        <p className="value">{value}</p>
    </div>
);

export default InfoRow;