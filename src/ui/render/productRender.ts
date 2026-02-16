import type { Producto } from "../../domain/types";

export const renderProductos = (
  contenedor: HTMLElement,
  productos: Producto[]
): void => {
  contenedor.innerHTML = productos
    .map(
      (producto) => `
      <article class="menu-card">
        <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy"/>
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <strong>$${producto.precio.toLocaleString()}</strong>
      </article>
    `
    )
    .join("");
};

export const renderProductoDestacado = (
  contenedor: HTMLElement,
  producto: Producto
): void => {
  contenedor.innerHTML = `
    <article class="featured-product">
      <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy"/>
      <h2>${producto.nombre}</h2>
      <p>${producto.descripcion}</p>
      <strong>$${producto.precio.toLocaleString()}</strong>
    </article>
  `;
};
