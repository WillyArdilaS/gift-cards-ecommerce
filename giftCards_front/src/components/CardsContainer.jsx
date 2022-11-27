import Header from "./Header";
import { useState ,useEffect} from "react";
import CardItem from "./CardItem";
import axios from 'axios';

const CardsContainer = ({user, setUser, setIsLogin, categorie}) => {
    const [cardData, setCardData]=useState([]);
    const [searchInput, setSearchInput] = useState("");

    useEffect(()=>{ 
        getCards(); 
    },[]);

    const getCards = () => {
        axios.get(`http://localhost:3000/tarjetas`)
        .then((res => {
            res.data.map((item) => {
                if(item.categoria == categorie) {
                    axios.get(`http://localhost:3000/compras/${item.id_tarjeta}`)
                    .then((res) => {
                        if(res.data.length == 0) {
                            setCardData(dataElement => [...dataElement, item]);
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                }
            })  
        }))
        .catch((err) => {
            console.log(err);
        }); 
    }

    const handleSearch = (e) => {
        let lowercase = e.target.value.toLowerCase();
        setSearchInput(lowercase);
    }

    const filteredData = cardData.filter((element) => {
        if(searchInput == "") {
            return element;
        } else {
            return element.nombre.toLowerCase().includes(searchInput);
        }
    })    

    return (
        <>
            <Header onPage={"cards"} user={user} setUser={setUser} setIsLogin={setIsLogin}/>
            <main className="container w-4/5 px-6 py-8 mx-auto mt-12 rounded-2xl bg-sky-600">
                <form>
                    <label htmlFor="searchField"></label>
                    <div className="flex justify-center items-center">
                        <input type="search" id="searchField" className="w-4/5 block py-2 pl-6 text-slate-800 bg-slate-100 rounded-md 
                        border placeholder-slate-500" placeholder="¿Qué tipo de tarjeta busca?" onChange={handleSearch}/>
                        <div className="items-center pl-3">
                            <svg aria-hidden="true" className="w-6 h-6 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                    </div>
                </form>

                <section id="giftCardsContainer" className="grid grid-cols-3 ">
                    {
                        filteredData.map(card => (
                            <CardItem key={card.id_tarjeta} info={card} />
                        ))
                    }
                </section>
            </main>
        </>
    )
}

export default CardsContainer