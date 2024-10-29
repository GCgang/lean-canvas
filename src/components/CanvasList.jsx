import CanvasItem from './CanvasItem';

export default function CanvasList({
  filteredData,
  searchText,
  isGridView,
  onDeleteItem,
}) {
  if (filteredData.length === 0) {
    return (
      <div className='text-center py-8'>
        <p className='text-xl text-gray-600'>
          {searchText ? '검색 결과가 없습니다' : '목록이 없습니다'}
        </p>
      </div>
    );
  }

  return (
    <ul
      className={`grid gap-4 ${
        isGridView ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
      }`}
    >
      {filteredData.map(({ id, title, lastModified, category }) => (
        <li key={id}>
          <CanvasItem
            id={id}
            title={title}
            lastModified={lastModified}
            category={category}
            onDelete={onDeleteItem}
          />
        </li>
      ))}
    </ul>
  );
}
