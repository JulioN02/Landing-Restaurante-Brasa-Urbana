import type { Testimonio } from "../../domain/types";

export const renderTestimonios = (
  contenedor: HTMLElement,
  testimonios: Testimonio[]
): void => {
  contenedor.innerHTML = testimonios
    .map(
      (t) => `
      <article class="testimonial-card">
        <header class="testimonial-card-header">
          <img src="${t.imagen}" alt="${t.nombreCliente}" class="testimonial-card-avatar" loading="lazy"/>
          <div>
            <h3 class="testimonial-card-name">${t.nombreCliente}</h3>
            <div class="testimonial-card-rating">
              ${Array(t.calificacion).fill('<span class="star">★</span>').join("")}
            </div>
          </div>
        </header>
        <p class="testimonial-card-text">"${t.comentario}"</p>
      </article>
    `
    )
    .join("");
};
