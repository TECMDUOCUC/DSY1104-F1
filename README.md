# DSY1104-F1
Evaluación formativa 1 para FULLSTACK II 26/08/2026
---

# Pieca®. The Ultimate Rock E-Commerce Platform

> *"Entregandote las mejores piedras para ti."*

---

## 📌 Project Overview

**Pieca®** Es un sitio web que te permite acceder a las MEJORES piedras de todo el mundo. Contamos con un catálogo de más de 10 piedras.

---

## 🚀 Características

- **🪨 Catálogo Curado**: Explora una extensa variedad de piedras categorizadas por color, forma, textura y singularidad geológica.
- **🔍 Búsqueda y Filtro Interactivo**: Filtra productos dinámicamente según diversos parámetros en tiempo real.
- **📄 Vista de Detalle del Producto**: Visualiza los atributos individuales de cada piedra, imágenes de alta resolución e identificadores únicos.
- **🔐 Autenticación de Usuarios**: Flujos de trabajo simplificados de registro e inicio de sesión con validación de entradas en el lado del cliente.
- **✉️ Contacto y Soporte**: Formulario integrado de consultas para usuarios con límites estrictos de caracteres y reglas de validación.
- **🎬 Destacados de Medios y Patrocinadores**: Presentación dinámica de medios integrados.

---

## 🗂️ Estructura del Proyecto

```text
pieca-e-commerce/
├── index.html            # Página de inicio con sección principal, carrusel interactivo e historia de la empresa
├── catalog.html          # Cuadrícula del catálogo principal de productos con funcionalidad de búsqueda en vivo
├── product.html          # Vista detallada dinámica para productos individuales de piedras
├── register.html         # Interfaz de registro de cuentas de usuario
├── login.html            # Interfaz de autenticación de usuarios
├── contact.html          # Formulario de soporte al cliente y comunicación
└── assets/
    ├── css/
    │   └── main.css      # Estilos globales, configuraciones de diseño y tipografía
    ├── js/
    │   ├── main.js       # Frases dinámicas del encabezado y lógica del carrusel en la página de inicio
    │   ├── catalog.js    # Filtro de búsqueda y comportamiento de las tarjetas interactivas de productos
    │   ├── account.js    # Manejo de formularios para el registro e inicio de sesión de usuarios
    │   └── contact.js    # Validación de mensajes y procesamiento de comentarios
    ├── images/           # Repositorio de recursos que contiene las imágenes de los productos
    └── media/            # Recursos de video y contenido enriquecido

```

---

## 💎 Destacados del Inventario

Pieca® ofrece un catálogo de 19 piedras seleccionadas a mano:

| ID del Artículo | Nombre | Clasificación / Característica |
| --- | --- | --- |
| `1` | Piedra algo ovalada | Ligeramente Ovalada |
| `2` | Piedra más ovalada | Alta Ovalidad |
| `3` | Piedra | Piedra Estándar de Referencia |
| `4` | Piedra rocosa | Alta Densidad / Rugosa |
| `5` | Piedra porosa | Textura Porosa |
| `6` | Piedra piedrosa | Composición Ultra-Rocosa |
| `7` | Piedra plana | Superficie Plana / Candidata para Hacer Sapo |
| `8` | Piedra no plana | Topografía No Plana |
| `9` | Piedra puntiaguda | Borde Puntiagudo |
| `10` | Piedra blanca | Blanco de Alta Luminosidad |
| `11` | Piedra no blanca | Subtono Oscuro / No Blanco |
| `12` | Piedra café | Tono Marrón Terroso |
| `13` | Piedra bipolar | Bicolor / Multifacética |
| `14` | Piedra negra | Negro Grado Obsidiana |
| `15` | Piedra ondulada | Contorno Ondulado |
| `16` | Piedra Stone | Grado Clásico Internacional |
| `17` | Piedra musgosa | Superficie Orgánica Cubierta de Musgo |
| `18` | Piedra Piedrosa | Grado Doble-Rocoso Premium |
| `19` | Piedra Sigma | Espécimen Físico Máximo |

---
## 🛠️ Stack Técnico y Validación

* **Marcado**: HTML5 Semántico (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`)
* **Estilos**: CSS Modular (`assets/css/main.css`) utilizando animaciones CSS (`.fade`, `.fadeafter1s`) y diseños con flexbox.
* **Scripts del Cliente**: JavaScript Vanila (ES6+) con modelo de ejecución diferida (`defer`).
* **Sanitización de Entradas**: Filtros de entrada con expresiones regulares en el lado del cliente (`replace(/[^a-zA-Z]/g, '')`) garantizando reglas estrictas para los campos de nombre.

```
© 2026 Pieca®. All rights reserved.  
*All stones sold are 100% authentic, hand-gathered, and legally compliant.*

For legal purposes, Pieca IS NOT REGISTERED NOR HAS ANY RIGHTS RESERVED and this is a FAKE WEBSITE.
