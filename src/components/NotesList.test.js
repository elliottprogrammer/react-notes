import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../utils/testUtils';
import NotesList from './NotesList';

const setUp = (props={}) => {
    const component = shallow(<NotesList {...props} />);
    return component;
}

describe('NotesList Component', () => {
    
    describe('Have notes prop', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                notes: [
                    {
                        id: 'testid1',
                        title: 'Note Title 1',
                        note: 'Note description 1'
                    },
                ],
                deleteNote: jest.fn(),
            }
            wrapper = setUp(props);
        });

        it('should render without errors', () => {
            const component = findByTestAttr(wrapper, 'notesListComponent');
            expect(component.length).toBe(1);
        });

        it('should render an individual note item', () => {
            const noteItems = wrapper.find('.list-group-item');
            expect(noteItems.length).toBe(1); 
        });
        it('should render a note title', () => {
            const noteTitle = findByTestAttr(wrapper, 'noteTitle');
            expect(noteTitle.length).toBe(1); 
        });
        it('should render a note desc', () => {
            const noteDesc = findByTestAttr(wrapper, 'noteDesc');
            expect(noteDesc.length).toBe(1); 
        });
    });

    describe('Have NO notes prop', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                deleteNote: jest.fn(),
            }
            wrapper = setUp(props);
        });

        it('Should not render', () => {
            const component = findByTestAttr(wrapper, 'notesListComponent');
            expect(component.length).toBe(0);
        });
    });

});