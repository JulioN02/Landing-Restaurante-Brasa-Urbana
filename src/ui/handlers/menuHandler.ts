import { obtenerProductosPorCategoria } from "../../application/productService";
import type { Categoria } from "../../domain/types";
import { renderProductos } from "../render/productRender";

export const initMenuHandler = (): void => {
  const filtros = document.getElementById("menu-filters");
  const contenedor = document.getElementById("menu-container");

  if (!filtros || !contenedor) return;

  filtros.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;

    const categoria = target.dataset.categoria as Categoria | undefined;

    if (!categoria) return;

    const productos = obtenerProductosPorCategoria(categoria);
    renderProductos(contenedor, productos);
  });
};
