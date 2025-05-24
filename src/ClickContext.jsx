import { createContext, useState, useContext, useEffect } from 'react';

const ClickContext = createContext();

export const ClickProvider = ({ children }) => {

  const [clicks, setClicks] = useState(() => {
    const savedClicks = localStorage.getItem('clicks');
    return savedClicks !== null ? JSON.parse(savedClicks) : 0;
  });

  useEffect(() => {
    localStorage.setItem('clicks', JSON.stringify(clicks));
  }, [clicks]);

  return (
    <ClickContext.Provider value={{ clicks, setClicks }}>
      {children}
    </ClickContext.Provider>
  );
};

export const useClick = () => useContext(ClickContext);
