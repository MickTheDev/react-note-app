import React from 'react';
import { NoteType } from '../../typings';
import { Note } from '.';

type Props = {
  notes: NoteType[];
};

const NotesList = ({ notes }: Props) => {
  return (
    <div className='grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-3 pr-2 overflow-y-scroll overflow-x-hidden'>
      {notes.map((note) => (
        <Note
          note={note}
          key={String(note.id)}
        />
      ))}
    </div>
  );
};

export default NotesList;
