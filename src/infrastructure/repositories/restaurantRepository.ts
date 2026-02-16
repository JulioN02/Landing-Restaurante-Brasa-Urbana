import type {
  Producto,
  Testimonio,
  Restaurante,
  ImagenGaleria
} from "../../domain/types";

import { productosData } from "../data/productsData"
import { testimoniosData } from "../data/testimonialsData";
import { restauranteData } from "../data/restaurantData";
import { galleryData } from "../data/galleryData";

// =======================================
// Restaurant Repository (Local v1)
// =======================================

export const restaurantRepository = {
  obtenerProductos(): Producto[] {
    return [...productosData];
  },

  obtenerTestimonios(): Testimonio[] {
    return [...testimoniosData];
  },

  obtenerRestaurante(): Restaurante {
    return { ...restauranteData };
  },

  obtenerGaleria(): ImagenGaleria[] {
    return [...galleryData];
  }
};
