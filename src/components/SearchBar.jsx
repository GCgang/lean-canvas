import { FaSearch } from 'react-icons/fa';

export default function SearchBar({ searchInput, setSearchInput }) {
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <div className='relative'>
      <label htmlFor='search-input' className='sr-only'>
        검색
      </label>
      <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2  text-gray-400' />
      <input
        type='search'
        id='search-input'
        placeholder='검색'
        value={searchInput}
        onChange={handleChange}
        className='w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
    </div>
  );
}
