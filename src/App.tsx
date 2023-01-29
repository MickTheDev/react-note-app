import { useState, useEffect } from 'react';
import { Nav, Notes, New, Trash, Favorite, Landing } from './pages';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Context } from './context';
import { NoteType } from '../typings';
import { nanoid } from 'nanoid';

function App() {
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [notesCounter, setNotesCounter] = useState<String>('0');

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<string>('Shopping');
  const [favorite, setFavorite] = useState<boolean>(false);

  const handleDeleteNote = (id: any) =>
    setNotes(notes.filter((note) => note.id != id));

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
    };
    setNotes([...notes, newNote]);
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('notes') || '[]');
    if (storedData) {
      setNotes(storedData);
      setNotesCounter(notes.length.toString());
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
    setNotesCounter(notes.length.toString());
  }, [notes]);

  return (
    <Context.Provider
      value={{
        handleDeleteNote,
        handleAddNote,
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
              element={<Trash />}
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
