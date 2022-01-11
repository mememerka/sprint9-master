import React from 'react';
import { createContext, useState } from "react";

export default ({children }) =>{

    const [selectedVideo,setSelectedVideo] = useState('');
    const [loggedIn, setLoggedIn] = useState(false)

    return (            
            <AppContext.Provider value={[selectedVideo,setSelectedVideo],[loggedIn, setLoggedIn]}>
                {children}
            </AppContext.Provider>  
    );
}

export const AppContext = createContext();