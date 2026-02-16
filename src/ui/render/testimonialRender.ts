import type { Testimonio } from "../../domain/types";

export const renderTestimonios = (
  contenedor: HTMLElement,
  testimonios: Testimonio[]
): void => {
  contenedor.innerHTML = testimonios
    .map(
      (t) => `
      <article class="testimonial">
        <p>"${t.comentario}"</p>
        <strong>${t.nombreCliente}</strong>
        <span>⭐ ${t.calificacion}</span>
      </article>
    `
    )
    .join("");
};
