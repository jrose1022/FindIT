import { Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function ResetPasswordComponent() {

  const navigate = useNavigate();

  const handleSignUpClick = (e) => {

    e.preventDefault();

    navigate('/SignUp');

  };

  const handleResetPasswordClick = (e) => {

    e.preventDefault();

    navigate('/ResetPassword');

  };


  return (

    <div className="card p-5 rounded-0 rounded-start h-100">

      <div>

        <h2 className="text-center fw-bold display-6 mb-4">Reset Password</h2>

      </div>

      <form>
          
        <div className="mb-2">

          <label className="form-label fw-bold">Email</label>

          <input type="email" className="form-control" placeholder="Email" />

        </div>


        <div className="mb-2">

          <label className="form-label fw-bold"> New Password</label>

          <div className="input-group mb-2">

            <input type="password" className="form-control" placeholder="Create New Password" />

            <span className="input-group-text" role="button">

              <Eye />

            </span>

          </div>
         

          <label className="form-label fw-bold">Confirm Password</label>

          <div className="input-group">

            <input type="password" className="form-control" placeholder="Confirm your Password" />

            <span className="input-group-text" role="button">

             <Eye />

            </span>

          </div>
      

          <a href="#" onClick={handleResetPasswordClick} className="text-dark d-block mt-3 mb-4">Forgot Password?</a>

        </div>

        <button type="submit" className="btn btn-dark w-100" >Save</button>

        <div className="text-center mt-4">

          <p>
            
            Don't have an account?

            <a href="#" onClick={handleSignUpClick} className="text-dark">Sign Up</a>

          </p>

        </div>

      </form>

    </div>
    
  );
}



export default ResetPasswordComponent;