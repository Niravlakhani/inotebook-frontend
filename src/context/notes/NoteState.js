import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const noteInitials = [
    {
      _id: "64e23a266df7469f567e4aa9",
      user: "64e2322159d1c55f13ca4ddd",
      title: "Learn English Updated",
      description: "Daily Learn English updated",
      tag: "YouTube updated",
      created_date: "2023-08-20T16:07:02.658Z",
      __v: 0,
    },
    {
      _id: "64e23a266df7469f567e4aa9",
      user: "64e2322159d1c55f13ca4ddd",
      title: "Learn English Updated",
      description: "Daily Learn English updated",
      tag: "YouTube updated",
      created_date: "2023-08-20T16:07:02.658Z",
      __v: 0,
    },
    {
      _id: "64e23a266df7469f567e4aa9",
      user: "64e2322159d1c55f13ca4ddd",
      title: "Learn English Updated",
      description: "Daily Learn English updated",
      tag: "YouTube updated",
      created_date: "2023-08-20T16:07:02.658Z",
      __v: 0,
    },
    {
      _id: "64e23a266df7469f567e4aa9",
      user: "64e2322159d1c55f13ca4ddd",
      title: "Learn English Updated",
      description: "Daily Learn English updated",
      tag: "YouTube updated",
      created_date: "2023-08-20T16:07:02.658Z",
      __v: 0,
    },
    {
      _id: "64e23a266df7469f567e4aa9",
      user: "64e2322159d1c55f13ca4ddd",
      title: "Learn English Updated",
      description: "Daily Learn English updated",
      tag: "YouTube updated",
      created_date: "2023-08-20T16:07:02.658Z",
      __v: 0,
    },
    {
      _id: "64e23a266df7469f567e4aa9",
      user: "64e2322159d1c55f13ca4ddd",
      title: "Learn English Updated",
      description: "Daily Learn English updated",
      tag: "YouTube updated",
      created_date: "2023-08-20T16:07:02.658Z",
      __v: 0,
    },
    {
      _id: "64e23a266df7469f567e4aa9",
      user: "64e2322159d1c55f13ca4ddd",
      title: "Learn English Updated",
      description: "Daily Learn English updated",
      tag: "YouTube updated",
      created_date: "2023-08-20T16:07:02.658Z",
      __v: 0,
    },
    {
      _id: "64e23a266df7469f567e4aa9",
      user: "64e2322159d1c55f13ca4ddd",
      title: "Learn English Updated",
      description: "Daily Learn English updated",
      tag: "YouTube updated",
      created_date: "2023-08-20T16:07:02.658Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(noteInitials);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
