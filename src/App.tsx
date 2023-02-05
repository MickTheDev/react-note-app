import { useState, useEffect } from 'react';
import { Nav, Notes, New, Trash, Favorite, Landing } from './pages';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Context } from './context';
import { NoteType } from '../typings';
import { nanoid } from 'nanoid';

function App() {
  const [allNotes, setAllNotes] = useState<NoteType[]>([]);
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [trashedNotes, setTrashedNotes] = useState<NoteType[]>([]);
  const [notesCounter, setNotesCounter] = useState<String>('0');

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<string>('Shopping');
  const [favorite, setFavorite] = useState<boolean>(false);

  const handleDeleteNote = (id: any) => {
    const updatedNotes = allNotes.map((note) => {
      if (note.id === id) {
        return { ...note, trashed: true };
      }
      return note;
    });

    if (updatedNotes) {
      setAllNotes(updatedNotes);
    }
  };

  const handleAddNote = () => {
    setTitle('');
    setDescription('');
    setCategory('');
    setFavorite(false);
    const newNote: NoteType = {
      id: nanoid(),
      title: title,
      description: description,
      category: category,
      isFavorite: favorite,
      trashed: false,
    };
    setAllNotes([...allNotes, newNote]);
  };

  const handleUndoNote = (id: any) => {
    const updatedNotes = allNotes.map((note) => {
      if (note.id === id) {
        return { ...note, trashed: false };
      }
      return note;
    });

    if (updatedNotes) {
      setAllNotes(updatedNotes);
    }
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('notes') || '[]');
    if (storedData) {
      setAllNotes(storedData);
      setTrashedNotes(allNotes.filter((note) => note.trashed));
      setNotesCounter(notes.length.toString());
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(allNotes));
    setNotesCounter(notes.length.toString());
    setNotes(allNotes.filter((note) => !note.trashed));
    setTrashedNotes(allNotes.filter((note) => note.trashed));
  }, [allNotes]);

  return (
    <Context.Provider
      value={{
        handleDeleteNote,
        handleAddNote,
        handleUndoNote,
        setTitle,
        title,
        setDescription,
        description,
        setCategory,
        category,
        setFavorite,
        favorite,
      }}
    >
      <div className='App font-helvetica flex bg-background overflow-hidden'>
        <Router>
          <Nav />
          <Routes>
            <Route
              path='/'
              element={<Landing />}
            />
            <Route
              path='/new'
              element={<New />}
            />
            <Route
              path='/notes'
              element={
                <Notes
                  notes={notes}
                  counter={notesCounter}
                />
              }
            />
            <Route
              path='/trash'
              element={<Trash trashed={trashedNotes} />}
            />
            <Route
              path='/favorite'
              element={<Favorite />}
            />
          </Routes>
        </Router>
      </div>
    </Context.Provider>
  );
}

export default App;
