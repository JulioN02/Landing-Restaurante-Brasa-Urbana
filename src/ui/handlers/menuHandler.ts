import { obtenerProductosPorCategoria, obtenerProductos } from "../../application/productService";
import type { Categoria } from "../../domain/types";
import { renderProductos } from "../render/productRender";

export const initMenuHandler = (): void => {
  const filtros = document.getElementById("menu-filters");
  const contenedor = document.getElementById("menu-container");

  if (!filtros || !contenedor) return;

  filtros.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (!target.classList.contains("filter-btn")) return;

    // Gestionar estado visual
    filtros.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("is-active"));
    target.classList.add("is-active");

    const categoria = target.dataset.categoria;

    if (!categoria) return;

    if (categoria === "todos") {
      const productos = obtenerProductos();
      renderProductos(contenedor, productos);
    } else {
      const productos = obtenerProductosPorCategoria(categoria as Categoria);
      renderProductos(contenedor, productos);
    }
  });
};
