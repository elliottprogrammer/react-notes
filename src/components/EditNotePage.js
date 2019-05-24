import React, { Component } from 'react';
import isEmpty from '../utils/isEmpty';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class EditNotePage extends Component {
    constructor(props) {
        super(props);
        const singleNote = props.notes.filter((note) => note.id === props.match.params.id)[0];
        this.state = {
            id: singleNote.id,
            title: singleNote.title,
            note: singleNote.note,
            errors: {}
        }
    }
    
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const errorsCopy = {};
        // Check for empty form fields
        if(isEmpty(this.state.title)) {
            errorsCopy.title = "This field is required";
        }
        if(isEmpty(this.state.note)) {
            errorsCopy.note = "This field is required";
        }
        this.setState({errors: errorsCopy}, () => {
            // test if this.state.errors is empty object
            if(Object.entries(this.state.errors).length === 0 && this.state.errors.constructor === Object) {
                const noteCopy = { ...this.state  }
                // Edit note
                this.props.editNote(noteCopy);
                // Redirect to notes list page
                this.props.history.push('/notes');
            }
        });
        
    }

    handleCancel = (e) => {
        this.props.history.push('/notes');
    }

    render() {
        const { title, note, errors } = this.state;
        return (
            <div className="jumbotron">
                <h4>Edit Note:</h4>
                <form className="border bg-light border-light p-3" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            className={classnames('form-control', { 'is-invalid': errors.title })}
                            type="text"
                            name="title"
                            onChange={this.handleInputChange}
                            value={title}
                        />
                        {errors.title && (<div className="invalid-feedback">{errors.title}</div>)}
                    </div>
                    <div className="form-group">
                        <label htmlFor="note">Note</label>
                        <input
                            className={classnames('form-control', { 'is-invalid': errors.note })}
                            type="text"
                            name="note"
                            onChange={this.handleInputChange}
                            value={note}
                        />
                        {errors.note && (<div className="invalid-feedback">{errors.note}</div>)}
                    </div>
                    <button className="btn btn-success mr-3" type="submit">Submit</button>
                    <button className="btn btn-outline-secondary" onClick={this.handleCancel}>Cancel</button>
                </form> 
            </div>
        )
    }
}

EditNotePage.propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    notes: PropTypes.array.isRequired,
    editNote: PropTypes.func.isRequired,
}

export default EditNotePage;
