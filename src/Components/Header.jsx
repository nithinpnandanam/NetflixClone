import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import {addUser,removeUser} from "../Utils/userSlice"
import { useEffect } from "react";
import { NETFLIX_LOGO } from "../Utils/constants";
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


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
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
    return ()=>unSubscribe();
    // In the above line we are unsubscribing since onAuthStateChanged is an event listener
  }, []);

  return (
    <div className="px-8 py-2 bg-gradient-to-b from-black flex justify-between items-center">
      <img
        className="w-44"
        src={NETFLIX_LOGO}
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
