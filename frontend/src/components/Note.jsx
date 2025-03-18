import noteService from '../services/notes'

const Note = ({ note, notes, setNotes, user, toggleImportance }) => {

  const handleDelete = async (note) => {
    const result = window.confirm(`remove note "${note.content}"`)
    if (!result) {
      console.log("The user canceled the action.")
      return
    }

    try {
      await noteService.remove(note.id)
      setNotes(notes.filter(b => b.id !== note.id))
    } catch (error) {
      console.error("Error while deletion:", error)
    }
  }

  const label = note.important
    ? 'make not important' : 'make important'


    return (
      <li className="note card border border-primary mb-3 p-3">
        <div className="card-body bg-dark text-light">
          <p className="card-text">{note.content}</p>
          <button 
            className={`btn ${note.important ? 'btn-warning' : 'btn-outline-light'}`} 
            onClick={toggleImportance}
          >
            {label}
          </button>
          {note.user && user && user.username === note.user.username && (
            <button 
              className="btn btn-outline-danger ms-2" 
              onClick={() => handleDelete(note)}
            >
              Delete
            </button>
          )}
        </div>
      </li>
    )
}

export default Note