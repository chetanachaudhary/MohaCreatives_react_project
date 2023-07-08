
import './App.css';
import Category from './components/Category';
import Decrementratebox from './components/Decrementratebox';

import Home from './pages/Home';

function App() {
  return (
    <>
     <Home/>
     <div className="homeContainer">
      <Category/>
      <Decrementratebox/>
     </div>

    
     </>
  )
}

export default App;
