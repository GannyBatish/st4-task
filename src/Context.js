import React, { createContext, useContext, useEffect, useState } from 'react'

const Global=createContext();
const Context = ({children}) => {
  const [users,setUsers]=useState(null);
  useEffect(()=>{
    console.log(users);
  },[users])
  const addUser=(newUser)=>{
    if(users===null)
    {
      setUsers([newUser]);
    }
    else{
      setUsers(curr=> [...curr,newUser])
    }
  }
  return (
    <Global.Provider value={{
      users,
      addUser
    }}>
      {children}
    </Global.Provider>
  )
}
export default Context
export const GlobalContext=()=>{
  return useContext(Global);
}