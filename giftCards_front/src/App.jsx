import {BrowserRouter, Route, Routes} from "react-router-dom"
import CartProvider from "./context/CartContext"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Categories from "./components/Categories"
import CardsContainer from "./components/CardsContainer"
import ShoppingCartContainer from "./components/ShoppingCartContainer"




function App() {
  return (
   
   
    <BrowserRouter>
      <CartProvider>
        <Routes>
  
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<Categories />} />
          <Route path="/Cards" element={<CardsContainer />} />
          <Route path="/ShoppingCart" element={<ShoppingCartContainer />} />
          
        </Routes>
      </CartProvider>
    </BrowserRouter>
  
  
  )
}

export default App