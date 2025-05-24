import { createContext, useContext, useState, useEffect } from "react";

const UpgradeContext = createContext();


export const UpgradeProvider = ({ children }) => {

    const [countMulti, setCountMulti] = useState(() => {
    const savedMulti = localStorage.getItem('multi');
    return savedMulti !== null ? JSON.parse(savedMulti) : 0;
  });

  useEffect(() => {
    localStorage.setItem('multi', JSON.stringify(countMulti));
  }, [countMulti]);
  return (
    <UpgradeContext.Provider value={{ countMulti, setCountMulti }}>
      {children}
    </UpgradeContext.Provider>
  );
};


export const useCountMulti = () => useContext(UpgradeContext);