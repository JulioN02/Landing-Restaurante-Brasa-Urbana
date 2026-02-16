import type { Categoria, Producto } from "../domain/types";
import {
  obtenerProductoDestacado,
  filtrarProductosPorCategoria
} from "../domain/product";

import { restaurantRepository } from "../infrastructure/repositories/restaurantRepository";

let productosCache: Producto[] | null = null;

const getProductosCache = (): Producto[] => {
  if (!productosCache) {
    productosCache = restaurantRepository.obtenerProductos();
  }
  return productosCache;
};

export const obtenerProductos = (): Producto[] => {
  return getProductosCache();
};

export const obtenerDestacado = (): Producto | null => {
  return obtenerProductoDestacado(getProductosCache());
};

export const obtenerProductosPorCategoria = (
  categoria: Categoria
): Producto[] => {
  return filtrarProductosPorCategoria(getProductosCache(), categoria);
};

export const obtenerCategorias = (): Categoria[] => {
  const productos = getProductosCache();
  const categorias = productos.map(p => p.categoria);
  return Array.from(new Set(categorias));
};
