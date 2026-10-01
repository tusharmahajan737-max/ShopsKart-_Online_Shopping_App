import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './Styles/App.css'
import Layout from './Components/Layout'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Category from './Pages/Category'
import Cart from './Pages/Cart'
import Register from './Pages/Register'
import Account from './Pages/Account'
import Password_Help from './Pages/Password_Help'
import Login from './Pages/Login'
import Settings from './Pages/Settings'
import { useContext } from 'react'
import { ThemesContext } from './Components/ThemesContext'
import Order from './Pages/Order'
import Wishlist from './Pages/Wishlist'
import User_Address from './Pages/User_Address'
import Help_Center from './Pages/Help_Center'

const App = () => {
  const { state } = useContext(ThemesContext);

  return (
    <div className={`app-container ${state}`}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="category" element={<Category />} />
            <Route path="account" element={<Account />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path='settings' element={<Settings />} />
            <Route path='your_order' element={<Order />} />
            <Route path='wishlist' element={<Wishlist />} />
            <Route path='user_address' element={<User_Address />} />
            <Route path='help_center' element={<Help_Center />} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='password_help' element={<Password_Help />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;