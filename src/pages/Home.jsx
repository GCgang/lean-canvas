import { useState } from 'react';
import CanvasList from '../components/CanvasList';
import SearchBar from '../components/SearchBar';
import ViewToggle from '../components/ViewToggle';
import { useEffect } from 'react';
import { createCanvas, deleteCanvas, getCanvases } from '../api/cavas';
import Loading from '../components/Loading';
import Error from '../components/Error';
import AddCanvasButton from '../components/AddCanvasButton';
import useApiRequest from '../../ hooks/useApiRequest';

export default function Home() {
  const [searchInput, setSearchInput] = useState('');
  const [isGridView, setIsGridView] = useState(true);

  const {
    isLoading,
    isError,
    data,
    execute: fetchData,
  } = useApiRequest(getCanvases);
  const { isLoading: isLoadingCreate, execute: createNewCanvas } =
    useApiRequest(createCanvas);

  useEffect(() => {
    fetchData({ title_like: searchInput });
  }, [searchInput, fetchData]);

  const handleCreateCanvas = async () => {
    createCanvas(null, {
      onSuccess: () => {
        fetchData({ title_like: searchInput });
      },
      onError: (error) => alert(error.message),
    });
  };

  const handleDeleteItem = async (id) => {
    if (confirm('삭제 하시겠습니까 ?') === false) {
      return;
    }
    try {
      await deleteCanvas(id);
      fetchData({ title_like: searchInput });
    } catch (error) {
      alert(error.message);
    }
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
      {isError && (
        <Error
          message={isError.message}
          onRetry={() => fetchData({ title_like: searchInput })}
        />
      )}
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
