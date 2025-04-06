import LoginComponent from "../components/Login-Component";
import PictureComponent from "../components/Picture-Component";


function Login() {

    return (

        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>

            <div className="d-flex w-100 shadow-lg" style={{ margin: "0 1in" }}>

                <div className="w-25">

                    <LoginComponent />

                </div>
                
                <div className="w-75">

                    <PictureComponent />

                </div>

            </div>
            
        </div>
    );
}

export default Login;