import { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

function AppContainer({ children }) {
  const [state, setState] = useLocalStorage("config");
  useEffect(() => {
    if (!state) {
      setState({ ...state, as: new Date() });
    }
  }, [state, setState]);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContainer;
