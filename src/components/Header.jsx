import imgLogo from "../images/logoRevelBurger.jpg";
import imgBurger from "../images/deliciosa-hamburguesa-ingredientes-frescos.png";
import IconArrowDown from "./IconArrowDown";

const Header = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-950  flex gap-1 py-16 justify-center ">
        <div className="flex justify-center">

        <img src={imgBurger} alt="burger" className="size-96 object-cover"/>
        </div>
      
        <div className="text-white font-bold uppercase text-4xl flex flex-col items-center justify-center">
          <div className="flex flex-col gap-4 items-center justify-center">
          <span className="text-5xl text-yellow-500 font-serif">Catálogo de Hamburguesas</span>

          <h1 className="tracking-wider">Revel Burger</h1>

          </div>
          <IconArrowDown className="animate-bounce fill-white mt-8 size-14 " />        
          </div>

      </div>
      <img src={imgLogo} alt="logo" className="absolute z-20 rounded-full size-40 right-20 bottom-5 shadow-2xl" />

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
    </div>
  );
};

export default Header;
