
import Header from "./Header"
import dataCards from "../data/dataCards.json"
const Cards = () => {
    return (
        <>
            <Header />
            <main class="container w-4/5 px-6 py-8 mx-auto mt-12 rounded-2xl bg-sky-600">
                <form>
                    <label for="searchField"></label>
                    <div class="flex justify-center items-center">
                        <input type="search" id="searchField" class="w-4/5 block py-2 pl-6 text-slate-800 bg-slate-100
                           rounded-md border placeholder-slate-500" placeholder="¿Qué tipo de tarjeta busca?" />
                        <button type="submit" id="button-search">
                            <div class="items-center pl-3 hover:scale-110">
                                <svg aria-hidden="true" class="w-6 h-6 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                        </button>
                    </div>
                </form>

                <section id="giftCardsContainer" class="grid grid-cols-3 ">
                    {
                        dataCards.map(element => (
                            <article class="mt-12 mx-auto">
                                <button id={element.categoria} onclick="location.href='';">
                                    <img src={element.ruta_imagen} alt="Imagen de la tarjeta" id="giftCardImage"
                                        class="w-56 h-36 rounded-2xl object-cover  hover:scale-105" />
                                </button>
                                <h2 class="mt-2 text-lg text-center text-slate-200"> {element.nombre} </h2>
                                <h3 class="mt-2 text-lg text-center text-slate-200"> ${element.precio} </h3>
                                

                                <div>
                              
                            </div>
                            </article>
                           
                            
                        ))

                    }
                </section>
            </main>
        </>
    )
}

export default Cards