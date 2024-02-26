import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import {addUser,removeUser} from "../Utils/userSlice"
import { useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.

      })
      .catch((error) => {
        // An error happened.
      });
  };
  // header is present in all pages
  // When the header loads onAuthStateChanged will be called in the initial render 
  // Since user is not logged in that case "Log Out in onAuthStateChanged" will br printed 
  // When we log in using the firebase api the authentication state changes
  // onAuthStateChanged(auth, (user) => { ... });: This function sets up a listener for authentication state changes.
  // So when the state changes the call back function is triggered

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user",user)
      if (user) {
        console.log("Log in onAuthStateChanged")
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName,photoURL} = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL:photoURL
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        console.log("Log Out in onAuthStateChanged")
        dispatch(removeUser());
        navigate("/ ")
      }
    });
  }, []);

  return (
    <div className="px-8 py-2 bg-gradient-to-b from-black flex justify-between items-center">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix_logo"
      />
      {/* When we login or sign up user's data get stored in the store  */}
      {user && (
        <div className="flex items-center">
          <div className="w-12 mr-2">
            <img
            className="rounded-full"
            src={user?.photoURL}
            alt="user_profile_pic"
          />
          </div>
          <button
            className="bg-[rgb(193,17,25)] px-4 py-2 h-1/4 text-white rounded-lg"
            onClick={logOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
