import './App.css';
import AppFooter from './Components/AppFooter';
import AppHeader from './Components/AppHeader';
import Home from './Components/MiddleSection/Home';
/*import Login from './Components/MiddleSection/Login';*/

function App() {
  return (
    <div className="App">
    <AppHeader />
      <Home />
    <AppFooter />
    </div>
  );
}

export default App;
