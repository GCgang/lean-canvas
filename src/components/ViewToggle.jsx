import { FaTh, FaList } from 'react-icons/fa';

export default function ViewToggle({ isGridView, setIsGridView }) {
  const handleClick = (view) => {
    setIsGridView(view);
  };
  return (
    <div className='space-x-2'>
      <button
        onClick={() => handleClick(true)}
        className={`rounded-lg p-2 focus:outline-none focus:ring-2  focus:ring-blue-500 ${
          isGridView ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
        aria-label='Grid View'
      >
        <FaTh />
      </button>
      <button
        onClick={() => handleClick(false)}
        className={`rounded-lg p-2 focus:outline-none focus:ring-2  focus:ring-blue-500 ${
          !isGridView ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
        aria-label='List View'
      >
        <FaList />
      </button>
    </div>
  );
}
