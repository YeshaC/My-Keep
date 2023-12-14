import React from "react";
import "../css/note.css";

const Note = ({ title, content, onEdit, onDelete }) => {
  return (
    <div className="Note_div">
      <h1> {title} </h1>
      <p> {content} </p>

      <div className="dlt_update_div">
        <button onClick={onDelete}> Delete </button>
        <button onClick={onEdit}> Edit </button>
      </div>
    </div>
  );
};

export default Note;