import { useState } from "react";
import { useOrderContext } from "../context/UseOrderContext";
import Price from "./Price";
import Swal from "sweetalert2";


const CardBurger = ({ name, description, price, image, product }) => {

  const {addOrderProduct} = useOrderContext()
  const [count, setCount] = useState(0);




  const handleAddToCart = () => {
    addOrderProduct({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      description: product.description,
      quantity: count === 0 && 1,
    });

    setCount(0);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Orden Añadida",
      showConfirmButton: false,
      timer: 1500,
  });

  };




  return (
    <div className="bg-[#f5f5f5] flex flex-col items-center  md:flex-row  m-3 rounded-lg md:gap-16 gap-4 p-6 shadow-2xl relative">
      <div className=" overflow-hidden rounded-2xl">
        <img src={image} alt="foto-burger" className="size-40  object-center" />
      </div>

      <div className="text-zinc-950 flex flex-col gap-2 py-4 ">
        <h1 className="font-bold uppercase text-lg">{name}</h1>
        <p>{description}</p>
        <span>
                <Price precio={price} className="font-bold" />
        </span>
        <div>
        

        <button onClick={handleAddToCart} className="bg-zinc-900 rounded-full mt-2 md:mt-0 p-2 w-full md:w-auto flex justify-center md:absolute md:right-12 md:top-[40%] ">
          <span className="material-symbols-outlined text-white">add</span>
        </button>
 
        </div>
      </div>
    </div>
  );
};

export default CardBurger;
