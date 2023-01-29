import { createContext } from 'react';

interface ContextProps {
  handleDeleteNote: (id: any) => void;
  handleAddNote: () => void;
  setTitle: React.Dispatch<React.SetStateAction<any>>;
  title: any;
  setDescription: React.Dispatch<React.SetStateAction<any>>;
  description: any;
  setCategory: React.Dispatch<React.SetStateAction<any>>;
  category: any;
  setFavorite: React.Dispatch<React.SetStateAction<any>>;
  favorite: any;
}

export const Context = createContext<ContextProps>({} as ContextProps);
