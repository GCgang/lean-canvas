import { useState } from 'react';
import { FaCheck, FaEdit } from 'react-icons/fa';

export default function CanvasTitle() {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [title, setTitle] = useState('Lean Canvas');
  const handleEditTitle = () => {
    setIsEditing(true);
  };
  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };
  const handleTitleSubmit = () => {
    setTitle(editedTitle);
    setIsEditing(false);
  };
  return (
    <div className='flex items-center justify-center mb-2'>
      {isEditing ? (
        <div className='flex items-center'>
          <label htmlFor='cavas-title' className='sr-only'>
            Canvas Title
          </label>
          <input
            type='text'
            id='cavas-title'
            value={editedTitle}
            onChange={handleTitleChange}
            className='text-3xl font-bold text-center text-blue-500 border-b-2 border-blue-500 focus:outline-none'
          />
          <button
            onClick={handleTitleSubmit}
            className='p-2 ml-2 text-white transition duration-300 ease-in-out bg-green-400 rounded-full easi -all hover:bg-green-500 focus:ring-2 focus:ring-green-400 focus:outline-none focus:ring-opacity-50'
            aria-label='Save Title'
          >
            <FaCheck />
          </button>
        </div>
      ) : (
        <h1 className='text-3xl font-bold text-center'>{title}</h1>
      )}
      {!isEditing && (
        <button
          onClick={handleEditTitle}
          className='p-2 ml-2 text-white transition duration-300 ease-in-out bg-yellow-400 rounded-full easi -all hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-400 focus:outline-none focus:ring-opacity-50'
          aria-label='Edit Title'
        >
          <FaEdit />
        </button>
      )}
    </div>
  );
}
