import React from 'react'
import ReactDOM from 'react-dom'
import { createContext, useState } from "react";

export default ({children }) =>{
    const [selectedVideo,setSelectedVideo] = useState('');
    const [email, setEmail] =  useState('');
    const [password, setPassword] = useState('');
    return (            
            <AppContext.Provider value={[[selectedVideo,setSelectedVideo],[email,setEmail],[password,setPassword]]}>
                {children}
            </AppContext.Provider>  
    );
}

export const AppContext = createContext();