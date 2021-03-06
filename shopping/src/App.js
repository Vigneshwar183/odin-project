import Header from './Components/header'
import Homepage from './Components/homepage';
import Footer from './Components/footer';
import Dress from './Components/dress'
import Accessories from './Components/accessories'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Product from './Components/product'



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Homepage></Homepage>}></Route>
          <Route path='/dress' element={<Dress></Dress>}></Route>
          <Route path='/accessories' element={<Accessories></Accessories>}></Route>
          <Route path='/product/:id' element={<Product></Product>}></Route>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
