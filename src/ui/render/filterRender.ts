import type { Categoria } from "../../domain/types";

export const renderFiltros = (
  contenedor: HTMLElement,
  categorias: Categoria[]
): void => {
  // Agregar opción "Todos" manualmente
  const todasBtn = `<button class="filter-btn is-active" data-categoria="todos">Todos</button>`;
  
  const botones = categorias
    .map(
      (cat) => `
      <button class="filter-btn" data-categoria="${cat}">
        ${cat.charAt(0).toUpperCase() + cat.slice(1)}
      </button>
    `
    )
    .join("");

  contenedor.innerHTML = todasBtn + botones;
};
