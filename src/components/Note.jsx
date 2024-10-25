import { useState, useRef, useEffect } from 'react';
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';

export default function Note({
  id,
  content,
  color: initalColor,
  onRemoveNote,
}) {
  const colorOptions = [
    'bg-yellow-300',
    'bg-pink-300',
    'bg-blue-300',
    'bg-green-300',
  ];
  const [color, setColor] = useState(() => {
    if (initalColor) return initalColor;
    const randomIndex = Math.floor(Math.random() * colorOptions.length);
    return colorOptions[randomIndex];
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleClickNote = () => {
    setIsEditing(true);
  };
  const handleCheckNote = (e) => {
    e.stopPropagation();
    setIsEditing(false);
  };
  const handleRemoveNote = () => {
    onRemoveNote(id);
  };
  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };
  const handleChangeColor = (option) => {
    setColor(option);
  };
  const textareaRef = useRef(null);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + 'px';
    }
  }, [content]);
  return (
    <div
      className={`relative px-4 py-6 ${color} max-h-[32rem] overflow-hidden`}
      onClick={handleClickNote}
    >
      <div className='absolute top-2 right-2'>
        {isEditing ? (
          <button
            onClick={handleCheckNote}
            className='text-xl text-gray-700'
            aria-label='Check Note'
          >
            <AiOutlineCheck />
          </button>
        ) : (
          <button
            onClick={handleRemoveNote}
            className='text-xl text-gray-700'
            aria-label='Close Note'
          >
            <AiOutlineClose />
          </button>
        )}
      </div>
      <textarea
        ref={textareaRef}
        value={content}
        onChange={handleChangeContent}
        className='w-full h-auto min-h-32 bg-transparent resize-none border-none outline-none text-gray-900 overflow-hidden'
        aria-label='Edit Note'
        placeholder='글을 작성하세요'
        readOnly={!isEditing}
      />
      <div className='flex space-x-2'>
        {colorOptions.map((option, i) => (
          <button
            key={i}
            onClick={() => handleChangeColor(option)}
            className={`w-6 h-6 rounded-full cursor-pointer outline outline-gray-50 ${option}`}
            aria-label={`Change Color to ${option}`}
          />
        ))}
      </div>
    </div>
  );
}
