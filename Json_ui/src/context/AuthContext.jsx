import { createContext, useState } from "react";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // giris yapan cikis yapani kontrol etmek icin

  function getUser() {
    localStorage.getItem("user");
  }

  function userLogin(user) {
    localStorage.setItem("user", user);
    setUser(user);
  }

  function userLogout() {
    localStorage.removeItem("user");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, getUser, userLogin, userLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
