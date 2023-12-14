import React, { useState, useEffect } from "react";
import "../css/create_area.css";

const CreateArea = ({ onAddNote, onUpdateNote, selectedNote }) => {
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteContent, setNewNoteContent] = useState("");

  useEffect(() => {
    // Update input fields when selectedNote changes
    if (selectedNote) {
      setNewNoteTitle(selectedNote.title);
      setNewNoteContent(selectedNote.content);
    } else {
      // Reset input fields when no note is selected
      setNewNoteTitle("");
      setNewNoteContent("");
    }
  }, [selectedNote]);

  const handleAddOrUpdate = () => {
    if (selectedNote) {
      // Update existing note
      onUpdateNote(selectedNote.index, {
        title: newNoteTitle,
        content: newNoteContent,
      });
    } else {
      // Add new note
      onAddNote({
        title: newNoteTitle,
        content: newNoteContent,
      });
    }

    // Reset the input fields after adding/updating
    setNewNoteTitle("");
    setNewNoteContent("");
  };

  return (
    <div className="create_area">
      <form className="form_style">
        <input
          className="create_input"
          type="text"
          placeholder="Title"
          value={newNoteTitle}
          onChange={(e) => setNewNoteTitle(e.target.value)}
        />

        <p>
          <textarea
            className="create_textarea"
            rows=""
            column=""
            placeholder="Take a note..."
            value={newNoteContent}
            onChange={(e) => setNewNoteContent(e.target.value)}
          ></textarea>
        </p>

        <button className="create_button" type="button" onClick={handleAddOrUpdate}>
          {selectedNote ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default CreateArea;
