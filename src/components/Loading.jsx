import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function Loading() {
  return (
    <div className='flex items-center justify-center'>
      <div className='text-center'>
        <AiOutlineLoading3Quarters className='animate-spin text-4xl text-blue-500 mx-auto mb-4' />
        <p className='text-xl font-semibold text-gray-700'>Loading...</p>
      </div>
    </div>
  );
}
