import React, { createContext, useState } from 'react'
import ComponentB from './ComponentB'

export const UserContext = createContext();

function ComponentA() {

    const [user, setUser] = useState("Andrew")
    
  return (
    <div className='box'>
        <h1>ComponentA</h1>
        <h2>{`Hello ${user}`}</h2>
        <UserContext.Provider value = {user}>
            <ComponentB/>
        </UserContext.Provider>
    </div>
  )
}

export default ComponentA


/* 

useContext() =  React Hook that allows you to share values
                between multiple levels of components
                without passing props through each level

PROVIDER COMPONENT

1. import {createContext } from 'react';
2. export const MyContext = createContext();
3. <MyContext.Proivder value = {value}>
        <Child />
   </MyContext.Provider>

CONSUMER COMPONENTS

1. import React, {useContext} from 'react';
2. import {MyContext} from './CompnentA';
3. const value = useContext(MyContext);

*/
