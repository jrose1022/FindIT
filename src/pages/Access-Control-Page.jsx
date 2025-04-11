import Sidebar from "../components/Sidebar";
import TableComponent from "../components/Table-Component";
import SearchBar from "../components/SearchBar-Component";

function AccessControlPage(){

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
          
        
    );

}

export default AccessControlPage;