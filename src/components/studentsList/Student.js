import React from 'react';
import StudentHeader from './StudentHeader';
import StudentBody from './StudentBody';
import StudentFooter from './StudentFooter';

const Student = ({ data, onEdit, onDelete }) => (
    <div className="list-item-wrapper">
        <StudentHeader
            id={data.id}
            name={data.name}
            onEdit={onEdit}
            onDelete={onDelete}
        />

        <StudentBody
            data={data}
        />

        <StudentFooter
            personalPresentation={data.personalPresentation}
        />
</div>
);

export default Student;