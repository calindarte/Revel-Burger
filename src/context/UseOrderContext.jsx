import { createContext, useContext, useEffect, useState } from "react";

const UseOrderContext = createContext();

const inicialState = JSON.parse(localStorage.getItem("order")) || [];


export default function UseOrderContextProvider ({children}) {
 
    const [orderProduct, setOrderProduct] = useState(inicialState);

    useEffect(() => {
      localStorage.setItem("order", JSON.stringify(orderProduct));
  
    }, [orderProduct]);

      const addOrderProduct = (product) => {
        // Verifica si el producto ya está en el carrito
        const productInCart = orderProduct.find((item) => item.id === product.id);
    
        if (productInCart) {
          // Actualiza la cantidad si ya está en el carrito
          setOrderProduct((prevCart) =>
            prevCart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + product.quantity }
                : item
            )
          );
        } else {
          // Agrega el producto al carrito si no está presente
          setOrderProduct((prevCart) => [...prevCart, product]);
        }
        localStorage.setItem("order", JSON.stringify(orderProduct));
        // Devuelve true si se agregó correctamente
        return true;
       
      };
    
      const deleteOrderProduct = (id) => {
        setOrderProduct(orderProduct.filter((item) => item.id !== id));
        localStorage.setItem("order", JSON.stringify(orderProduct));
      };
    
      const calculateTotalPrice = () => {
        const totalPrice = orderProduct.reduce(
          (acc, current) => acc + current.quantity * current.price,
          0
        );
        return totalPrice;
      };
    
      const totalQuantityProduct = orderProduct.reduce(
        (acc, current) => current.quantity + acc,
        0
      );
      return (
        <UseOrderContext.Provider
          value={{
            orderProduct,
            addOrderProduct,
            deleteOrderProduct,
            totalQuantityProduct,
            calculateTotalPrice,
          }}
        >
          {children}
        </UseOrderContext.Provider>
      );
    }
    
    
    export const useOrderContext = () => useContext(UseOrderContext);

