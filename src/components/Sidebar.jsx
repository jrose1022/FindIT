
function Sidebar(){
  return (

    <div className="d-flex text-center flex-column p-3 bg-dark" style={{ width: '250px', height: '100vh' }}>

      <h3 className=" fw-bold mb-1 text-light">FindIT!</h3>

      <hr className="w-100  my-3" style={{ color:'white' ,borderWidth: '2px' }} />

      <ul className="nav nav-pills flex-column mb-auto mt-0">

        <li className="nav-item">

          <button type="button" class="btn btn-dark w-100">

            <a href="#" className="nav-link text-white">

              Access Control

            </a>

          </button>

        </li>

        <li>

          <button type="button" class="btn btn-dark w-100">

            <a href="#" className="nav-link text-light">

              Lost Items

            </a>

          </button>

        </li>

        <li>

          <button type="button" class="btn btn-dark w-100">

              <a href="#" className="nav-link text-white">

                Messages

              </a>

            </button>

        </li>
       
      
      </ul>

      <hr className="w-100  my-3" style={{ color:'white' ,borderWidth: '2px' }} />

      <ul className="nav nav-pills flex-column">
        
        <li>

          <button type="button" class="btn btn-dark w-100">

              <a href="" className="nav-link text-white">

                Sign-out

              </a>

            </button>
            
        </li>

      </ul>

    </div>
  );
};

export default Sidebar;
