import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NotesList = ({ notes, deleteNote }) => {
    if (!notes) {
        return null;
    }
    return (
        <div className="jumbotron" data-test="notesListComponent">
            <ul className="list-group">
                {notes.map((note) => (
                    <li className="list-group-item list-group-item-action mb-3" key={note.id}>
                        <h5 data-test="noteTitle">{note.title}</h5>
                        <p className="py-3" data-test="noteDesc">{note.note}</p>
                    
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
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            note: PropTypes.string.isRequired,
        }).isRequired
    ),
    deleteNote: PropTypes.func.isRequired,
}

export default NotesList;
