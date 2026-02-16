import {
  obtenerProductos,
  obtenerDestacado,
  obtenerCategorias
} from "../application/productService";

import {
  obtenerTestimonios
} from "../application/testimonialService";

import {
  obtenerGaleria
} from "../application/galleryService";

import {
  obtenerRestaurante
} from "../application/restaurantService";

import { renderProductos, renderProductoDestacado } from "./render/productRender";
import { renderFiltros } from "./render/filterRender";
import { renderTestimonios } from "./render/testimonialRender";
import { renderGaleria } from "./render/galleryRender";
import { renderFooter } from "./render/restaurantRender";

import { initMenuHandler } from "./handlers/menuHandler";
import { initReservationHandler } from "./handlers/reservationHandler";

export const initUI = (): void => {
  const menuContainer = document.getElementById("menu-container");
  const filterContainer = document.getElementById("menu-filters");
  const testimonialContainer = document.getElementById("testimonials-container");
  const galleryContainer = document.getElementById("gallery-container");

  if (menuContainer) {
    const productos = obtenerProductos();
    renderProductos(menuContainer, productos);

    if (filterContainer) {
      const categorias = obtenerCategorias();
      renderFiltros(filterContainer, categorias);
    }

    const destacado = obtenerDestacado();
    if (destacado) {
      const featuredContainer = document.getElementById("featured-container");
      if (featuredContainer) renderProductoDestacado(featuredContainer, destacado);
    }
  }

  if (testimonialContainer) {
    const testimonios = obtenerTestimonios();
    renderTestimonios(testimonialContainer, testimonios);
  }

  if (galleryContainer) {
    const imagenes = obtenerGaleria();
    renderGaleria(galleryContainer, imagenes);
  }

  const restaurante = obtenerRestaurante();
  renderFooter(restaurante);

  initMenuHandler();
  initReservationHandler();
};
