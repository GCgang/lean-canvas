export default function CategoryFilter({ category, onChange }) {
  const categories = ['신규', '헬스케어', '물류', '여행'];

  const handleChange = (e) => {
    const val = e.target.value;
    onChange(val === 'all' ? undefined : val);
  };
  return (
    <select value={category} onChange={handleChange}>
      <option value={'all'}>전체</option>
      {categories.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
}
