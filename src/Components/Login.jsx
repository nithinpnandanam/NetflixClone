import { useRef, useState } from "react";
import Header from "./Header";
import ValidateEmailPass from "../Utils/Validate";

const Login = () => {
  const [isSignInForm,setisSignInForm]= useState(true)
  const [errorMessage,setErrorMessage] = useState(null)
  const email = useRef(null)
  const password = useRef(null)
  
 
  const backgroundStyle = {
    backgroundImage: 'url("https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_large.jpg")',
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat', 
  };

  const toggleSignInSignUp = () => {
    setisSignInForm(!isSignInForm)
  }
  const handleLogInSignUp = () => {
     let message  = ValidateEmailPass(email.current.value,password.current.value)
     setErrorMessage(message)
  }

  return (
    <div className="h-screen overflow-hidden" style={backgroundStyle}>
      <Header />
      <div className="flex flex-col p-16 mt-12 bg-black opacity-80 w-3/12 h-[660px] m-auto">
        <h1 className="text-white text-3xl font-black mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <form  onSubmit={(e)=>e.preventDefault()} className="flex flex-col items-center ">
          { !isSignInForm && 
            <input
              type="text"
              placeholder="Full Name"
              className="px-4 py-4 w-full mb-4 bg-gray-600 rounded-md text-white"
            />
          }
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="px-4 py-4 w-full mb-4 bg-gray-600 rounded-md text-white"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="px-4 py-4  w-full mb-4 bg-gray-600 rounded-md text-white"
          />
          <p className="text-red-700 text-lg pb-3 font-black">{errorMessage!=null?errorMessage:''}</p>
          <button className="bg-[rgb(193,17,25)] px-4 py-4 w-full mb-4 text-white rounded-lg" onClick={handleLogInSignUp}>
          {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white">
            {isSignInForm?"New to Netflix ? ":"Already a user ? "}
            <span className="cursor-pointer" onClick={toggleSignInSignUp}>
              {isSignInForm?"Sign up now.":"Sign in now." }
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
