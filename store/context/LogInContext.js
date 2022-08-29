import { createContext, useEffect, useState } from "react";
import { setItem, getItem, removeItem } from "../../utils/asyncStorage";

export const LogInContext = createContext({
  id: "",
  isAutenticated: false,
  authenticate: (id) => {},
  logout: () => {},
});

function LogInContextProvider({ children }) {
  const [id, setId] = useState();
  const [isAutenticated, setIsAutenticated] = useState(false);

  useEffect(() => {
    async function getItembykey(key) {
      const value = await getItem(key);
      if (value) {
        setId(value);
        setIsAutenticated(true);
      }
    }
    getItembykey("token");
  }, []);

  async function authenticate(idLogged) {
    setId(idLogged);
    setIsAutenticated(true);
    await setItem("token", idLogged);
  }
  async function logout() {
    setId(null);
    setIsAutenticated(false);
    await removeItem("token");
  }

  const value = {
    id: id,
    isAutenticated: isAutenticated,
    authenticate,
    logout,
  };

  return (
    <LogInContext.Provider value={value}>{children}</LogInContext.Provider>
  );
}

export default LogInContextProvider;
