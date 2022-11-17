import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const navigate = useNavigate()

    const handleClick = () =>{
        navigate("/")
    }
  return (
    <main className="container flex justify-center mx-auto mt-20">
            <article id="userRegister" className="w-11/12 2xl:w-1/3 xl:w-2/5 lg:w-1/2 md:w-3/5 sm:w-3/4
             absolute rounded-t-2xl rounded-b-xl bg-sky-600">
               
                <img src="https://res.cloudinary.com/willyas/image/upload/v1668130691/Gift%20Cards%20App/App_Logo_-_Slate_gszdg7.png" alt="Logo de la app" id="appLogo" width="170" height="170" className="mx-auto mt-6"/>
                
                <form action="" id="userRegister-form" className="mt-9">
                    <div className="w-4/5 flex justify-between mx-auto">
                        <div id="form-name">
                            <label for="name"></label>
                            <input type="text" name="name" id="name" placeholder="Nombre" required
                            className="w-32 lg:w-48 sm:w-44
                            mb-6 px-3 py-1 rounded-md bg-slate-200 text-gray-slate font-medium placeholder-slate-500" />
                        </div>

                        <div id="form-lastName">
                            <label for="lastName"></label>
                            <input type="text" name="lastName" id="lastName" placeholder="Apellido" required
                            className="w-32 lg:w-48 sm:w-44
                            mb-6 px-3 py-1 rounded-md bg-slate-200 text-slate-800 font-medium placeholder-slate-500" />
                        </div>
                    </div>

                    <div id="form-username" className="flex justify-center">
                        <label for="username"></label>
                        <input type="text" name="username" id="username" placeholder="Nombre de usuario" required
                        className="w-4/5 mb-6 px-3 py-1 rounded-md bg-slate-200 text-slate-800 font-medium placeholder-slate-500" />
                    </div>

                    <div id="form-email" className="flex justify-center">
                        <label for="email"></label>
                        <input type="email" name="email" id="email" placeholder="Correo electrónico" required
                        className="w-4/5 mb-6 px-3 py-1 rounded-md bg-slate-200 text-slate-800 font-medium placeholder-slate-500" />
                    </div>
    
                    <div id="form-password" className="flex justify-center">
                        <label for="password"></label>
                        <input type="password" name="password" id="password" placeholder="Contraseña" required
                        className="w-4/5 mb-6 px-3 py-1 rounded-md bg-slate-200 text-slate-800 font-medium placeholder-slate-500" />
                    </div>

                    <div id="form-confirmPassword" className="flex justify-center">
                        <label for="confirmPassword"></label>
                        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirmar contraseña" required
                        className="w-4/5 px-3 py-1 rounded-md bg-slate-200 text-slate-800 font-medium placeholder-slate-500" />
                    </div>
    
                    <div id="form-buttonSignIn" className="flex justify-center mt-8">
                        <input type="submit" id="button-signIn" value="Crear cuenta" 
                        className="w-1/3 p-3 rounded-full bg-sky-800 text-slate-200 font-bold hover:cursor-pointer
                        hover:bg-sky-900 transition-colors"/>
                    </div>
    
                    <div id="form-createAccount" className="flex justify-center mt-9 pb-5 text-slate-200">
                        <p id="text-createAccount"> ¿Ya tienes una cuenta? </p>
                        <button type="button" id="button-createAccount" onClick={handleClick}
                        className="ml-2 font-semibold hover:text-sky-900 transition-colors"> Inicia sesión </button>
                    </div>
                </form>
            </article>
        </main>
  )
}

export default SignUp