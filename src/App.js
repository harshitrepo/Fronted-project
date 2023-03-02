import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import ProductCard from './ProductCard';
import CartPage from './Components/CartPage';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <h1></h1> */}
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<ProductCard/>}/>
        <Route path='/cart' element={<CartPage/>}/>

        
      </Routes>
      
    </div>
    </BrowserRouter>  
  );
}

export default App;
