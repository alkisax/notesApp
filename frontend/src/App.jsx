import { useState, useEffect, useRef } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import Note from './components/Note'
import LoginForm from './components/LoginForm'
import NoteForm from './components/NoteForm'
import noteService from './services/notes'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import './index.css'


const App = () => {
  const [notes, setNotes] = useState([])
  const [showAll, setShowAll] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const noteFormRef = useRef()

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        console.log('Initial notes:', initialNotes);
        setNotes(initialNotes)
      })
  }, [])

  useEffect(() => {
    // This effect will run when `notes` state changes
    noteService
      .getAll()
      .then(updatedNotes => {
        setNotes(updatedNotes)
      })
  }, []) 

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      noteService.setToken(user.token)
    }
  }, [])

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
  
    noteService
      .update(id, changedNote)
        .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {
        console.log(error);
        
        alert(
          `the note '${note.content}' was already deleted from server`
        )
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  const handleLogout = (event) => {
    event.preventDefault()
    window.localStorage.clear()
    setUser(null)
  }

  return (
    <div className="bg-dark text-light min-vh-100 d-flex align-items-center justify-content-center">
      <div className="col-6 bg-dark text-light p-4 rounded border border-secondary shadow-lg">
        <h1 className="text-center text-white bg-dark p-4 rounded border border-secondary shadow-lg">
          Notes
        </h1>
        <Notification message={errorMessage} />
        {user === null && (
          <Togglable buttonLabel="Login">
            <LoginForm
              setUser={setUser}
              username={username}
              password={password}
              setErrorMessage={setErrorMessage}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          </Togglable>
        )}
        {user !== null && (
          <div className="d-flex justify-content-between align-items-center mb-4">
            <p style={{ margin: 0 }} className="d-inline">{user.name} logged in </p>
            <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
          </div>
        )}
        {user !== null && (
          <Togglable buttonLabel="New Note" ref={noteFormRef}>
            <NoteForm
              setNotes={setNotes}
              notes={notes}
              noteFormRef={noteFormRef}
            />
          </Togglable>
        )}
        <h2 className="mt-4">Notes</h2>
        <div>
          <button
            className="btn btn-outline-light mb-3"
            onClick={() => setShowAll(!showAll)}
          >
            Show {showAll ? 'Important' : 'All'}
          </button>
        </div>
        <ul className="list-unstyled">
          {notesToShow.map(note => (
            <Note
              key={note.id}
              note={note}
              notes={notes}
              setNotes={setNotes}
              user={user}
              toggleImportance={() => toggleImportanceOf(note.id)}
            />
          ))}
        </ul>
        <Footer />
      </div>
    </div>
  )
}


  const Footer = () => {

    return (
      <div className="bg-dark text-light py-2 mt-4 text-center">
        <em>Note app. Created as part of exercise during the Full Stack Finland Mooc</em>
      </div>
    )
  }

export default App