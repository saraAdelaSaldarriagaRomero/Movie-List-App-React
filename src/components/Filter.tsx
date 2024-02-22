
function Filter ({ onGenreChange  }) {
  const handleGenreChange = (event) => {
    const selectedGenre = event.target.value;
    onGenreChange(selectedGenre);
  };
  return (
      <div className="filter-by-gender">
          <select className="selection" onChange={handleGenreChange}>
            <option value=" ">Filter</option>
            <option value="28">Action</option>
            <option value="16">Animated</option>
            <option value="12">Adventure</option>
            <option value="53">Suspense</option>
          </select>
      </div>
  )
}

export default Filter


