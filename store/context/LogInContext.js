import { createContext, useEffect, useState } from "react";
import { setItem, getItem } from "../../utils/asyncStorage";

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

  async function authenticate(id) {
    setId(id);
    setIsAutenticated(true);
    await setItem("token", id);
  }
  function logout() {
    setId(null);
    setIsAutenticated(false);
  }

  const value = {
    id,
    isAutenticated: isAutenticated,
    authenticate,
    logout,
  };

  return (
    <LogInContext.Provider value={value}>{children}</LogInContext.Provider>
  );
}

export default LogInContextProvider;
