import { createContext } from 'react';

interface ContextProps {
  handleEmptyBin: () => void;
  handleDeleteNote: (id: any) => void;
  handleDeleteAll: () => void;
  handleAddNote: () => void;
  handleUndoNote: (id: any) => void;
  setTitle: React.Dispatch<React.SetStateAction<any>>;
  title: any;
  setDescription: React.Dispatch<React.SetStateAction<any>>;
  description: any;
  setCategory: React.Dispatch<React.SetStateAction<any>>;
  category: any;
  setFavorite: React.Dispatch<React.SetStateAction<any>>;
  favorite: any;
  notesCounter: any;
  trashedCounter: any;
  favoriteCounter: any;
}

export const Context = createContext<ContextProps>({} as ContextProps);
