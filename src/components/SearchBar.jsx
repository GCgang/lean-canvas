import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar({ searchText = '', onSearch }) {
  const [localSearchText, setLocalSearchText] = useState(searchText);

  const handleChange = (e) => {
    setLocalSearchText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(localSearchText);
    }
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
        value={searchText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className='w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
    </div>
  );
}
