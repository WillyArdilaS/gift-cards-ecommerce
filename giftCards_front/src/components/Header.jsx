import { Link, useNavigate } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import 'boxicons';

const Header = ({onPage, user, setUser, setIsLogin}) => {
    const { totalProducts } = useCartContext();

    const navigate = useNavigate()

    const handleLogOut = () => {
        setIsLogin(false);
        setUser("");
        navigate("/");
    }

    return (
        <header className="w-11/12 flex justify-between mx-16 mt-10">
            <div className="flex items-center">
                <img src="https://res.cloudinary.com/willyas/image/upload/v1668130673/Gift%20Cards%20App/App_Logo_-_White_xbaaih.png" 
                alt="Logo de la app" id="appLogo" width="80" height="80" />

                <nav id="navMenu" className="w-72 mt-3 mx-28 text-slate-200 hover:cursor-pointer">
                    <ul className="flex justify-between" id="lista">
                        <li id="navMenu-home" className={(onPage == "home" || onPage == "cards") ? 
                            "w-1/5 text-center border-b-4 pb-2 hover:text-slate-500 transition-colors" : 
                            "hover:text-slate-500 transition-colors"}
                        > <Link to="/Home">Inicio </Link></li>
                        <li id="navMenu-shopList" className={(onPage == "shoppingList") ? 
                            "w-1/2 text-center border-b-4 pb-2 hover:text-slate-500 transition-colors" :
                            "hover:text-slate-500 transition-colors"}
                        > Lista de compras </li>
                        
                    </ul>
                </nav>
            </div>

            <div className="w-72 flex justify-between items-center">
                <div id="navMenu-shoppingCart" className={(onPage == "shoppingCart") ? 
                    "w-16 mt-3 text-center border-b-4 pb-2 text-slate-200 hover:text-slate-500 transition-colors" :
                    "w-16 text-slate-200 hover:text-slate-500 transition-colors"}>
                    <Link to="/ShoppingCart">
                        <box-icon name="cart" color="white"></box-icon>
                        <span className="item_total px-2">{totalProducts}</span>
                    </Link>
                </div>
                <h2 id="navMenu-username" className="text-slate-200 -ml-2 font-medium"> 
                {user} </h2>

                <button id="button-exitLogo" className="hover:scale-105" onClick={handleLogOut}>
                    <img src="https://res.cloudinary.com/willyas/image/upload/v1664832455/Gift%20Cards%20App/Exit_Icon_jbdrrc.png" 
                    alt="exit logo" id="exitLogo" width="50" height="40" />
                </button>
            </div>
        </header>
    )
}

export default Header