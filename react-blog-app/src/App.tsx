import { useState} from "react";
import {app} from "./firebaseApp";
import { getAuth } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';

import Router from "./components/Router";

function App() {
    const auth = getAuth(app);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!auth?.currentUser);
    return (
        <>
            <ToastContainer />
            <Router isAuthenticated={isAuthenticated}/>
        </>
    );
}

export default App;
