// import React from 'react';
// import '../../App.css';

// export default function Products() {
//   return <h1 className='application'>APPLICATION</h1>;
// }

import React, { Component }  from 'react';
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./NotesList";
import Search from "./Search";
import Header from "./Header";

const Application = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Note Apps using React JS(1)!",
      date: "30/03/2022",
    },
    {
      id: nanoid(),
      text: "Note Apps using React JS(2)!",
      date: "30/03/2022",
    },
    {
      id: nanoid(),
      text: "Note Apps using React JS(3)!",
      date: "30/03/2022",
    },
    {
      id: nanoid(),
      text: "(NEW) Note Apps using React JS(4)!",
      date: "30/03/2022",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default Application;