import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({setIsLogin}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const handleChangePage = () =>{
        navigate("/SignUp");
    }

    const handleLogin = (e) => {
        e.preventDefault();

        axios.get(`http://localhost:3000/clientes/${username}`)
        .then((res) => {
            if(password !== res.data[0].contrasena) {
                alert("Contraseña incorrecta"); 
            } else{
                setIsLogin(true);
                navigate("/Home", {
                    replace: ("/LogIn", true)
                });
            }
        })
        .catch((err) => {
            alert("El usuario no está registrado"); 
            console.log(err);
        });
    }

  return (
    <main className="container flex justify-center mx-auto mt-44">
        <article id="userSign" className="w-3/5 2xl:w-1/5 xl:w-1/4 lg:w-1/3 md:w-2/5 sm:w-1/2 absolute rounded-t-2xl rounded-b-xl bg-sky-600">
            <img src="https://res.cloudinary.com/willyas/image/upload/v1668130691/Gift%20Cards%20App/App_Logo_-_Slate_gszdg7.png" alt="Logo de la app" id="appLogo" width="150" height="150" className="mx-auto mt-6"/>

            <form action="" id="userSignIn-form" className="mt-9">
                <div id="form-username" className="flex justify-center">
                    <label htmlFor="username"></label>
                    <input type="text" name="username" id="username" placeholder="Nombre de usuario" value={username} required
                        className="w-3/4 mb-6 px-3 py-1 rounded-md bg-slate-200 text-slate-800 font-medium placeholder-slate-500" 
                        onChange={(e) => setUsername(e.target.value)}/>
                </div>

                <div id="form-password" className="flex justify-center">
                    <label htmlFor="password"></label>
                    <input type="password" name="password" id="password" placeholder="Contraseña" value={password} required
                        className="w-3/4 px-3 py-1 rounded-md bg-slate-200 text-slate-800 font-medium placeholder-slate-500" 
                        onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div id="form-buttonSignIn" className="flex justify-center mt-8">
                    <input type="button" id="button-signIn" value="Iniciar sesión" onClick={handleLogin}
                        className="w-1/2 p-3 rounded-full bg-sky-800 text-slate-200 font-bold hover:cursor-pointer
                        hover:bg-sky-900 transition-colors"/>
                </div>

                <div id="form-createAccount" className="flex justify-center mt-8 pb-5 text-slate-200">
                    <p id="text-createAccount"> ¿Aún no tienes cuenta? </p>
                    <button type="button" id="button-createAccount" onClick={handleChangePage} 
                    className="ml-2 font-semibold hover:text-sky-900 transition-colors"> Crea una </button>
                </div>
            </form>
        </article>
    </main>
  )
}

export default Login