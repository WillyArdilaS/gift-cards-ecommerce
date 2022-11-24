import 'boxicons';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const Header = () => {
    const { totalProducts } = useCartContext()
    return (
        <header className="w-11/12 flex justify-between mx-16 mt-10">
            <div className="flex items-center">
                <img src="https://res.cloudinary.com/willyas/image/upload/v1668130673/Gift%20Cards%20App/App_Logo_-_White_xbaaih.png" alt="Logo de la app" id="appLogo" width="80" height="80" />

                <nav id="navMenu" className="w-72 mx-28 text-slate-200 hover:cursor-pointer">
                    <ul className="flex justify-between" id="lista">
                        <li id="navMenu-home" className="w-1/5 text-center border-b-4 pb-2 hover:text-slate-500 transition-colors"
                        > <Link to="/Home">Inicio </Link></li>
                        <li id="navMenu-shopList" className="hover:text-slate-500 transition-colors"
                        > Lista de compras </li>
                        <li
                            id="navMenu-shoppingCart" className="hover:text-slate-500 transition-colors">
                                <Link to="/ShoppingCart">
                                    <box-icon name="cart" color="white"></box-icon>
                                    <span className="item_total">{totalProducts}</span>
                                </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="flex justify-between items-center w-60">
                <h2 id="navMenu-username" className="text-slate-200 font-medium hover:text-slate-500 cursor-pointer transition-colors"> 
                Laurita05 </h2>

                <button id="button-exitLogo" className="hover:scale-105"> <Link to="/" replace="true">
                    <img src="https://res.cloudinary.com/willyas/image/upload/v1664832455/Gift%20Cards%20App/Exit_Icon_jbdrrc.png" alt="exit logo" id="exitLogo" width="50" height="40" />
                </Link> </button>
            </div>
        </header>
    )
}

export default Header