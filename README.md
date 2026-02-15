# Brasa Urbana — Sistema Web Comercial Modular (v1.0)

Landing Page profesional orientada a conversión para restaurante ficticio **Brasa Urbana**, construida con Vite + TypeScript (fundamentos), bajo arquitectura modular por capas.  

Este proyecto no es una maqueta estática: es la base técnica de un sistema comercial escalable hacia arquitectura fullstack.

## 1. Propósito

Construir una Landing Page de conversión para restaurantes locales con:

- Arquitectura modular clara
- Separación estricta de responsabilidades
- Alto rendimiento
- Escalabilidad futura hacia API REST
- Base comercial reutilizable

Diseñado para evolucionar a:

- Backend con Node + Express + PostgreSQL
- Autenticación JWT
- Panel administrativo
- SaaS multi-tenant

## 2. Stack Tecnológico

- Vite
- TypeScript (uso limitado a fundamentos)
- HTML semántico
- CSS modular con sistema de tokens
- JavaScript moderno (sin frameworks)

## 3. Arquitectura Aplicada

Arquitectura modular por capas:

UI → Application → Domain  
Infrastructure implementa contratos  
Domain no depende del DOM  

Objetivo: evitar acoplamiento, permitir migración futura a cliente-servidor y prevenir refactor destructivo.

## 4. Estructura del Proyecto
src/
├─ main.ts
├─ domain/
├─ application/
├─ infrastructure/
├─ ui/
├─ styles/
└─ assets/

### domain/
- Modelos tipados
- Reglas puras
- Lógica independiente del DOM

### application/
- Casos de uso
- Orquestación del flujo
- Transformación de datos

### infrastructure/
- Fuente de datos local
- Implementaciones concretas

### ui/
- Renderizado DOM
- Componentes
- Event handlers separados

### styles/
- Tokens CSS
- Sistema tipográfico
- Layout responsive

## 5. Requerimientos Funcionales (v1.0)

- Render dinámico desde datos tipados
- Filtro por categorías sin recarga
- Generación dinámica de enlace WhatsApp
- Producto destacado automático
- Botón flotante mobile persistente

## 6. Requerimientos No Funcionales

- Lighthouse > 90
- Carga inicial < 2s
- Mobile-first
- Accesibilidad AA
- HTML semántico correcto
- Sin layout shift significativo
