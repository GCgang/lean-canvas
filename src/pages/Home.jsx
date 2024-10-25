import { useState } from 'react';
import CanvasList from '../components/CanvasList';
import SearchBar from '../components/SearchBar';
import ViewToggle from '../components/ViewToggle';
import { useEffect } from 'react';
import { createCanvas, getCanvases } from '../api/cavas';
import Loading from '../components/Loading';
import Error from '../components/Error';
import AddCanvasButton from '../components/AddCanvasButton';

export default function Home() {
  const [searchInput, setSearchInput] = useState('');
  const [isGridView, setIsGridView] = useState(true);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  async function fetchData(params) {
    try {
      setIsLoading(true);
      setIsError(null);
      await new Promise((resolver) => setTimeout(resolver, 1000));
      const response = await getCanvases(params);
      setData(response.data);
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  }

  const [isLoadingCreate, setIsLoadingCreate] = useState(false);
  const handleCreateCanvas = async () => {
    try {
      setIsLoadingCreate(true);
      await new Promise((resolver) => setTimeout(resolver, 1000));
      await createCanvas();
      fetchData({ title_like: searchInput });
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoadingCreate(false);
    }
  };

  useEffect(() => {
    fetchData({ title_like: searchInput });
  }, [searchInput]);

  const handleDeleteItem = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleRetry = () => {
    fetchData({ title_like: searchInput });
  };

  return (
    <>
      <div className='flex items-center justify-between mb-8'>
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
        <ViewToggle isGridView={isGridView} setIsGridView={setIsGridView} />
      </div>
      <div className='flex justify-end mb-4'>
        <AddCanvasButton
          isLoadingCreate={isLoadingCreate}
          onCreateCanvas={handleCreateCanvas}
        />
      </div>
      {isLoading && <Loading />}
      {isError && <Error message={isError.message} onRetry={handleRetry} />}
      {!isLoading && !isError && (
        <section>
          <CanvasList
            filteredData={data}
            searchInput={searchInput}
            isGridView={isGridView}
            onDeleteItem={handleDeleteItem}
          />
        </section>
      )}
    </>
  );
}
