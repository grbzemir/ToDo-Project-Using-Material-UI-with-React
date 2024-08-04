import React from 'react';
import PropTypes from 'prop-types';

export default function Task(props) {
    const deleteClick = () => {
        props.delete(props.id);
    };

    return (
        <div className="col-md-4 mb-4">
            <div className="contentDiv">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <button className="btn btn-danger" onClick={deleteClick}>
                    Sil
                </button>
            </div>
        </div>
    );
}

Task.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    delete: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
};
