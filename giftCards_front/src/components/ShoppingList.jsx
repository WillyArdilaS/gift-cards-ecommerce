import { useState, useEffect } from 'react';
import Header from "./Header";
import 'boxicons';
import axios from 'axios';

const ShoppingList = ({ user, setUser, setIsLogin }) => {
  const [cardsBought, setCardsBought] = useState([]);
  const [shoppingDates, setShoppingDates] = useState([]);

  useEffect(() => {
    setCardsBought([]);

    axios.get(`http://localhost:3000/compras`)
    .then((res) => {
      res.data.map((element, index) => {
        if(res.data[index].username == user)  {
          setShoppingDates(dataElement => [...dataElement, element.fecha_compra]);

          axios.get(`http://localhost:3000/tarjetas/${res.data[index].id_tarjeta}`)
          .then((response) => {
            response.data.map((item) => {
              setCardsBought(dataElement => [...dataElement, item]);
            })
          })
          .catch((err) => {
            console.log(err);
          });
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  if (cardsBought.length === 0) {
    return (
      <>
        <Header onPage={"shoppingList"} user={user} setUser={setUser} setIsLogin={setIsLogin} />
        <div className="bg-blue-500 text-white text-lg font-bold px-10 py-5 mt-12 flex items-center justify-center" role="alert" >
               <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
               <p>No has realizado ninguna compra.</p>
        </div>
      </>
    )
  } else {
    return (
      <>
        <Header onPage={"shoppingList"} user={user} setUser={setUser} setIsLogin={setIsLogin} />
        <main id="cardsContainer" className="container flex flex-col w-3/5 pt-8 mx-auto mt-12 rounded-2xl bg-sky-600">
          {
            cardsBought.map((element, index) => (
              <section id={element.id_tarjeta} className="flex justify-between mx-8 mb-6 bg-sky-800 rounded-2xl">
                <img src={element.ruta_imagen} id="giftCardImage" alt="Imagen de la tarjeta"
                  className="w-1/2 h-72 rounded-2xl object-cover" />

                <section className="w-2/5 pr-8">
                  <h1 id="giftCardName" className="pt-10 text-xl text-center font-semibold text-slate-200"> {element.nombre} </h1>
                  <p className="pt-6 text-lg text-center text-slate-200 font-medium"> Fecha de la compra:
                    <span id="shopDate" className="font-normal"> {shoppingDates[index]}  </span>
                  </p>
                  <p id="giftCardCode" className="pt-6 text-lg text-center text-slate-200 font-medium"> Código de canjeo:
                    <span id="shopDate" className="font-normal"> {element.codigo_canjeo} </span>
                  </p>
                </section>
              </section>
            ))
          }
        </main>
      </>
    )
  }
};

export default ShoppingList