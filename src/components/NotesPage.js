import React from 'react';
import PropTypes from 'prop-types';
import NoteForm from './NoteForm';
import NotesList from './NotesList';

const NotesPage = ({notes, handleSubmit, handleDelete}) => {
    return (
        <div>
            <NoteForm addNote={(note) => handleSubmit(note)} />
            <NotesList notes={notes} deleteNote={(id) => handleDelete(id)} />
        </div>
    )
}

NotesPage.propTypes = {
    notes: PropTypes.array.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}

export default NotesPage;