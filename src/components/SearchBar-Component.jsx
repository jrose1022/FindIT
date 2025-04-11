

function SearchBar(){

    return(
        <>
            <form class="form-inline d-flex">
                <input class="form-control w-25"  type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-dark mx-2" type="submit">Search</button>
             </form>
        </>
    );
}

export default SearchBar;
