
import './App.css';
import Card from './components/Card';
import Category from './components/Category';
import Communication from './components/Communication';
import Decrementratebox from './components/Decrementratebox';

import Home from './pages/Home';

function App() {
  return (
    <>
     <Home/>
     <div className="homeContainer">
      <Category/>
      <Decrementratebox/>
      <Card/>
      <Communication/>
     </div>

    
     </>
  )
}

export default App;
