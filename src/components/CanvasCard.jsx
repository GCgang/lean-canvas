import { FaPlus } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import Note from './Note';

export default function CanvasCard({
  title,
  isSubtitle = false,
  notes = [],
  onNotesChange,
}) {
  const handleAddNote = () => {
    const newNote = {
      id: uuidv4(),
      content: '',
      color: '',
    };
    onNotesChange([...notes, newNote]);
  };
  const handleRemoveNote = (id) => {
    onNotesChange(notes.filter((note) => note.id !== id));
  };
  const handleUpdateNote = (id, content, color) => {
    onNotesChange(
      notes.map((note) => (note.id === id ? { ...note, content, color } : note))
    );
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
            <Note
              id={note.id}
              content={note.content}
              color={note.color}
              onRemoveNote={handleRemoveNote}
              onUpdateNote={handleUpdateNote}
            />
          </li>
        ))}
      </ul>
    </article>
  );
}
