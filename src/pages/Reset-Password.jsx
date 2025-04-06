import ResetPasswordComponent from "../components/Reset-Password-Component";
import PictureComponent from "../components/Picture-Component";

function ResetPassword() {

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>

            <div className="d-flex w-100 shadow-lg" style={{ margin: "1in" }}>

                <div className="w-25">

                    <ResetPasswordComponent />

                </div>
                
                <div className="w-75">

                    <PictureComponent />

                </div>

            </div>
            
        </div>
    );
}

export default ResetPassword;