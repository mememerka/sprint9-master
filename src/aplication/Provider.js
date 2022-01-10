import React from 'react';
import { createContext, useState } from "react";

export default ({children }) =>{
    const [selectedVideo,setSelectedVideo] = useState('');
    return (            
            <AppContext.Provider value={[selectedVideo,setSelectedVideo]}>
                {children}
            </AppContext.Provider>  
    );
}

export const AppContext = createContext();