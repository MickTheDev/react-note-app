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
  const [favoriteNotes, setFavoriteNotes] = useState<NoteType[]>([]);
  const [notesCounter, setNotesCounter] = useState<String>('0');
  const [trashedCounter, setTrashedCounter] = useState<String>('0');
  const [favoriteCounter, setFavoriteCounter] = useState<String>('0');

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

  const handleDeleteAll = () => {
    const updatedNotes = allNotes.map((note) => {
      return { ...note, trashed: true };
    });
    setAllNotes(updatedNotes);
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

  const handleEmptyBin = () => {
    const updatedNotes = allNotes.filter(
      (note) => !trashedNotes.includes(note)
    );
    setAllNotes(updatedNotes);
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('notes') || '[]');
    if (storedData) {
      setAllNotes(storedData);
      setTrashedNotes(allNotes.filter((note) => note.trashed));
      setNotesCounter(notes.length.toString());
      setTrashedCounter(trashedNotes.length.toString());
      // setFavoriteCounter()
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(allNotes));
    setNotes(allNotes.filter((note) => !note.trashed));
    setTrashedNotes(allNotes.filter((note) => note.trashed));
    setFavoriteNotes(
      allNotes.filter((note) => note.isFavorite && !note.trashed)
    );
  }, [allNotes]);

  useEffect(() => {
    setNotesCounter(notes.length.toString());
  }, [notes]);

  useEffect(() => {
    setTrashedCounter(trashedNotes.length.toString());
  }, [trashedNotes]);

  useEffect(() => {
    setFavoriteCounter(favoriteNotes.length.toString());
  }, [favoriteNotes]);

  return (
    <Context.Provider
      value={{
        handleEmptyBin,
        handleDeleteNote,
        handleDeleteAll,
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
        notesCounter,
        trashedCounter,
        favoriteCounter,
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
              element={<Notes notes={notes} />}
            />
            <Route
              path='/trash'
              element={<Trash trashed={trashedNotes} />}
            />
            <Route
              path='/favorite'
              element={<Favorite favoriteNotes={favoriteNotes} />}
            />
          </Routes>
        </Router>
      </div>
    </Context.Provider>
  );
}

export default App;
