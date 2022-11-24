import {BrowserRouter, Route, Routes} from "react-router-dom";
import { useState } from "react";
import PrivateRoute from "./auth/PrivateRoute";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Categories from "./components/Categories";
import Cards from "./components/Cards";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
   
      <BrowserRouter>
      
        <Routes>
        
          <Route path="/*" element={<Login setIsLogin={setIsLogin} />} />
          <Route path="/LogIn" element={<Login setIsLogin={setIsLogin} />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<PrivateRoute isLogin={isLogin}> <Categories /> </PrivateRoute>} />
          <Route path="/Cards" element={<PrivateRoute isLogin={isLogin}> <Cards /> </PrivateRoute>} />
          
        </Routes>
        
      </BrowserRouter>
  )
}

export default App