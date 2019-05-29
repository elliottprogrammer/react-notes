import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isEmpty from '../utils/isEmpty';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            note: '',
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
                const newNote = {
                    id: uuidv4(),
                    title: this.state.title,
                    note: this.state.note
                }
                // Add new note
                this.props.addNote(newNote);
                // Clear note form fields
                this.setState({
                    ...this.state,
                    id: '',
                    title: '',
                    note: '',
                    errors: {}
                });
            }
        });
        
    }

    render() {
        const { title, note, errors } = this.state;
        return (
            <div className="jumbotron mb-5">
                <h4>Add Note:</h4>
                <form className="border bg-light border-light p-3" data-test="noteForm" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            data-test="titleInput"
                            className={classnames('form-control', { 'is-invalid': errors.title })}
                            type="text"
                            name="title"
                            onChange={this.handleInputChange}
                            value={title}
                        />
                        {errors.title && (<div data-test="titleInputError" className="invalid-feedback">{errors.title}</div>)}
                    </div>
                    <div className="form-group">
                        <label htmlFor="note">Note</label>
                        <input
                            data-test="noteInput"
                            className={classnames('form-control', { 'is-invalid': errors.note })}
                            type="text"
                            name="note"
                            onChange={this.handleInputChange}
                            value={note}
                        />
                        {errors.note && (<div data-test="noteInputError" className="invalid-feedback">{errors.note}</div>)}
                    </div>
                    <button className="btn btn-success" data-testid="submit-button" type="submit">Submit</button>
                </form> 
            </div>
        )
    }
}

NoteForm.propTypes = {
    addNote: PropTypes.func.isRequired,
}

export default NoteForm;