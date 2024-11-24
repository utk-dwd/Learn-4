import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';

export const userContext = createContext();

const Context = (props) => {
  const [user, setusers] = useState([
    {id: 0, username: "John Doe", city: "USA"},
    {id: 1, username: "Jane Smith", city: "UK"},
    {id: 2, username: "Alice Johnson", city: "Canada"},
  ])

  // console.log(props);
  return <userContext.Provider value={{user, setusers}}>
    {props.children}
  </userContext.Provider>
};

export default Context; 