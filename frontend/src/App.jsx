import React, { useEffect } from "react";
import { Route, Routes, } from "react-router-dom";

import PrivacyPolicy from "./Components/PrivacyPolicy";


function App() {


    return (
        <>
            <Routes>

             
                    <Route path="/" element={<PrivacyPolicy />} />
             

              
            </Routes>
    
        </>
    );
}

export default App;
