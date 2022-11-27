import {BrowserRouter, Route, Routes} from "react-router-dom"
import { useState } from "react";
import PrivateRoute from "./auth/PrivateRoute";
import CartProvider from "./context/CartContext";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Categories from "./components/Categories";
import CardsContainer from "./components/CardsContainer";
import ShoppingCartContainer from "./components/ShoppingCartContainer";
import ShoppingList from "./components/ShoppingList";


function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState("");
  const [categorie, setCategorie] = useState("");

  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
        
          <Route path="/*" element={<Login setIsLogin={setIsLogin} setUser={setUser} />} />
          <Route path="/LogIn" element={<Login setIsLogin={setIsLogin} setUser={setUser} />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<PrivateRoute isLogin={isLogin}> <Categories user={user} setUser={setUser}
          setIsLogin={setIsLogin} setCategorie={setCategorie}/> </PrivateRoute>} />
          <Route path="/ShoppingList" element={<PrivateRoute isLogin={isLogin}> <ShoppingList user={user} setUser={setUser}
          setIsLogin={setIsLogin}/> </PrivateRoute>} />
          <Route path="/Cards" element={<PrivateRoute isLogin={isLogin}> <CardsContainer user={user} setUser={setUser}
          setIsLogin={setIsLogin} categorie={categorie}/> </PrivateRoute>} />
          <Route path="/ShoppingCart" element={<PrivateRoute isLogin={isLogin}> <ShoppingCartContainer user={user} setUser={setUser}
          setIsLogin={setIsLogin}/> </PrivateRoute>} />
          

        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App