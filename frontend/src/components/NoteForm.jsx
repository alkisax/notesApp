import { useState } from 'react'
import noteService from '../services/notes'

const NoteForm = ({ setNotes, notes, noteFormRef }) => {

  const [newNote, setNewNote] = useState('')

  const addNote = (event) => {
    event.preventDefault()

    const noteObject = {
      content: newNote,
      important: true
    }
  
    noteService
      .create(noteObject)
      .then(returnedNote => {
      setNotes(notes.concat(returnedNote))
      setNewNote('')
    })
    noteFormRef.current.toggleVisibility()
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }


return (
  <div>
    <h2>Create a new note</h2>
    
    <form onSubmit={addNote}>
      <div className="mb-3">
        <label htmlFor="noteContent" className="form-label">Note Content</label>
        <textarea
          id="noteContent"
          className="form-control"
          value={newNote}
          onChange={handleNoteChange}
          rows="4"
          placeholder="Enter your note here"
        />
      </div>
      <button type="submit" className="btn btn-primary">Save</button>
    </form>  
  </div>
)
}

export default NoteForm