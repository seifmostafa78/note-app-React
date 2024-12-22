import { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import {nanoid} from "nanoid"

const App = () => {

    const [searchText, setsearchText] = useState('');

    const [darkmode, setdarkmode] = useState(() => {
        const savedMode = localStorage.getItem('react-toggle-mode-app')
        return savedMode? JSON.parse(savedMode) : false
    });


    const [notes, setnotes] = useState([])


    useEffect(() => {
        localStorage.setItem('react-toggle-mode-app', JSON.stringify(darkmode))
    }, [darkmode])


    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
      
        if (savedNotes) {
          setnotes(savedNotes);
        }
      }, []);
      
      useEffect(() => {
        if (notes.length > 0) {
          localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
        }
      }, [notes]);


    const addNote = (text) => {
        const date = new Date()

        const newnote = {
            id: nanoid(), 
            text: text,
            date: date.toLocaleDateString(),
        }
        const newnotes = [...notes, newnote]
        setnotes(newnotes)
    }

    const deleteNote = (id) => {
        const newnotes = notes.filter((note) => note.id !== id)
        setnotes(newnotes)
    }

    const SearchText = (text) => {
        setsearchText(text)
    }

    return (
    <div className={darkmode? "darkmode" : ""}>
        <div className="container">
        <Header handleToggleMode={setdarkmode}/>
        <Search handleSearchText={SearchText}/>
        <NotesList 
        notes={notes.filter((note) => note.text.toLocaleLowerCase().includes(searchText))}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        />
        </div>
    </div>
    );
}

export default App;