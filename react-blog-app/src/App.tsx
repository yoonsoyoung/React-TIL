import { useEffect, useState} from "react";
import {app} from "./firebaseApp";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';

import Router from "./components/Router";
import Loader from "./components/Loader";

function App() {
    const auth = getAuth(app);

    // auth를 체크하기 전(initialize 전)에는 loader를 띄워주는 용도
    const [init, setInit] = useState<boolean>(false);

    // auth의 currentUser가 있으면 authenticated 변경
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!auth?.currentUser);

    useEffect(() => {
       onAuthStateChanged(auth, (user) => {
           if(user) {
               setIsAuthenticated(true);
           } else {
               setIsAuthenticated(false);
           }
           setInit(true);
       })
    }, [auth]); // 처음에만 변경됨
    return (
        <>
            <ToastContainer />
            {init ? <Router isAuthenticated={isAuthenticated}/> : <Loader />}
        </>
    );
}

export default App;
