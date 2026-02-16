import { generarLinkWhatsApp } from "../../application/reservationService";

export const initReservationHandler = (): void => {
  const boton = document.getElementById("whatsapp-cta");

  if (!boton) return;

  boton.addEventListener("click", (event) => {
    event.preventDefault();

    const fecha = new Date().toISOString().split("T")[0];
    const cantidad = 2;

    const link = generarLinkWhatsApp(fecha, cantidad);

    window.open(link, "_blank");
  });
};
