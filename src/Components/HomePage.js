import Home from './Home';
import { SessionProvider } from './Contexts';

function HomePage(){

    return (
      <SessionProvider>
        <div>
          <Home />
        </div>
      </SessionProvider>
    );
}

export default HomePage;