import type { ImagenGaleria } from "../domain/types";
import { restaurantRepository } from "../infrastructure/repositories/restaurantRepository";

export const obtenerGaleria = (): ImagenGaleria[] => {
  return restaurantRepository.obtenerGaleria();
};
