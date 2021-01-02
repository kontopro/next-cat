import { createContext, useState, useContext } from 'react';

const AithshStateContext = createContext();
const AithshStateProvider = AithshStateContext.Provider;

export const AithshProvider = ({ children }) => {
  
    const [aithsh, setAithsh] = useState([])

    function handleAithsh(x,y){
      y=='0'?
        removeAithsh(x):
          aithsh.findIndex(({aid})=>aid===x)<0?
            addAithsh(x,y):
              updateAithsh(x,y)
    }

    function updateAithsh(x,y){
      const oldait = aithsh.filter(({aid})=>aid !== x)
      setAithsh([...oldait,{aid:x,pos:y}])
    }

    function addAithsh(x,y){ 
      setAithsh([...aithsh, {aid:x,pos:y}])
    }

    function removeAithsh(x){
      const oldait = aithsh.filter(({aid})=> aid !== x)
      setAithsh([...oldait])
    }

  return (
    <AithshStateProvider value={{aithsh, handleAithsh}}>
        {children}
    </AithshStateProvider>
  )
}

export const useAithsh = () => useContext(AithshStateContext)