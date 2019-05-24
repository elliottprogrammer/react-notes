import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import uuidv4 from 'uuid/v4';
import Header from './components/Header';
import Footer from './components/Footer';
import NotesPage from './components/NotesPage';
import SingleNotePage from './components/SingleNotePage';
import EditNotePage from './components/EditNotePage';

class App extends Component {
    state = {
        notes: [
            { 
                id: 'ce315d04-ce4b-4ae3-811c-41531e0201b8',
                title: 'Example Note 1',
                note: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, quaerat.'
            },
            { 
                id: '1dc6c76f-8f27-4ab1-b252-dd29b940e723',
                title: 'Example Note 2',
                note: 'Quis magni eaque commodi esse, incidunt velit'
            },
        ]
    }

    editNote = (note) => {
        const editPos = this.state.notes.map(stateNote => stateNote.id).indexOf(note.id);
        const newNotes = [...this.state.notes];
        newNotes.splice(editPos, 1, note);
        this.setState({ notes: newNotes }); 
    }

    addNote = (note) => {
        const notesCopy = [...this.state.notes];
        note.id = uuidv4();
        notesCopy.push(note);
        this.setState({ notes: notesCopy });
    }

    deleteNote = (id) => {
        const newNotes = [...this.state.notes].filter((note) => note.id !== id);
        this.setState({ notes: newNotes });
    }

    render() {
        const {notes} = this.state;
        return (
        <Router>
            <Header />
            <main>
                <div className="container py-5">
                    <Switch>
                        <Route exact path="/notes" render={(props) => <NotesPage {...props} notes={notes} handleSubmit={(note) => this.addNote(note)} handleDelete={(id) => this.deleteNote(id)} />} />
                        <Route exact path="/">
                            <Redirect to="/notes" />
                        </Route>
                        <Route path="/notes/edit/:id" render={(props) => <EditNotePage {...props} notes={notes} editNote={(note) => this.editNote(note)} />} />
                        <Route path="/notes/:id" render={(props) => <SingleNotePage {...props} notes={notes} />} />   
                    </Switch>
                </div>
            </main>
            <Footer />
        </Router>
        );
    }
}

export default App;
