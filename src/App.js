import './App.css';
// import { useState } from "react"
import Routes from "./Routes/Routes";
import { useRoutes } from 'hookrouter';
import  Error404  from './Components/ErrorPages/Error404';
import AppFooter from './Components/AppFooter';
import AppHeader from './Components/AppHeader';
import { SessionProvider } from './Components/Contexts';

function App() {

  const routeResult = useRoutes(Routes);

  return( 
  <div className="App">
    <SessionProvider>
      <AppHeader />
        <div>
          { routeResult || <Error404 /> }
        </div>
      <AppFooter />
      </SessionProvider>
  </div>
  );
}

export default App;
