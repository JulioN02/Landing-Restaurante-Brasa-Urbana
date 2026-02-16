import {
  obtenerProductos,
  obtenerDestacado
} from "../application/productService";

import {
  obtenerTestimonios
} from "../application/testimonialService";

import {
  obtenerRestaurante
} from "../application/restaurantService";

import { renderProductos, renderProductoDestacado } from "./render/productRender";
import { renderTestimonios } from "./render/testimonialRender";
import { renderFooter } from "./render/restaurantRender";

import { initMenuHandler } from "./handlers/menuHandler";
import { initReservationHandler } from "./handlers/reservationHandler";

export const initUI = (): void => {
  const menuContainer = document.getElementById("menu-container");
  const testimonialContainer = document.getElementById("testimonials-container");
  const footerContainer = document.querySelector(".footer p");

  if (menuContainer) {
    const productos = obtenerProductos();
    renderProductos(menuContainer, productos);

    const destacado = obtenerDestacado();
    if (destacado) {
      const hero = document.getElementById("hero");
      if (hero) renderProductoDestacado(hero, destacado);
    }
  }

  if (testimonialContainer) {
    const testimonios = obtenerTestimonios();
    renderTestimonios(testimonialContainer, testimonios);
  }

  if (footerContainer) {
    const restaurante = obtenerRestaurante();
    renderFooter(footerContainer as HTMLElement, restaurante);
  }

  initMenuHandler();
  initReservationHandler();
};
