import { useState } from "react";


const Products = [
    {
      id: 1,
      name: "Clasica",
      description:
        "Amet et velit consectetur ut adipisicing elit qui est aute minim cillum.",
      image: "https://img.freepik.com/foto-gratis/vista-lateral-hamburguesa-carne-res-queso-derretido-verduras-sobre-tabla-madera_140725-11864.jpg?t=st=1716168265~exp=1716171865~hmac=a2129fda8179d2625ca5f881e450c55ef902aec5728bec5dd101e6e6adc862a7&w=360",
      price: 13000,
    },
    {
      id: 2,
      name: "Doble",
      description:
        "Amet et velit consectetur ut adipisicing elit qui est aute minim cillum.",
      image: "https://img.freepik.com/foto-gratis/primer-plano-comida-deliciosa_23-2149303550.jpg?t=st=1716168437~exp=1716172037~hmac=5504cf76c1a63a756033814a6268eb9a419c8b37d5f6dd80fed53004b130afcb&w=360",
      price: 19000,
    },
    {
      id: 3,
      name: "Triple",
      description:
        "Amet et velit consectetur ut adipisicing elit qui est aute minim cillum.",
      image: "https://img.freepik.com/foto-gratis/disparo-vertical-deliciosa-hamburguesa-placa-madera-pared-negra_181624-45483.jpg?t=st=1716168485~exp=1716172085~hmac=0913a8fd02a9f01d3b639989b4ac60772fd92fa2d1713c57843f0320f26cf75a&w=360",
      price: 27000,
    },
    {
      id: 4,
      name: "Bacon",
      description:
        "Amet et velit consectetur ut adipisicing elit qui est aute minim cillum.",
      image: "https://img.freepik.com/foto-gratis/big-sandwich-hamburguesa-carne-res-queso-tomate-tocino-frito_2829-13905.jpg?t=st=1716168578~exp=1716172178~hmac=07e5fdc6d30993ac9ca4979ea61bd3958e99ead364c8ee1e82cd713e554f557c&w=360",
      price: 20000,
    },
    {
      id: 5,
      name: "Mixta",
      description:
        "Amet et velit consectetur ut adipisicing elit qui est aute minim cillum.",
      image: "https://img.freepik.com/foto-gratis/vista-frontal-sabrosa-hamburguesa-junto-aceitunas-queso-tomates-ensalada-verde-dentro-plato-redondo_140725-11661.jpg?t=st=1716168620~exp=1716172220~hmac=e022b78dd618f4744a432586ed5911ebdc60211ff2bc275b66d20d25ac62bcbe&w=360",
      price: 20000,
    },
    {
      id: 6,
      name: "Choriburger",
      description:
        "Amet et velit consectetur ut adipisicing elit qui est aute minim cillum.",
      image: "https://img.freepik.com/foto-gratis/hamburguesa-carne-parrilla-tomate-queso-verduras-frescas-generadas-inteligencia-artificial_188544-129139.jpg?t=st=1716168672~exp=1716172272~hmac=53b77b647d82a168910a031dabfd7f28dfb57fd92769ca4206f5c12f5d25b57e&w=740",
      price: 16000,
    },
    {
      id: 7,
      name: "Clasica de Pollo",
      description:
        "Amet et velit consectetur ut adipisicing elit qui est aute minim cillum.",
      image: "https://img.freepik.com/foto-gratis/vista-frontal-hamburguesa-sabrosa-ensalada-verde-otros-ingredientes-dentro-plato-redondo-superficie-oscura_140725-11626.jpg?t=st=1716168736~exp=1716172336~hmac=33fe1406487caac79bdb50f67735595945337029b2f092d4ffe919a7c7ef189d&w=360",
      price: 14000,
    },
  ];

  const AdditionalProducts = [
    {
      id: 1,
      name: "Papas Fritas",
      description: "Crujientes papas fritas doradas a la perfección.",
      image: "https://img.freepik.com/foto-gratis/lay-flat-papas-fritas-colores-fondo_23-2148258516.jpg?t=st=1716168784~exp=1716172384~hmac=c652acd75e2fe950af158d39f9c9619444a4a0c9753a410b50d7be9375f4655f&w=740",
      price: 4000,
    },
    {
      id: 2,
      name: "Cebolla Caramelizada",
      description: "Cebolla Caramelizadas perfectas para acompañar tu hamburguesa.",
      image: "https://es-mycooktouch.group-taurus.com/image/recipe/545x395/cebolla-caramelizada-con-azucar-moreno",
      price: 2000,
    },
    {
      id: 3,
      name: "Filetes de Pechuga",
      description: "Jugosos filetes de pechuga ideales para realzar el sabor de tu hamburguesa.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzNktIUwlm8LL-RgJhG_NZuosy77Buas3_tcvReW2UkA&s",
      price: 7000,
    },
    {
      id: 4,
      name: "Chorizo de Ternera",
      description: "Chorizo de ternera jugoso y bien sazonado, ideal para complementar tu hamburguesa con un toque extra de sabor.",
      image: "https://img.freepik.com/foto-gratis/sabrosa-composicion-chorizo-tradicional_23-2148980310.jpg?t=st=1716168930~exp=1716172530~hmac=1e5075e6d946d41508462e3dde38fdb54870aa2fe7f00b50005dc400f2973b9d&w=740",
      price: 4000,
    },
    {
      id: 5,
      name: "Tocineta",
      description: "Crujiente y sabrosa tocineta, perfecta para añadir un toque extra de sabor y textura a tu hamburguesa.",
      image: "https://img.freepik.com/fotos-premium/trozo-tocino-que-ha-cortado-mitad_667286-1457.jpg?w=740",
      price: 4000,
    },
    {
      id: 6,
      name: "Huevo",
      description: "Huevo frito de yema suave y clara dorada, ideal para dar un toque especial a tu hamburguesa.",
      image: "https://img.freepik.com/foto-gratis/huevos-fritos_141793-730.jpg?t=st=1716169111~exp=1716172711~hmac=3168527c7fc9e90e85e2318741f40b43fed79c1b387baaf4d5e959295790cbdf&w=360",
      price: 2000,
    },
    {
      id: 7,
      name: "Carne de Res 125gr",
      description: "Exquisita carne de res a la parrilla, jugosa y sazonada a la perfección, perfecta para una hamburguesa más sustanciosa.",
      image: "https://img.freepik.com/foto-gratis/tabla-madera-sabrosa-carne-cocida_23-2148599800.jpg?t=st=1716169168~exp=1716172768~hmac=dae58d20148aed01d91ccc859217d3a83ee85e6ce47a9d6de45262e14370defa&w=740",
      price: 7000,
    },
    {
      id: 8,
      name: "Pepinillos",
      description: "Pepinillos frescos y crujientes, perfectos para añadir un toque de acidez y textura a tu hamburguesa.",
      image: "https://www.helios.es/wp-content/uploads/2022/01/heliosblog_sabiasque-pepinillos.jpg",
      price: 3000,
    },
    {
      id: 9,
      name: "Paparipio",
      description: "Deliciosas papas al estilo ripio, crujientes por fuera y suaves por dentro, ideales para acompañar tu hamburguesa.",
      image: "https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2020/07/30204755/RFB-2406-2-papasalhilo.jpg",
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

