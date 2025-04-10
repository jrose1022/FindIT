import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';



function SignUpComponent() {

  const [termsAccepted, setTermsAccepted] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();


    if (!termsAccepted) {

      alert("You must accept the terms and conditions to create an account.");

      return;

    }

    alert("Account created successfully!");

  };


  const handleCheckboxChange = (e) => {

    setTermsAccepted(e.target.checked);

  };

  const handleLoginClick = (e) => {

  e.preventDefault();

  navigate('/');

};


  return (

    <div className="card p-5 rounded-0 rounded-start h-100">

      <h2 className="text-center fw-bold display-6 mb-4">Create Account</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-2">

          <label className="form-label fw-bold">Email</label>

          <input type="email" className="form-control" placeholder="Email" required />

        </div>

        <div className="mb-2">

          <label className="form-label fw-bold">Username</label>

          <input type="text" className="form-control" placeholder="Username" required />

        </div>

        <div className="mb-2">

          <label className="form-label fw-bold">Password</label>

          <div className="input-group mb-2">

            <input type="password" className="form-control" placeholder="Enter your Password" required />

            <span className="input-group-text" role="button">

              <Eye />

            </span>

          </div>

          <label className="form-label fw-bold">Confirm Password</label>

          <div className="input-group">

            <input type="password" className="form-control" placeholder="Confirm your Password" required />

            <span className="input-group-text" role="button">

              <Eye />

            </span>

          </div>

        </div>

        <div className="form-check mb-4">

          <input

            type="checkbox"

            className="form-check-input"

            id="termsAndConditions"

            checked={termsAccepted}

            onChange={handleCheckboxChange}

          />
          <label className="form-check-label" htmlFor="termsAndConditions">

            I accept the <a href="#" onClick={showTerms} className='text-dark'>Terms and Conditions</a>

          </label>

        </div>

        <button type="submit" className="btn btn-dark w-100">Create an account</button>

        <div className="text-center mt-4">

          <p>

            Already have an account?

            <a href="#" onClick={handleLoginClick} className="text-dark">Login</a>

          </p>

        </div>

      </form>

    </div>

  );
}

function showTerms(e) {
  
  e.preventDefault();

  const termsMessage = `By accessing or using our website, you agree to the following Terms and Agreement. If you do not agree, please do not use the website.

    User Responsibilities:
    - You must provide accurate and truthful information when posting.
    - You are responsible for verifying ownership before returning any item.
    - You must not post illegal, misleading, or inappropriate content.
    - You must not impersonate others or provide false contact information.

    Item Handling:
    - We do not physically hold or handle any items.
    - We do not guarantee the return of any lost item.
    - All exchanges are done at your own discretion and risk.

    Privacy:
    - Your contact details may be shared only as necessary to facilitate the return of lost items. We do not sell your information to third parties.

    Liability Disclaimer:
    - We are not liable for any damages, losses, or disputes arising from interactions or transactions initiated through our website.

    Termination:
    - We may remove any content or ban users at our discretion for violating these terms.`;

  alert(termsMessage);
}

export default SignUpComponent;
