import logo from './logo.svg';
import './App.css';
import { MyNav } from './components/MyNav';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Products } from './components/Products';
import { ProductForm } from './components/ProductForm';
import { NotFound } from './components/NotFound';
import Login from './components/Login';
import Register from './components/Register';
import { useState } from 'react';
import Store from './components/Store';
import ShoppingCartProvider from "./context/ShoppingCartContext";
import { Footer } from './components/Footer';
import { Employee } from './components/Employee';

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [Username, setUsername] = useState("");
  let [userCategory, setUserCategory] = useState("");
  let handelLogin = (user, LoggedIn) => {
    setIsLoggedIn(LoggedIn);
    setUsername(user.username);
    setUserCategory(user.client_admin)
  }
  let handelLogout = (LoggedIn) => {
    localStorage.removeItem("shopping-cart")
    window.location.reload();
    setIsLoggedIn(LoggedIn);
  }
  let logInOut = {
    data: " ",
    handler: handelLogout
  }
  isLoggedIn ? logInOut.data = `Welcome, ${Username}` : logInOut.data = "Login";


  return (
    <div>
      <ShoppingCartProvider>
      {
        isLoggedIn ?  <MyNav changable={logInOut} /> : <MyNav changable={logInOut} />
      }
        <Routes>
          <Route path='' element={<Employee/> } />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products/:id/edit' element={<ProductForm />} />
          <Route path='login' element={<Login onLogin={handelLogin} />} />
          <Route path='register' element={<Register />} />
          {
          isLoggedIn && userCategory === "administrator" ? 
          <Route path='store' element={<Products />} />
          : isLoggedIn && userCategory === "client" ?             
            <Route path='store' element={<Store />} /> 
            : <Route path='store' element={<Login onLogin={handelLogin} />} />
          }
          <Route path='logout' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer/>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
