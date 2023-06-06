import React, { useEffect, useState } from "react";
import "../CSS/signin.css";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sessionUser, setSessionUser] = useState("");
  const navigate = useNavigate();

  const handleCallbackResponse = (response) => {
    setSessionUser(jwt_decode(response.credential));
    sessionStorage.setItem(
      "user",
      JSON.stringify(jwt_decode(response.credential))
    );
  };
  // useEffect(() => {
  //   /* global google */
  //   google.accounts.id.initialize({
  //     client_id:
  //       "136067645138-rdbjjrtp1de3ij9hjevjsdnm4d8v8nv6.apps.googleusercontent.com",
  //     callback: handleCallbackResponse,
  //   });
  //   google.accounts.id.renderButton(document.getElementById("signInBtn"), {
  //     theme: "outline",
  //     size: "large",
  //   });
  //   google.accounts.id.prompt();
  // }, []);

  const handleSubmit = () => {
    if (email === "keshav@gmail.com" && password === "keshav") {
      navigate("/dashboard");
      setSessionUser({ email: email });
      sessionStorage.setItem("user", JSON.stringify(sessionUser));
    }
  };
  useEffect(() => {
    if (Object.keys(sessionUser).length != 0) {
      navigate("/dashboard");
    }
  }, [sessionUser]);


  return (
    <>
      <div className="row">
        <div className="leftContainer">Board.</div>
        <div className="rightContainer">
          <div className="rightInnerContainer">
            <div className="signInTitle">Sign In</div>
            <div className="signInSubTitle">Sign in to your account</div>
            <div className="authButtonContainer">
              <div id="signInBtn">

              <div className="btnInnerContainer">
                  <img
                    src="/assets/AppleIcon.svg"
                    alt="appleicon"
                    className="appleIcon"
                  />
                  Sign in with Apple
                </div>

              </div>
              <button className="btn">
                <div className="btnInnerContainer">
                  <img
                    src="/assets/AppleIcon.svg"
                    alt="appleicon"
                    className="appleIcon"
                  />
                  Sign in with Apple
                </div>
              </button>
            </div>
            <form className="signInFormContainer">
              <div className="label">Email address</div>
              <input
                type="email"
                placeholder="john@example.com"
                className="input"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="label">Password</div>
              <input
                type="password"
                placeholder="password"
                className="input"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="forgotPassword">Forgot password?</div>
              <button
                type="submit"
                className="submitBtn"
                onClick={handleSubmit}
              >
                Sign In
              </button>
            </form>
            <div className="title">
              Don't have an account?{" "}
              <span style={{ color: "#346BD4", cursor: "pointer" }}>
                Register here
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;




// import React from 'react'
// import './Signin.css'
// import { FcGoogle } from "react-icons/fc"
// import { AiOutlineApple } from "react-icons/ai"
// import { Link } from 'react-router-dom'

// function Signin() {
//   return (
//     <div className='container'>
//         <div className='box'>
            
//                 <div className='left'> 
//                     <div className='boards'>Board.</div> 
//                 </div>
//                 <div className='right'>
//                     <div className='title'>Sign In</div>
//                     <div className='acc'> Sign in to your account</div>
//                     <div className='btns'>
//                         <div className='btn-left'>
//                             <button className='option'><FcGoogle size={18} />Sign in with Google</button>
//                         </div>
//                         <div className='btn-right'>
//                             <button className='option'><AiOutlineApple size={18} style={{color: "#999999"}}/>Sign in with Apple</button>
//                         </div>
//                     </div>
//                     <div className='form'>
//                         <div className='card'>
//                             <label>Email address</label> 
//                             <input type='email' required></input>
//                             <label>Password</label>
//                             <input type='password' required></input>
//                             <div className='forgot'><Link to ="/p" style={{ textDecoration: 'none' }}>Forgot password?</Link></div>
//                             <Link to="/db" ><button>Sign in</button></Link>
//                             <div className='dont'>Don't have an account? 
//                                 <Link to="/h"  style={{ textDecoration: 'none' }}> Register here</Link>
//                             </div>
//                         </div>
                        
//                     </div>
                    
//                 </div>
           
//     </div>
//     </div>
//   )
// }

// export default Signin