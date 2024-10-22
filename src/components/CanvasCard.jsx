import { FaPlus } from 'react-icons/fa';

export default function CanvasCard({ title, isSubtitle = false }) {
  return (
    <article className='row-span-1 bg-white border border-gray-300 min-h-48'>
      <div
        className={`${
          isSubtitle === false && 'bg-gray-100 border-b border-b-gray-300'
        } flex items-center justify-between p-2`}
      >
        <h3 className={`${isSubtitle === false && 'font-bold'}`}>{title}</h3>
        <button className='p-1 text-xs text-white bg-blue-500 border rounded-md border-b-gray-300'>
          <FaPlus />
        </button>
      </div>
      <div className='p-2 space-y-3 min-h-32'></div>
    </article>
  );
}
