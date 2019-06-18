import React from 'react';
import { Link } from 'react-router-dom';

const StudentHeader = ({ name, onEdit, onDelete, id }) => (
    <div className="item-header">
        <Link to={`/edit/${id}`} className="name">{name}</Link>
        <div className="control-buttons">
            <button type="button" onClick={() => onEdit(id)} className="edit-student">
                <i className="fas fa-edit"></i>
            </button>
            <button type="button" onClick={() => onDelete(id)} className="delete-student">
                <i className="fas fa-trash-alt"></i>
            </button>
        </div>
    </div>
);

export default StudentHeader;