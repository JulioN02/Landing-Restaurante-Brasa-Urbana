import type { Testimonio } from "./types";

// =======================================
// Obtener promedio de calificación
// =======================================

export const calcularPromedioCalificacion = (
  testimonios: Testimonio[]
): number => {
  if (testimonios.length === 0) return 0;

  const total = testimonios.reduce(
    (acumulador, testimonio) => acumulador + testimonio.calificacion,
    0
  );

  return total / testimonios.length;
};
