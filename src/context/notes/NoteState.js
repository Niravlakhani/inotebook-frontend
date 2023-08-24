import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000/api";
  const noteInitials = [];
  const [notes, setNotes] = useState(noteInitials);

  // Get Notes
  const getNotes = async () => {
    // TODO: call API
    const url = `${host}/notes/all-notes`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlMjMyMjE1OWQxYzU1ZjEzY2E0ZGRkIn0sImlhdCI6MTY5MjU0NTU2OX0.3ynHj9a3SJh1ey8wQ7YdM9eZG4mzUlqgxbjXw8dYjKU",
      },
    });
    const result = await response.json();

    console.log("result", result);
    setNotes(result);
  };

  // Add a note

  const addNote = async (title, description, tag) => {
    // TODO: call API
    console.log("title, description, tag", title, description, tag);
    const url = `${host}/notes/create-note`;
    const data = {
      title: title,
      description: description,
      tag: tag,
    };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlMjMyMjE1OWQxYzU1ZjEzY2E0ZGRkIn0sImlhdCI6MTY5MjU0NTU2OX0.3ynHj9a3SJh1ey8wQ7YdM9eZG4mzUlqgxbjXw8dYjKU",
      },
      body: JSON.stringify(data),
    });
    const result = response.json();

    const note = {
      _id: "64e23a266df7469f567e4aa984546652",
      user: "64e2322159d1c55f13ca4ddd",
      title: title,
      description: description,
      tag: tag,
      created_date: "2023-08-20T16:07:02.658Z",
      __v: 0,
    };

    setNotes(notes.concat(note));
  };

  // edit a note

  const editNote = async (id, title, description, tag) => {
    // TODO: call API
    const url = `${host}/notes/update-note/${id}`;
    const data = {
      title: title,
      description: description,
      tag: tag,
    };
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlMjMyMjE1OWQxYzU1ZjEzY2E0ZGRkIn0sImlhdCI6MTY5MjU0NTU2OX0.3ynHj9a3SJh1ey8wQ7YdM9eZG4mzUlqgxbjXw8dYjKU",
      },
      body: JSON.stringify(data),
    });
    const result = response.json();
  };

  // delete a note

  const deleteNote = (id) => {
    // TODO: call API

    console.log("id", id);
    const newNote = notes.filter((note) => note._id !== id);
    setNotes(newNote);
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, editNote, deleteNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
