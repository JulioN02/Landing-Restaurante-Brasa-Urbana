import type { Restaurante } from "../domain/types";
import { restaurantRepository } from "../infrastructure/repositories/restaurantRepository";

// =======================================
// Obtener datos del restaurante
// =======================================

export const obtenerRestaurante = (): Restaurante => {
  return restaurantRepository.obtenerRestaurante();
};
