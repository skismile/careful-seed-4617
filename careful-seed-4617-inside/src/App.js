import logo from './logo.svg';
import './App.css';
import { Button } from '@chakra-ui/react';
import Navbar from './component/navbar';
import Home from './router/home';
import Footer from './component/footer';


function App() {
  

  return (
    <div className="App">
     <Navbar/>
    <Home/>
<Footer/>
    </div>
  );
}

export default App;
