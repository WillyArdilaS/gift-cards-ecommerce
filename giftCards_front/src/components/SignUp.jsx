import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'

const SignUp = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const navigate = useNavigate()

    const handleChangePage = () =>{
        navigate("/LogIn");
    }

    const handleCreateUser = (e) => {
        e.preventDefault();

        if(!username || !lastName || !username || !email || !password || !passwordConfirmation) {
            Swal.fire({
                icon: 'info',
                title: 'Faltan campos por llenar',
            })
        } else {
            axios.get(`http://localhost:3000/clientes/${username}`)
            .then((res) => {
                if(res.data.length > 0) {
                    Swal.fire({
                        icon: 'info',
                        title: 'El usuario ya existe',
                    })
                    
                } else {
                    if(password !== passwordConfirmation) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Las contraseñas no coinciden',
                            text: 'Por favor verifica que las contraseñas sean iguales',
                        })
                        
                    } else {
                        axios.post(`http://localhost:3000/clientes`, {
                            username: username,
                            contrasena: password,
                            nombre: name,
                            apellido: lastName,
                            email: email,
                            saldo: 20000
                        })
                        .then((res) => {
                            Swal.fire({
                                icon: 'success',
                                title: 'Usuario creado con éxito',
                                text: '¡Bienvenid@!',
                                
                            })
                            
                            navigate("/LogIn");
                        })
                        .catch((err) => {
                            console.log(err);
                        }); 
                    }
                }
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error al hacer el registro',
                    text: 'Por favor verifica la información que has ingresado',
                })
                
                console.log(err);
            });
        }
    }

    return (
        <main className="container flex justify-center mx-auto mt-24">
                <article id="userRegister" className="w-11/12 2xl:w-1/3 xl:w-2/5 lg:w-1/2 md:w-3/5 sm:w-3/4
                absolute rounded-t-2xl rounded-b-xl bg-sky-600">
                
                    <img src="https://res.cloudinary.com/willyas/image/upload/v1668130691/Gift%20Cards%20App/App_Logo_-_Slate_gszdg7.png" alt="Logo de la app" id="appLogo" width="170" height="170" className="mx-auto mt-6"/>
                    
                    <form action="" id="userRegister-form" className="mt-9">
                        <div className="w-4/5 flex justify-between mx-auto">
                            <div id="form-name">
                                <label htmlFor="name"></label>
                                <input type="text" name="name" id="name" placeholder="Nombre" required
                                className="w-32 lg:w-48 sm:w-44
                                mb-6 px-3 py-1 rounded-md bg-slate-200 text-gray-slate font-medium placeholder-slate-500" 
                                onChange={(e) => setName(e.target.value)} />
                            </div>

                            <div id="form-lastName">
                                <label htmlFor="lastName"></label>
                                <input type="text" name="lastName" id="lastName" placeholder="Apellido" required
                                className="w-32 lg:w-48 sm:w-44
                                mb-6 px-3 py-1 rounded-md bg-slate-200 text-slate-800 font-medium placeholder-slate-500" 
                                onChange={(e) => setLastName(e.target.value)} />
                            </div>
                        </div>

                        <div id="form-username" className="flex justify-center">
                            <label htmlFor="username"></label>
                            <input type="text" name="username" id="username" placeholder="Nombre de usuario" required
                            className="w-4/5 mb-6 px-3 py-1 rounded-md bg-slate-200 text-slate-800 font-medium placeholder-slate-500" 
                            onChange={(e) => setUsername(e.target.value)} />
                        </div>

                        <div id="form-email" className="flex justify-center">
                            <label htmlFor="email"></label>
                            <input type="email" name="email" id="email" placeholder="Correo electrónico" required
                            className="w-4/5 mb-6 px-3 py-1 rounded-md bg-slate-200 text-slate-800 font-medium placeholder-slate-500" 
                            onChange={(e) => setEmail(e.target.value)} />
                        </div>
        
                        <div id="form-password" className="flex justify-center">
                            <label htmlFor="password"></label>
                            <input type="password" name="password" id="password" placeholder="Contraseña" required
                            className="w-4/5 mb-6 px-3 py-1 rounded-md bg-slate-200 text-slate-800 font-medium placeholder-slate-500" 
                            onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div id="form-confirmPassword" className="flex justify-center">
                            <label htmlFor="confirmPassword"></label>
                            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirmar contraseña" required
                            className="w-4/5 px-3 py-1 rounded-md bg-slate-200 text-slate-800 font-medium placeholder-slate-500" 
                            onChange={(e) => setPasswordConfirmation(e.target.value)} />
                        </div>
        
                        <div id="form-buttonSignIn" className="flex justify-center mt-8">
                            <input type="submit" id="button-signIn" value="Crear cuenta" onClick={handleCreateUser}
                            className="w-1/3 p-3 rounded-full bg-sky-800 text-slate-200 font-bold hover:cursor-pointer
                            hover:bg-sky-900 transition-colors"/>
                        </div>
        
                        <div id="form-createAccount" className="flex justify-center mt-9 pb-5 text-slate-200">
                            <p id="text-createAccount"> ¿Ya tienes una cuenta? </p>
                            <button type="button" id="button-createAccount" onClick={handleChangePage}
                            className="ml-2 font-semibold hover:text-sky-900 transition-colors"> Inicia sesión </button>
                        </div>
                    </form>
                </article>
            </main>
    )
}

export default SignUp