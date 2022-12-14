import { Link, useNavigate } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import 'boxicons';
import Swal from 'sweetalert2';

const Header = ({onPage, user, setUser, setIsLogin}) => {
    const {clearCart, totalProducts} = useCartContext();

    const navigate = useNavigate()

    const handleLogOut = () => {
        Swal.fire({
            icon: 'success',
            title: `¡Hasta la próxima ${user}!` ,
            text: 'Vuelve cuando quieras',
        });

        setIsLogin(false);
        setUser("");
        clearCart();
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
                        > <Link to="/ShoppingList"> Lista de compras </Link> </li>
                          
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
                <div className='flex pr-6'>
                    <box-icon name='user-circle' type='solid' color='#ffffff' className="mr-6 pr-2"></box-icon>
                    <h2 id="navMenu-username" className="text-slate-200 font-medium ml-2"> 
                    {user} </h2>
                </div>
                

                <button id="button-exitLogo" className="hover:scale-105" onClick={handleLogOut}>
                    <img src="https://res.cloudinary.com/willyas/image/upload/v1664832455/Gift%20Cards%20App/Exit_Icon_jbdrrc.png" 
                    alt="exit logo" id="exitLogo" width="50" height="40" />
                </button>
            </div>
        </header>
    )
}

export default Header