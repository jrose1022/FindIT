import Sidebar from "../components/Sidebar";
import AddItemsComponent from "../components/Add-Items-Component";

function AccessControlPage(){

    return(
        
        
        <div className="d-flex">
            <Sidebar/>
            <div className="m-5  w-75 " >
                
                <AddItemsComponent/>
            </div>
        </div>
          
        
    );

}

export default AccessControlPage;