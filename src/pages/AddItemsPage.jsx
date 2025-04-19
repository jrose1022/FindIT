import Sidebar from "../components/Sidebar";

function AddItemsPage(){

    return(
        <div className="d-flex">
            <Sidebar/>
            <div className="m-5  w-75 " >
                <div>
                    <SearchBar/>
                </div>
                <TableComponent/>
            </div>
        </div>
    )
}

export default AddItemsPage;