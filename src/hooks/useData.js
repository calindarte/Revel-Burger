import { useState } from "react";


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
    },
  ];

  const AdditionalProducts = [
    {
      id: 1,
      name: "Papas Fritas",
      description: "Crujientes papas fritas doradas a la perfección.",
      image: "src/images/papasFritas.jpg",
      price: 4000,
    },
    {
      id: 2,
      name: "Cebolla Caramelizada",
      description: "Cebolla Caramelizadas perfectas para acompañar tu hamburguesa.",
      image: "src/images/cebollaCaramelizada.png",
      price: 2000,
    },
    {
      id: 3,
      name: "Filetes de Pechuga",
      description: "Jugosos filetes de pechuga ideales para realzar el sabor de tu hamburguesa.",
      image: "src/images/filetePechuga.png",
      price: 7000,
    },
    {
      id: 4,
      name: "Chorizo de Ternera",
      description: "Chorizo de ternera jugoso y bien sazonado, ideal para complementar tu hamburguesa con un toque extra de sabor.",
      image: "src/images/chorizoTernera.jpg",
      price: 4000,
    },
    {
      id: 5,
      name: "Tocineta",
      description: "Crujiente y sabrosa tocineta, perfecta para añadir un toque extra de sabor y textura a tu hamburguesa.",
      image: "src/images/tocineta.png",
      price: 4000,
    },
    {
      id: 6,
      name: "Huevo",
      description: "Huevo frito de yema suave y clara dorada, ideal para dar un toque especial a tu hamburguesa.",
      image: "src/images/huevo.jpg",
      price: 2000,
    },
    {
      id: 7,
      name: "Carne de Res 125gr",
      description: "Exquisita carne de res a la parrilla, jugosa y sazonada a la perfección, perfecta para una hamburguesa más sustanciosa.",
      image: "src/images/carneRes.jpg",
      price: 7000,
    },
    {
      id: 8,
      name: "Pepinillos",
      description: "Pepinillos frescos y crujientes, perfectos para añadir un toque de acidez y textura a tu hamburguesa.",
      image: "src/images/pepinillo.png",
      price: 3000,
    },
    {
      id: 9,
      name: "Paparipio",
      description: "Deliciosas papas al estilo ripio, crujientes por fuera y suaves por dentro, ideales para acompañar tu hamburguesa.",
      image: "src/images/paparipio.jpg",
      price: 2000,
    },
    
  ];
  

export const useData = () => {

    const [data, setData] = useState(Products)

    const [addtional, setAdditional] = useState(AdditionalProducts)


    const filteredBurgers = (textInput) => {
        
        const results = Products.filter((burger) =>
            burger.name.toLowerCase().includes(textInput.toLowerCase())
          );
          setData(results);
        
    } 

    const getByNameProduct = (name) => {

    const product = Products.find((item) => item.name.toLowerCase() === name)
    setData(product)

    }


  return {
    data, filteredBurgers, getByNameProduct, addtional

  }
}

