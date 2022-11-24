import Header from "./Header"
import dataCards from "../data/dataCards.json"
import { useState ,useEffect} from "react"
import CardItem from "./CardItem"
const CardsContainer = () => {
    const [data, setData]=useState([])
    useEffect(()=>{ 
        setData(dataCards)
    },[])
    return (
        <>
            <Header />
            <main className="container w-4/5 px-6 py-8 mx-auto mt-12 rounded-2xl bg-sky-600">
                <form>
                    <label htmlFor="searchField"></label>
                    <div className="flex justify-center items-center">
                        <input type="search" id="searchField" className="w-4/5 block py-2 pl-6 text-slate-800 bg-slate-100
                           rounded-md border placeholder-slate-500" placeholder="¿Qué tipo de tarjeta busca?" />
                        <button type="submit" id="button-search">
                            <div className="items-center pl-3 hover:scale-110">
                                <svg aria-hidden="true" className="w-6 h-6 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                        </button>
                    </div>
                </form>

                <section id="giftCardsContainer" className="grid grid-cols-3 ">
                    
                    {
                        data.map(card=>(
                            <CardItem 
                            key={card.id}
                            info = {card}
                            />
                        ))
                       

                    }
                </section>
            </main>
        </>
    )
}

export default CardsContainer