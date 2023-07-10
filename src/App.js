
import './App.css';
import Card from './components/Card';
import Category from './components/Category';
import Communication from './components/Communication';
import Decrementratebox from './components/Decrementratebox';
import Quicktransfer from './components/Quicktransfer';
import Static from './components/Static';
import Upgrade from './components/Upgrade';


import Home from './pages/Home';

function App() {
  return (
    <>
      <Home />
      <div className="homeContainer">
        {/* <Category /> */}
        {/* <Decrementratebox />
        <Card />
        <Communication /> */}
      </div>
      <div className='Static'>
        <Static />
        <Quicktransfer/>
        <Upgrade/>
       
      </div>


    </>
  )
}

export default App;
