import Sidebar from "../components/Sidebar";
import AddItemsComponent from "../components/Add-Items-Component";
import ItemTableComponent from "../components/ItemTableComponent";

function LostItemPage(){

    return(
        
        
        <div className="d-flex">

            <Sidebar/>
            <div className="m-5  w-75 " >
                
           
                <ItemTableComponent/>
            </div>
        </div>
          
        
    );

}

export default LostItemPage;