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

export const useData = () => {

    const [data, setData] = useState(Products)


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
    data, filteredBurgers, getByNameProduct

  }
}

