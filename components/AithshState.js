import { createContext, useState, useContext } from 'react';

const AithshStateContext = createContext();
const AithshStateProvider = AithshStateContext.Provider;

export const AithshProvider = ({ children }) => {
  
    const [aithsh, setAithsh] = useState(1)

  return (
    <AithshStateProvider value={aithsh}>
        {children}
    </AithshStateProvider>
  )
}

export const useAithsh = () => useContext(AithshStateContext)