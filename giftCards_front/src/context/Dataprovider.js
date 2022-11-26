import { useState , useEffect, createContext } from "react";
import dataCards from "../data/dataCards.json"

export const DataContext = createContext();

export const DataProvider = (props) =>{
    const [cards,setCards] = useState([])

    useEffect(()=>{
        const card = dataCards
        setCards(card)
    },[])

    const value = {
        cards : [cards]
    }

    return (
        <DataContext.Provider value = {value} >
            {props.children}
        </DataContext.Provider>
    )
}