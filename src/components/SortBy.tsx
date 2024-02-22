function SortBy ({ onSortByChange }){
    const handleSortByChange = (event) => {
        const selectedSortBy = event.target.value;
        onSortByChange(selectedSortBy);
    }
    return (
        <div className="sort-by">
            <select className="selection" onChange={handleSortByChange}>
              <option value=" ">Order:</option>
              <option value="release_date.asc">ASC Release Date</option>
              <option value="release_date.desc">DSC Release Date</option>
              <option value="vote_average.desc">Most Voted</option>
            </select>
        </div>
    )
}

export default SortBy