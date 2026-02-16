import type { Restaurante } from "../../domain/types";

export const renderFooter = (
  contenedor: HTMLElement,
  restaurante: Restaurante
): void => {
  const year = new Date().getFullYear();

  contenedor.textContent = `© ${year} ${restaurante.nombre}. Todos los derechos reservados.`;
};
