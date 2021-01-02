import { createContext, useState, useContext } from 'react';

const AithshStateContext = createContext();
const AithshStateProvider = AithshStateContext.Provider;

export const AithshProvider = ({ children }) => {
  
    const [aithsh, setAithsh] = useState([])

    function addAithsh(x,y){ 
      !aithsh.find(({aid})=>aid===x)?setAithsh([...aithsh, {aid:x,pos:y}]):''
    }


  return (
    <AithshStateProvider value={{aithsh, addAithsh}}>
        {children}
    </AithshStateProvider>
  )
}

export const useAithsh = () => useContext(AithshStateContext)