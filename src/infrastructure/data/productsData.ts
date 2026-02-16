import type { Producto } from "../../domain/types";

export const productosData: Producto[] = [
  {
    id: "p1",
    nombre: "Tomahawk al Carbón",
    descripcion: "500g de corte premium acompañado de papas rústicas.",
    precio: 120000,
    categoria: "cortes",
    imagen: "/assets/images/tomahawk.jpg",
    esDestacado: true
  },
  {
    id: "p2",
    nombre: "Hamburguesa Brasa",
    descripcion: "Carne 200g, queso cheddar, cebolla caramelizada.",
    precio: 35000,
    categoria: "hamburguesas",
    imagen: "/assets/images/burger.jpg",
    esDestacado: false
  },
  {
    id: "p3",
    nombre: "Chorizo Artesanal",
    descripcion: "Entrada tradicional a la parrilla.",
    precio: 18000,
    categoria: "entradas",
    imagen: "/assets/images/chorizo.jpg",
    esDestacado: false
  },
  {
    id: "p4",
    nombre: "Papas Rústicas",
    descripcion: "Acompañamiento crocante con salsa especial.",
    precio: 15000,
    categoria: "acompanamientos",
    imagen: "/assets/images/papas.jpg",
    esDestacado: false
  }
];
