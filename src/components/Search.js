const Search = ({searchHandler, searchValue,setSearchValue}) => {
    return ( 
        <form className="search-box" onSubmit={searchHandler}>
            <input type="text" className="search" placeholder="Search Twitter" value={searchValue} onChange = {(e) => setSearchValue(e.target.value)}/>
        </form>
     );
}
 
export default Search;