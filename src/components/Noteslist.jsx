import React from 'react'
import Notes from './Notes'
import AddNote from "./AddNotes"
function Noteslist({ notes, handleAddNote, handleDelete,handleUpdateNote }) {
  return (
    <div className='notes-list'>
      {notes.map((notes, id) => <Notes id={notes.id} text={notes.text} date={notes.date} time={notes.time} weekend={notes.weekend} backgroundColor={notes.backgroundColor} handleDeleteNote={handleDelete} handleUpdateNote = {handleUpdateNote}  />)}
      <AddNote handleAddNote={handleAddNote}  />

    </div>
  )
}

export default Noteslist