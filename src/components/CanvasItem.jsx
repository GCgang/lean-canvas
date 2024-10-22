import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

export default function CanvasItem({
  id,
  title,
  lastModified,
  category,
  onDelete,
}) {
  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(id);
  };
  return (
    <Link
      to={`/canvases/${id}`}
      className='block relative bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 p-4'
    >
      <div>
        <h2 className='text-2xl font-bold mb-2 text-gray-800'>{title}</h2>
        <p className='text-sm mb-2 text-gray-600'>
          최근 수정일: {lastModified}
        </p>
        <span className='inline-block  py-1 px-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full'>
          {category}
        </span>
      </div>
      <button
        onClick={handleDelete}
        className='absolute top-2 right-2 text-red-500 hover:scale-125 hover:rotate-6 transition-transform duration-300'
        aria-label='Delete'
      >
        <FaTrash />
      </button>
    </Link>
  );
}
