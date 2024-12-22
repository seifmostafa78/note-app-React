import { MdSearch } from "react-icons/md";


const Search = ({handleSearchText}) => {


    return (
        <div className="search-bar">
            <MdSearch size="1.3em"/>
            <input onChange={(event) => handleSearchText(event.target.value)} type="text" placeholder="type to search.." />
        </div>
    );
}

export default Search;