import { useState } from "react";
import { Link } from "react-router-dom";
import imgWhatsapp from "../images/logoWhatsapp.png"
import Swal from "sweetalert2";

const OrderDomicilio = ({orderProduct, calculateTotalPrice}) => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [comment, setComment] = useState("");

  const handleSendOrder = () => {

    if (!name || !phone || !address || !neighborhood || !paymentMethod || orderProduct.length === 0) {
      Swal.fire({
          position: "center",
          icon: "error",
          title: "Por favor, complete todos los campos",
          showConfirmButton: false,
          timer: 1500,
      });
      return;
    }
   
    const formattedOrder = orderProduct.map(product => `${product.name} x${product.quantity}`).join(", ");
    const totalPrice = calculateTotalPrice();

    const message = `Hola, me gustaría hacer un domicilio con los siguientes detalles:\n
    Resumen Pedido: ${formattedOrder}\n
    Subtotal: $${totalPrice} COP\n
    Nombres: ${name}\n
    Teléfono: ${phone}\n
    Dirección: ${address}\n
    Barrio: ${neighborhood}\n
    Forma de pago: ${paymentMethod}\n
    Comentario: ${comment}`;

    const phoneNumber = "3013109339"; // Reemplaza este número con el número de WhatsApp específico
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <form className="flex flex-col gap-4 my-4 ">
        <div className="relative">
          <input
            type="text"
            placeholder="Nombres"
            className="  px-8 py-2 block w-full border border-gray-300 rounded-md shadow-sm "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          

          <span className="material-symbols-outlined absolute top-2 left-1.5">
person
</span>
        
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Teléfono"
            className="px-8 py-2 block w-full border border-gray-300 rounded-md shadow-sm "
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <span className="material-symbols-outlined absolute top-2 left-1.5">
phone_iphone
</span>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Dirección"
            className="px-8 py-2 block w-full border border-gray-300 rounded-md shadow-sm "
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <span className="material-symbols-outlined absolute top-2 left-1.5">
home
</span>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Barrio"
            className="px-8 py-2 block w-full border border-gray-300 rounded-md shadow-sm "
            value={neighborhood}
            onChange={(e) => setNeighborhood(e.target.value)}
          />
          <span className="material-symbols-outlined absolute top-2 left-1.5">
distance
</span>
        </div>
        <div>

          <select
          
            className="p-2 block w-full border border-gray-300 rounded-md shadow-sm "
            value={paymentMethod}
            
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="" disabled>Seleccione Forma de Pago</option>
            <option value="Efectivo">Efectivo</option>
            <option value="Transferencia">Transferencia</option>
            <option value="Datafono">Datafono</option>
          </select>
        </div>
        <div>
          <textarea
            className="px-4 py-2 block w-full border border-gray-300 rounded-md shadow-sm"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Ingrese algun Comentario (Opcional)"
          />
        </div>
        <div className="my-4 text-center text-sm">
        <span>
        Al dar click en enviar, aceptas nuestros Términos y condiciones y las políticas de privacidad.
        </span>

        </div>
        <div className="flex flex-col gap-4">
          <button
            type="button"
            className="bg-green-600 hover:bg-green-500 w-full py-3 flex items-center justify-center gap-2 rounded-md text-white font-medium"
            onClick={handleSendOrder}
          >
          <img src={imgWhatsapp} alt="" className="size-7 " />
          <span>

            Enviar por WhatsApp
          </span>
          </button>
          <Link to="/order">
                <button className="bg-zinc-900  hover:bg-zinc-700 text-white rounded-md py-4 w-full flex justify-center gap-1">
                  <span className="material-symbols-outlined ">arrow_back</span>
                  Volver a la Orden
                </button>
           </Link>
        </div>
      </form>
    </div>
  );
};

export default OrderDomicilio;
