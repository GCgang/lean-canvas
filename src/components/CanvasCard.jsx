import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import Note from './Note';

export default function CanvasCard({ title, isSubtitle = false }) {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (e) => {
    setNotes([...notes, { id: uuidv4(), content: '' }]);
  };

  const handleRemoveNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  return (
    <article className='row-span-1 bg-white border border-gray-300 min-h-48'>
      <div
        className={`${
          isSubtitle === false && 'bg-gray-100 border-b border-b-gray-300'
        } flex items-center justify-between p-2`}
      >
        <h3 className={`${isSubtitle === false && 'font-bold'}`}>{title}</h3>
        <button
          onClick={handleAddNote}
          className='p-1 text-xs text-white bg-blue-500 border rounded-md border-b-gray-300'
        >
          <FaPlus />
        </button>
      </div>
      <ul className='p-2 space-y-3  min-h-32'>
        {notes.map((note) => (
          <li key={note.id}>
            <Note id={note.id} onRemoveNote={handleRemoveNote} />
          </li>
        ))}
      </ul>
    </article>
  );
}
