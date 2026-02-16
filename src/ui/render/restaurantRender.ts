import type { Restaurante } from "../../domain/types";

export const renderFooter = (
  restaurante: Restaurante
): void => {
  const yearElement = document.getElementById("current-year");
  const nameElement = document.getElementById("restaurant-name");

  if (yearElement) yearElement.textContent = new Date().getFullYear().toString();
  if (nameElement) nameElement.textContent = restaurante.nombre;
};
