import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Categories from "./components/Categories"
import Cards from "./components/Cards"


function App() {
  return (
   
      <BrowserRouter>
      
        <Routes>
        
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<Categories />} />
          <Route path="/Cards" element={<Cards />} />
          
        </Routes>
        
      </BrowserRouter>
  
  
  )
}

export default App