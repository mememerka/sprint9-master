import React from 'react';
import { createContext, useState } from "react";
import app from './firebase';

export default ({children}) => {

    const [selectedVideo,setSelectedVideo] = useState('');
    const [currentUser, setCurrentUser] = useState(); 

    return (            
            <AppContext.Provider value={[selectedVideo,setSelectedVideo],[currentUser, setCurrentUser]}>
                {children}
            </AppContext.Provider>  
    );
};

export const AppContext = createContext();