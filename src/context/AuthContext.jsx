import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

// manage login state across app
export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // useEffect hook
  useEffect(() => {
    const userInfo = localStorage.getItem("isLoggedIn");

    if (userInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  // function to handle user login
  const loginHandler = (email, Password) => {
    // store the login state in localStorage
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };
  // function to handle user logout
  const logoutHandler = () => {
    // remove the login state from localStorage
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }} 
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
