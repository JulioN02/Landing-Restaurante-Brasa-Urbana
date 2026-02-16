import type { Testimonio } from "../domain/types";
import { calcularPromedioCalificacion } from "../domain/testimonial";
import { restaurantRepository } from "../infrastructure/repositories/restaurantRepository";

// =======================================
// Obtener testimonios
// =======================================

export const obtenerTestimonios = (): Testimonio[] => {
  return restaurantRepository.obtenerTestimonios();
};

// =======================================
// Obtener promedio de rating
// =======================================

export const obtenerPromedioCalificacion = (): number => {
  const testimonios = restaurantRepository.obtenerTestimonios();
  return calcularPromedioCalificacion(testimonios);
};
