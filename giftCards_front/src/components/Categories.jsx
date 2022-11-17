import dataCategories from "../data/dataCategories"
import Header from "./Header"

const Categories = () => {
 
  return (
    <>
    <Header />
    <main class="container w-2/3 px-6 py-8 mx-auto mt-12 rounded-2xl bg-sky-600">
      <h1 class="text-2xl text-center text-slate-200 font-semibold"> Selecciona una categoría </h1>
      <section id="categoriesContainer" class="grid grid-cols-3">
        {
          dataCategories.map(element => (
            <article className="mt-12 mx-auto hover:scale-105">
                <button id={element.name} onClick=''>
                  <img src={element.url} alt="Logo de la categoria" id="categorieLogo"
                  className="w-56 h-36 rounded-2xl object-cover" />
                </button>
                <h2 class="mt-2 text-lg text-center text-slate-200"> {element.name} </h2>
            </article>
          ))
        }
    </section>
  </main> 
  </>
  );
};

export default Categories