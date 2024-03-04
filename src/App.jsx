import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Noteslist from './components/Noteslist';
import Searh from './components/Searh';
import Header from './components/Header';

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    return savedNotes || [];
  });
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const weekend = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const colors = ['#ffcccc', '#ccffcc', '#ccccff', '#ffffcc', '#ccffff', '#ffccff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const newNote = {
      id: nanoid(),
      text: text,
      date: now.toLocaleDateString(),
      time: `${hours}:${minutes}:${seconds}`,
      weekend: weekend[now.getDay()],
      backgroundColor: randomColor,
    };

    const newNotes = [newNote, ...notes];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const handleUpdateNote = (id, newText) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, text: newText };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleDarkMode={setDarkMode} />
        <Searh handleSearch={setSearchText} />
        <Noteslist
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handleDelete={deleteNote}
          handleUpdateNote={handleUpdateNote}
        />
      </div>
    </div>
  );
}

export default App;
