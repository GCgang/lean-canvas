import { FaSpinner } from 'react-icons/fa';

export default function AddCanvasButton({ isLoadingCreate, onCreateCanvas }) {
  return (
    <button
      onClick={onCreateCanvas}
      className='py-2 px-4  bg-blue-500 hover:bg-blue-600 rounded-lg font-bold text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
    >
      <span className='flex items-center justify-center'>
        {isLoadingCreate && <FaSpinner className='animate-spin mr-2' />}
        등록하기
      </span>
    </button>
  );
}
