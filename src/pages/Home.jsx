import { useState } from 'react';
import CanvasList from '../components/CanvasList';
import SearchBar from '../components/SearchBar';
import ViewToggle from '../components/ViewToggle';
import { useEffect } from 'react';
import { getCanvases } from '../api/cavas';

export default function Home() {
  const [searchInput, setSearchInput] = useState('');
  const [isGridView, setIsGridView] = useState(true);
  const [data, setData] = useState([]);

  async function fetchData(params) {
    const response = await getCanvases(params);
    setData(response.data);
  }

  useEffect(() => {
    fetchData({ title_like: searchInput });
  }, [searchInput]);

  const handleDeleteItem = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className='flex items-center justify-between mb-8'>
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
        <ViewToggle isGridView={isGridView} setIsGridView={setIsGridView} />
      </div>
      <section>
        <CanvasList
          filteredData={data}
          searchInput={searchInput}
          isGridView={isGridView}
          onDeleteItem={handleDeleteItem}
        />
      </section>
    </>
  );
}
