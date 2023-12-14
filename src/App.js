import React, { useState } from "react";
import './App.css';
import Header from './components/Header';
import Note from './components/Note';
import CreateArea from './components/CreateArea';
import Footer from './components/Footer';

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
    setSelectedNote(null); // Reset selectedNote after deleting
  };

  const editNote = (index) => {
    const selected = notes[index];
    setSelectedNote({ ...selected, index });
  };

  const updateNote = (index, updatedNote) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = updatedNote;
    setNotes(updatedNotes);
    setSelectedNote(null); // Reset selectedNote after updating
  };

  return (
    <div>
      <div>
        <Header></Header>
      </div>

      <div>
        <CreateArea onUpdateNote={updateNote} selectedNote={selectedNote} onAddNote={addNote} />
      </div>

      <div className='all_notes'>
        {notes.map((note, index) => (
          <Note onDelete={() => deleteNote(index)}
          onEdit={() => editNote(index)} 
          key={index} title={note.title} content={note.content} />
        ))}
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;