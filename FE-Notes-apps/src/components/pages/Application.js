import React from 'react';
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import '../../App.css';
import '../index.css';
import Header from '../applications/Header';
import Search from '../applications/Search';
import NotesList from '../applications/NotesList';
// import Cards from '../Cards';
// import HeroSection from '../HeroSection';
// import Footer from '../Footer';

function Application() {
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
    <>
      {/* <Header/> */}
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
    </>
  );
}

export default Application;
