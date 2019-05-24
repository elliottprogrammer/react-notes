# React Notes App

## Live Demo Link

[https://react-notes.elliottprogrammer.com/](https://react-notes.elliottprogrammer.com/)

### Paragon technical challenge

#### Details

Note since there will be no back end to this app, the routes don't need to be POST routes, I just included them for clarity of what the different actions should be.

1. Create a React App called "Notes App", which allows a user to:
    1. ( GET /notes ) - View all notes
    2. ( GET /notes/:id ) - View 1 note
    3. ( GET /notes/:id/edit ) - Edit 1 note
    4. ( POST /notes - action ) - Create a note (create form can be on /notes with the note list. Add validation as you see necessary for creating a note.)
    5. ( PUT /notes/:id - action, redirect to GET /notes ) - Update 1 note, from the edit page
    6. ( DELETE /notes/:id - action, redirect to GET /notes ) - Delete 1 note, from the View All page
    7. Add simple Unit Testing as you deem appropriate, does not have to be 100% code coverage, just be able to explain the amount of testing and why.
    8. Note - keep it simple, please submit clean code with comments as needed.
    9. Also, please log the number of hours it took you to complete (exclude interruptions/breaks)
