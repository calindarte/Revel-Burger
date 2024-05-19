// import { useParams } from "react-router-dom";
// import { useData } from "../hooks/useData";
// import { useEffect } from "react";

import { Link } from "react-router-dom";
import Price from "../components/Price";
import { useOrderContext } from "../context/UseOrderContext";

const ProductDetails = () => {
  // const {id} = useParams();
  // const {data,getByNameProduct} = useData()
  const { orderProduct, deleteOrderProduct, calculateTotalPrice } =
    useOrderContext();

  // const name = id.toLocaleLowerCase()

  // useEffect(()=>{
  // getByNameProduct(name)
  // },[name])

  return (
    <div className="relative">
      <div>
        <h4 className="font-bold uppercase text-3xl tracking-wider ml-10 my-8 text-zinc-700">
          Detalle de la Orden
        </h4>
      </div>
      <hr />

      {orderProduct.length === 0 && (
        <div>
        <p className="py-20 text-center text-lg">Orden vacía</p>
        <Link to="/">
                <button className="bg-zinc-900  hover:bg-zinc-700 text-white rounded-md py-4 w-full flex justify-center">
                  <span className="material-symbols-outlined ">arrow_back</span>
                  Volver al Menú
                </button>
              </Link>

        </div>
      )}
      <div className="mt-4">
        {orderProduct.map((product) => (
          <article key={product.id} className="flex items-center mx-20 py-4">
            <div className="flex gap-8">
              <span>{product.quantity}</span>X
              <h6 className="uppercase">{product.name}</h6>
              <button
                className=""
                onClick={() => deleteOrderProduct(product.id)}
              >
                <span className="material-symbols-outlined flex">delete</span>
              </button>
            </div>
            <span className="ml-auto">
              <Price precio={product.price * product.quantity} />
            </span>
          </article>
        ))}
      </div>

      <div className="mb-10">
        {orderProduct.length !== 0 && (
          <div className="px-10 py-8 flex flex-col gap-4">
            <div className="flex justify-between  px-10">
              <span className="font-bold text-lg uppercase text-zinc-900 tracking-widest">
                Subtotal:
              </span>
              <span>
                <Price precio={calculateTotalPrice()} className="font-bold" />
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <button className="bg-zinc-900 hover:bg-zinc-700 text-white rounded-md py-4 w-full">
                Confirmar Pedido
              </button>
              <Link to="/">
                <button className="bg-zinc-900  hover:bg-zinc-700 text-white rounded-md py-4 w-full flex justify-center">
                  <span className="material-symbols-outlined ">arrow_back</span>
                  Volver al Menú
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
