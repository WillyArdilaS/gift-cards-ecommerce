import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'

const Login = ({setIsLogin, setUser}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const handleChangePage = () =>{
        navigate("/SignUp");
    }

    const handleLogin = (e) => {
        e.preventDefault();

        if(!username || !password) {
            Swal.fire({
                icon: 'info',
                title: 'Faltan campos por llenar',
            });
            
        } else {
            axios.get(`http://localhost:3000/clientes/${username}`) 
            .then((res) => {
                if(res.data.length == 0) {
                    Swal.fire({
                        icon: 'error',
                        title: 'El usuario no está registrado',
                        text: 'Por favor registra primero tu cuenta.',
                    });
                   
                } else {
                    if(password !== res.data[0].contrasena) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Contraseña incorrecta',
                            text: 'Por favor verifica nuevamente tu contraseña',
                        });
                    } else{
                        setIsLogin(true);
                        setUser(username);

                        Swal.fire({
                            icon: 'success',
                            title: `Bienvenid@ ${username}` ,
                            text: '¡Busca y compra tus tarjetas de regalo favoritas!',
                        });

                        navigate("/Home", {
                            replace: ("/LogIn", true)
                        });
                    }
                }
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error al ingresar',
                })
                console.log(err);
            });
        }
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