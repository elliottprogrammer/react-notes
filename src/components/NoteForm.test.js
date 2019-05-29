import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../utils/testUtils';
import NoteForm from './NoteForm';

const setUp = (props={}) => {
    const component = shallow(<NoteForm {...props} />);
    return component;
}

describe('NoteForm Component', () => {

    describe('Check PropTypes', () => {
        it('should not throw a warning', () => {
            const expectedProps = {
                addNote: jest.fn(), 
            }
            const propsErr = checkProps(NoteForm, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Renders', () => {
        let wrapper;
        let addNoteEvent = jest.fn();
        beforeEach(() => {
            const props = {
                addNote: addNoteEvent,
            }
            wrapper = setUp(props);
        });
        
        it('should render the form', () => {
            const form = findByTestAttr(wrapper, 'noteForm');
            expect(form.length).toBe(1);
        });

        it('should render the title input field', () => {
            const titleInput = findByTestAttr(wrapper, 'titleInput');
            expect(titleInput.length).toBe(1);
        });

        it('should render the note input field', () => {
            const noteInput = findByTestAttr(wrapper, 'noteInput');
            expect(noteInput.length).toBe(1);
        });

        it('should render the submit button', () => {
            const submitButton = findByTestAttr(wrapper, 'submitButton');
            expect(submitButton.length).toBe(1);
        });
    });

    describe('Submit form without values', () => {
        let wrapper;
        let addNoteEvent = jest.fn();
        beforeEach(() => {
            const props = {
                addNote: addNoteEvent,
            }
            wrapper = setUp(props);
        });
        it('should render errors on submit', () => {
            const form = findByTestAttr(wrapper, 'noteForm');
            // simulate form submit
            form.simulate('submit', { preventDefault: () => {}});
            const titleInputError = findByTestAttr(wrapper, 'titleInputError');
            // expect render of title input error
            expect(titleInputError.length).toBe(1);
            const noteInputError = findByTestAttr(wrapper, 'noteInputError');
            // expect render of note input error
            expect(noteInputError.length).toBe(1);
        });
    });

});