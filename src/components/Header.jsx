import imgLogo from "../images/logoRevelBurger.jpg";
import imgBurger from "../images/deliciosa-hamburguesa-ingredientes-frescos.png";
import IconArrowDown from "./IconArrowDown";

const Header = () => {
  return (
    <div className="relative">
      <div className=" bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-950  flex md:flex-row flex-col gap-1 py-16 justify-center ">
        <div className="flex justify-center">

        <img src={imgBurger} alt="burger" className="md:size-96 size-80 object-cover"/>
        </div>
      
        <div className=" text-white font-bold uppercase md:text-4xl text-2xl flex flex-col items-center justify-center md:mt-0 mt-10">
          <div className="flex flex-col gap-4 items-center justify-center">
          <span className="md:text-5xl text-center text-yellow-500 font-serif">Catálogo de Hamburguesas</span>

          <h1 className="tracking-wider md:text-3xl text-xl">Revel Burger</h1>

          </div>
          <IconArrowDown className="animate-bounce fill-white mt-8 md:size-14 " />        
          </div>

      </div>
      <img src={imgLogo} alt="logo" className="absolute z-20 rounded-full md:size-40  size-24 md:right-20 right-6 bottom-[8%]  shadow-2xl" />

      <div>
        <h1 className="md:text-4xl text-xl uppercase font-bold tracking-wider ml-10 my-8">
          Revel Burger
        </h1>
        <div className="flex mx-10 gap-2  mb-4 md:text-base text-sm">
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
