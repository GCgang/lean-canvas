import { useState } from 'react';
import CanvasList from '../components/CanvasList';
import SearchBar from '../components/SearchBar';
import ViewToggle from '../components/ViewToggle';
import { createCanvas, deleteCanvas, getCanvases } from '../api/canvas';
import Loading from '../components/Loading';
import Error from '../components/Error';
import AddCanvasButton from '../components/AddCanvasButton';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import CategoryFilter from '../components/CategoryFilter';

export default function Home() {
  const [filter, setFilter] = useState({
    searchText: undefined,
    category: undefined,
  });

  const [isGridView, setIsGridView] = useState(true);

  const handleFilter = (key, value) => {
    setFilter({
      ...filter,
      [key]: value,
    });
  };

  const queryClient = useQueryClient();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['canvases', filter.searchText, filter.category],
    queryFn: () => {
      return getCanvases({
        title_like: filter.searchText,
        category: filter.category,
      });
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  const { mutate: createNewCanvas, isLoading: isLoadingCreate } = useMutation({
    mutationFn: createCanvas,
    onSuccess: () => queryClient.invalidateQueries(['canvases']),
    onError: (error) => alert(error.message),
  });

  const { mutate: deleteCanvasMutation } = useMutation({
    mutationFn: deleteCanvas,
    onSuccess: () => queryClient.invalidateQueries(['canvases']),
    onError: (error) => alert(error.message),
  });

  const handleCreateCanvas = async () => {
    createNewCanvas();
  };

  const handleDeleteItem = async (id) => {
    deleteCanvasMutation(id);
  };

  return (
    <>
      <div className='flex items-center justify-between mb-8'>
        <SearchBar
          searchText={filter.searchText}
          onSearch={(val) => handleFilter('searchText', val)}
        />
        <CategoryFilter
          category={filter.category}
          onChange={(val) => handleFilter('category', val)}
        ></CategoryFilter>
        <ViewToggle isGridView={isGridView} setIsGridView={setIsGridView} />
      </div>
      <div className='flex justify-end mb-4'>
        <AddCanvasButton
          isLoadingCreate={isLoadingCreate}
          onCreateCanvas={handleCreateCanvas}
        />
      </div>
      {isLoading && <Loading />}
      {isError && <Error message={isError.message} onRetry={refetch} />}
      {!isLoading && !isError && (
        <section>
          <CanvasList
            filteredData={data}
            searchText={filter.searchText}
            isGridView={isGridView}
            onDeleteItem={handleDeleteItem}
          />
        </section>
      )}
    </>
  );
}
