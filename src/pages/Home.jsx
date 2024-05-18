import { useState } from "react";
import IconSearch from "../components/IconSearch";
import CardBurger from "../components/CardBurger";

const Products = [
  {
    id: 1,
    name: "Clasica",
    description:
      "Amet et velit consectetur ut adipisicing elit qui est aute minim cillum.",
    image: "src/images/imgClasica.jpg",
    price: 13000,
  },
  {
    id: 2,
    name: "Doble",
    description:
      "Amet et velit consectetur ut adipisicing elit qui est aute minim cillum.",
    image: "src/images/imgClasica.jpg",
    price: 19000,
  },
  {
    id: 3,
    name: "Triple",
    description:
      "Amet et velit consectetur ut adipisicing elit qui est aute minim cillum.",
    image: "src/images/imgClasica.jpg",
    price: 27000,
  },
  {
    id: 4,
    name: "Bacon",
    description:
      "Amet et velit consectetur ut adipisicing elit qui est aute minim cillum.",
    image: "src/images/imgClasica.jpg",
    price: 20000,
  },
  {
    id: 5,
    name: "Mixta",
    description:
      "Amet et velit consectetur ut adipisicing elit qui est aute minim cillum.",
    image: "src/images/imgClasica.jpg",
    price: 20000,
  },
  {
    id: 6,
    name: "Choriburger",
    description:
      "Amet et velit consectetur ut adipisicing elit qui est aute minim cillum.",
    image: "src/images/imgClasica.jpg",
    price: 16000,
  },
  {
    id: 7,
    name: "Clasica de Pollo",
    description:
      "Amet et velit consectetur ut adipisicing elit qui est aute minim cillum.",
    image: "src/images/imgClasica.jpg",
    price: 14000,
  }
];

const Home = () => {
  const [textInput, setTextInput] = useState("");
  const [burgers, setBurgers] = useState(Products)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sumit");
  };
  return (
    <>
      <div>
        <h1 className="text-4xl uppercase font-bold tracking-wider ml-10 my-8">
          Revel Burger
        </h1>
        <div className="flex mx-10 gap-2  mb-4">
          <span className="material-symbols-outlined">distance</span>
          <span>Delivery</span>
          <span className="material-symbols-outlined">schedule</span>
          <span>6PM - 10PM</span>
        </div>
      </div>

      <div className="px-10 pb-4">
        <form className="flex items-center " onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Buscar..."
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            className="relative w-full pl-10 py-2 border border-zinc-400  rounded-full focus:outline-none  focus:ring-1 focus:ring-zinc-800"
          />
          <div className="bg-zinc-950 absolute rounded-full p-1 left-11">
            <IconSearch className="fill-white  " />
          </div>
        </form>
      </div>

      <div className="mx-10 bg-slate-50 text-white flex flex-col gap-1">
        <h2 className="py-4 text-center font-bold uppercase bg-zinc-900 rounded-md ">
          Burgers
        </h2>

         {
            burgers.map((item)=> (
                <div key={item.id} className="flex flex-col">
                <CardBurger 
                name={item.name}
                description={item.description}
                image={item.image}
                price={item.price}/>

                </div>
            ))
         }

          

   
      </div>
    </>
  );
};

export default Home;
