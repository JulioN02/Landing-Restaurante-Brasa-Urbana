// =============================
// CATEGORY
// =============================

export type Categoria =
  | "entradas"
  | "cortes"
  | "hamburguesas"
  | "acompanamientos"
  | "bebidas"
  | "cocteles";

// =============================
// PRODUCTO
// =============================

export type Producto = {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: Categoria;
  imagen: string;
  esDestacado: boolean;
};

// =============================
// TESTIMONIO
// =============================

export type Testimonio = {
  id: string;
  nombreCliente: string;
  comentario: string;
  calificacion: 1 | 2 | 3 | 4 | 5;
  imagen: string,
};

// =============================
// RESTAURANTE
// =============================

export type Restaurante = {
  nombre: string;
  telefono: string;
  direccion: string;
  horario: string;
  mensajeReservaBase: string;
};
