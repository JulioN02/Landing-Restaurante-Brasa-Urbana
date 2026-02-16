import type { Producto } from "../../domain/types";

export const productosData: Producto[] = [
  {
    id: "p1",
    nombre: "Tomahawk al Carbón",
    descripcion: "500g de corte premium acompañado de papas rústicas.",
    precio: 120000,
    categoria: "cortes",
    imagen: "/src/assets/images/featured/tomahack.jpeg",
    esDestacado: true,
  },
  {
    id: "p2",
    nombre: "Hamburguesa Brasa",
    descripcion: "Carne 200g, queso cheddar, cebolla caramelizada.",
    precio: 35000,
    categoria: "hamburguesas",
    imagen: "/src/assets/images/menu/hamburguesas/hamburguesa-artesanal.jpeg",
    esDestacado: false,
  },
  {
    id: "p3",
    nombre: "Chorizo Artesanal",
    descripcion: "Entrada tradicional a la parrilla.",
    precio: 18000,
    categoria: "entradas",
    imagen: "/src/assets/images/menu/entradas/entrada-chorizo.jpg",
    esDestacado: false,
  },
  {
    id: "p4",
    nombre: "Papas Rústicas",
    descripcion: "Acompañamiento crocante con salsa especial.",
    precio: 15000,
    categoria: "acompanamientos",
    imagen: "/src/assets/images/menu/acompañamientos/papas-rusticas.jpg",
    esDestacado: false,
  },
];
