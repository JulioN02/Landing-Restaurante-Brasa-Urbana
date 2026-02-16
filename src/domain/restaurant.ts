import type { Restaurante } from "./types";

// =======================================
// Generar mensaje base de reserva
// =======================================

export const generarMensajeReserva = (
  restaurante: Restaurante,
  fecha: string,
  cantidadPersonas: number
): string => {
  return `${restaurante.mensajeReservaBase} para ${cantidadPersonas} personas el día ${fecha}.`;
};
