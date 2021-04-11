import './App.css';

import Routes from "./Routes/Routes";
import { useRoutes } from 'hookrouter';
import  Error404  from './Components/ErrorPages/Error404';
import AppFooter from './Components/AppFooter';
import AppHeader from './Components/AppHeader';


function App() {

  const routeResult = useRoutes(Routes);

  return( 
  <div className="App">
    <AppHeader />
      <div>
        { routeResult || <Error404 /> }
      </div>
    <AppFooter />
  </div>
  );
}

export default App;
