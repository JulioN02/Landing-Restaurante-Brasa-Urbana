import type { ImagenGaleria } from "../../domain/types";

export const renderGaleria = (
  contenedor: HTMLElement,
  imagenes: ImagenGaleria[]
): void => {
  contenedor.innerHTML = imagenes
    .map(
      (img) => `
      <article class="gallery-item">
        <img src="${img.url}" alt="${img.alt}" loading="lazy"/>
      </article>
    `
    )
    .join("");
};
