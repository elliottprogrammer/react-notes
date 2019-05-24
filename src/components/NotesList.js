import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NotesList = ({ notes, deleteNote }) => {
    return (
        <div className="jumbotron">
            <ul className="list-group">
                {notes.map((note) => (
                    <li className="list-group-item list-group-item-action mb-3" key={note.id}>
                        <h5>{note.title}</h5>
                        <p className="py-3">{note.note}</p>
                    
                        <Link to={`/notes/${note.id}`} className="btn btn-sm btn-outline-info mr-2">View Note</Link>
                        <Link to={`/notes/edit/${note.id}`} className="btn btn-sm btn-outline-success mr-2">Edit Note</Link>
                        <button className="btn btn-sm btn-outline-danger" onClick={() => deleteNote(note.id)}>Delete Note</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

NotesList.propTypes = {
    notes: PropTypes.array.isRequired,
    deleteNote: PropTypes.func.isRequired,
}

export default NotesList;
