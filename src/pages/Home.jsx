import { useState } from 'react';
import CanvasList from '../components/CanvasList';
import SearchBar from '../components/SearchBar';
import ViewToggle from '../components/ViewToggle';

export default function Home() {
  const [searchInput, setSearchInput] = useState('');
  const [isGridView, setIsGridView] = useState(true);
  const [dummyData, setDummyData] = useState([
    {
      id: 1,
      title: '친환경 도시 농업 플랫폼',
      lastModified: '2023-06-15',
      category: '농업',
    },
    {
      id: 2,
      title: 'AI 기반 건강 관리 앱',
      lastModified: '2023-06-10',
      category: '헬스케어',
    },
    {
      id: 3,
      title: '온디맨드 물류 서비스',
      lastModified: '2023-06-05',
      category: '물류',
    },
    {
      id: 4,
      title: 'VR 가상 여행 서비스',
      lastModified: '2023-06-01',
      category: '여행',
    },
  ]);
  const handleDeleteItem = (id) => {
    setDummyData(dummyData.filter((item) => item.id !== id));
  };

  const filteredData = dummyData.filter((item) =>
    item.title.toLowerCase().includes(searchInput.toLocaleLowerCase())
  );

  return (
    <main className='md:ml-52 max-w-7xl px-4 py-8 transition-all duration-300'>
      <div className='flex justify-between items-center my-8'>
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
        <ViewToggle isGridView={isGridView} setIsGridView={setIsGridView} />
      </div>
      <section>
        <CanvasList
          filteredData={filteredData}
          searchInput={searchInput}
          isGridView={isGridView}
          onDeleteItem={handleDeleteItem}
        />
      </section>
    </main>
  );
}
