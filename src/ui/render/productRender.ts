import type { Producto } from "../../domain/types";

export const renderProductos = (
  contenedor: HTMLElement,
  productos: Producto[]
): void => {
  contenedor.innerHTML = productos
    .map(
      (producto) => `
      <article class="product-card">
        <img src="${producto.imagen}" alt="${producto.nombre}" class="product-card-image" loading="lazy"/>
        <div class="product-card-content">
          <h3 class="product-card-title">${producto.nombre}</h3>
          <p class="product-card-description">${producto.descripcion}</p>
          <strong class="product-card-price">$${producto.precio.toLocaleString()}</strong>
        </div>
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
    <article class="product-card is-featured">
      <img src="${producto.imagen}" alt="${producto.nombre}" class="product-card-image" loading="lazy"/>
      <div class="product-card-content">
        <h3 class="product-card-title">${producto.nombre}</h3>
        <p class="product-card-description">${producto.descripcion}</p>
        <strong class="product-card-price">$${producto.precio.toLocaleString()}</strong>
      </div>
    </article>
  `;
};
