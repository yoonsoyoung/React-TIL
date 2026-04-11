import Router from "./components/Router";
import { Layout } from "./components/Layout";

import { useState } from 'react';

import { getAuth } from "firebase/auth";
import { app } from "firebaseApp";

function App() {
  const auth = getAuth(app);
  const [isAuthenticated, setAuthenticated] = useState<boolean>(!!auth?.currentUser);
  console.log(isAuthenticated);

  return(
      <Layout>
        <Router />
      </Layout>
  )
}

export default App;
