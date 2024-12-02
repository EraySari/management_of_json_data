import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // giris yapan cikis yapani kontrol etmek icin

  function userIsLogin() {
    return localStorage.getItem("user") !== null;
  }

  function getUser() {
    return localStorage.getItem("user");
  }

  function userLocal(user) {
    console.log(user);
    localStorage.setItem("user", user);
    setUser(user);
  }

  function userLogout() {
    localStorage.removeItem("user");
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ user, userIsLogin, getUser, userLocal, userLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
