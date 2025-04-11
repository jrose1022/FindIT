import { Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function LoginComponent() {
  
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

        <h1 className="text-center display-5">Welcome to</h1>

        <h2 className="text-center fw-bold display-3">FindIT!</h2>

      </div>

      <form>
        <div className="mb-4">

          <label className="form-label fw-bold">Username</label>

          <input type="text" className="form-control" placeholder="Enter your Username" required/>

        </div>

        <div className="mb-4">

          <label className="form-label fw-bold">Password</label>

          <div className="input-group">

            <input type="password" className="form-control" placeholder="Enter your Password" required />

            <span className="input-group-text" role="button">

              <Eye />

            </span>

          </div>

          <a href="#"  onClick={handleResetPasswordClick} className="text-dark d-block mt-2">Forgot Password?</a>

        </div>

        <button type="submit" className="btn btn-dark w-100">LOGIN</button>

        <div className="text-center mt-4">

          <p>

            Don't have an account? 

            <a href='#' onClick={handleSignUpClick} className="m-2 text-dark" >

              Sign Up

            </a>

          </p>

        </div>
        
      </form>

    </div>
  );
}

export default LoginComponent;
