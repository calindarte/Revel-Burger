const CardBurger = ({ name, description, price, image }) => {
  return (
    <div className="bg-[#f5f5f5] flex  m-3 rounded-lg gap-16 p-6 shadow-2xl relative">
      <div className=" overflow-hidden rounded-2xl">
        <img src={image} alt="image" className="size-40 object-cover" />
      </div>

      <div className="text-zinc-950 flex flex-col gap-2 py-4 ">
        <h1 className="font-bold uppercase text-lg">{name}</h1>
        <p>{description}</p>
        <span className="font-semibold">${price}</span>
        <div>

        <button className="bg-zinc-900 rounded-full p-2 flex absolute right-12 top-[40%] ">
          <span className="material-symbols-outlined text-white">add</span>
        </button>
        </div>
      </div>
    </div>
  );
};

export default CardBurger;
