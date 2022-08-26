
import './App.css';
import Navbar from './component/navbar';

import Footer from './component/footer';
import Singup from './router/singup';
import Login from './router/login';






function App() {
  console.log("app")

  return (
    <div className="App">
      
     <Navbar/>
     
   <Singup/>
<Login/>
<Footer/>
    </div>
  );
}

export default App;
