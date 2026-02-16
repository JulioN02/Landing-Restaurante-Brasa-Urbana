import type { Producto, Categoria } from "./types";

// =======================================
// Obtener producto destacado
// =======================================

export const obtenerProductoDestacado = (
  productos: Producto[]
): Producto | null => {
  const destacado = productos.find((p) => p.esDestacado === true);
  return destacado ?? null;
};

// =======================================
// Filtrar productos por categoría
// =======================================

export const filtrarProductosPorCategoria = (
  productos: Producto[],
  categoria: Categoria
): Producto[] => {
  return productos.filter((p) => p.categoria === categoria);
};
