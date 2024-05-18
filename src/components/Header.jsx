import imgLogo from "../images/logoRevelBurger.jpg";
import imgBurger from "../images/deliciosa-hamburguesa-ingredientes-frescos.png";
import IconArrowDown from "./IconArrowDown";

const Header = () => {
  return (
    <div>
      <div className="bg-gradient-to-l from-zinc-800 via-zinc-950 to-zinc-950 flex gap-20 py-20 justify-center ">
        <div>

        <img src={imgBurger} alt="burger" className="size-96 object-cover"/>
        </div>
      
        <div className="text-white font-bold uppercase text-4xl flex flex-col items-center justify-center">
          <div className="flex flex-col gap-4 items-center">
          <span className="text-5xl text-yellow-500 ">Catálogo de Hamburguesas</span>

          <h1 className="tracking-wider">Revel Burger</h1>

          </div>
          <IconArrowDown className="animate-bounce fill-white mt-8 size-14 " />        
          </div>

      </div>
      <img src={imgLogo} alt="logo" className="absolute rounded-full size-40 right-20 bottom-0 shadow-2xl " />

    </div>
  );
};

export default Header;
