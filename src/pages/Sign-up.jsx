import SignUpComponent from "../components/SignUp-Component";
import PictureComponent from "../components/Picture-Component";

function SignUp(){

    return(
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="d-flex w-100 shadow-lg" style={{ margin: "1in" }}>
            <div className="w-25">
                <SignUpComponent />
            </div>
            
            <div className="w-75">
                <PictureComponent />
            </div>
        </div>
    </div>
    );

}

export default SignUp;