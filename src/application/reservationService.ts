import { generarMensajeReserva } from "../domain/restaurant";
import { restaurantRepository } from "../infrastructure/repositories/restaurantRepository";

// =======================================
// Generar mensaje plano
// =======================================

export const crearMensajeReserva = (
  fecha: string,
  cantidadPersonas: number
): string => {
  const restaurante = restaurantRepository.obtenerRestaurante();

  return generarMensajeReserva(
    restaurante,
    fecha,
    cantidadPersonas
  );
};

// =======================================
// Generar enlace WhatsApp
// =======================================

export const generarLinkWhatsApp = (
  fecha: string,
  cantidadPersonas: number
): string => {
  const restaurante = restaurantRepository.obtenerRestaurante();

  const mensaje = generarMensajeReserva(
    restaurante,
    fecha,
    cantidadPersonas
  );

  const mensajeCodificado = encodeURIComponent(mensaje);

  return `https://wa.me/${restaurante.telefono}?text=${mensajeCodificado}`;
};
