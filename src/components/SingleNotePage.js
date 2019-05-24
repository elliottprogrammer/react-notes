import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SingleNotePage = ({ match, notes }) => {

    return (
        <div className="jumbotron">
            <Link to="/notes" className="btn btn-sm btn-outline-secondary mb-4">&#8592; Back to Notes List</Link>
            <ul className="list-group">
                {notes.filter((note) => note.id === match.params.id).map((note) => (
                    <li
                        className="list-group-item list-group-item-action"
                        key={note.id}
                    >
                        <div className="d-flex w-100 justify-content-between">
                            <h5>{note.title}</h5>
                            <Link to={`/notes/edit/${note.id}`} className="btn btn-light">Edit Note</Link>
                        </div>
                        <p>{note.note}</p>
                        <p>{note.id}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

SingleNotePage.propTypes = {
    match: PropTypes.object.isRequired,
    notes: PropTypes.array.isRequired,
}

export default SingleNotePage;
