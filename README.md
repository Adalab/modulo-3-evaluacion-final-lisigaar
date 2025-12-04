# ✨ El Mapa del Merodeador Digital (Harry Potter Character Finder) ✨

> "Juro solemnemente que mis intenciones no son buenas." — *Un estudiante de magia con ganas de programar.*

Este proyecto no es solo una aplicación web; es nuestra propia versión del **Mapa del Merodeador**, permitiéndote rastrear y catalogar a los estudiantes, profesores y criaturas del mundo mágico de Hogwarts. Construido con React y potenciado por la magia oscura del estado (y un poco de `npm`), esta aplicación convierte un listado plano de personajes en una experiencia interactiva y mágica.

---

## 📜 El Grimorio del Proyecto (Tecnologías)

Toda gran obra de magia requiere herramientas poderosas. Hemos empleado los siguientes encantamientos y bibliotecas:

* **React (Hechizo Base):** La varita mágica para construir nuestra interfaz de usuario y manejar el *render* condicional.
* **React Router (Traslador):** Permite la navegación sin problemas a la vista de detalle de cada personaje, haciendo la URL compartible.
* **API de Hogwarts:** `https://hp-api.onrender.com/` — Nuestro Pensadero, de donde extraemos todos los datos de los personajes.
* **Diseño Oscuro y Dorado:** Estilos CSS temáticos para sumergirte en el ambiente de las películas.

---

## 🔎 Rastrea al Objetivo (Funcionalidades)

Tu misión es localizar a cualquier habitante del mundo mágico. Para ello, cuentas con las siguientes funciones de búsqueda:

### 1. El Gran Comedor (Listado Inicial)

Al cargar la página, se muestra el listado completo de personajes, incluyendo su **foto**, **nombre** y **especie**. Si la foto no existe en la API, usamos un hechizo *placeholder* para rellenar el espacio.

### 2. El Espejo de Oesed (Filtros)

* **Busca por Nombre:** Utiliza el campo de texto para escribir el nombre del personaje. La búsqueda es permisiva y no distingue mayúsculas de minúsculas.
* **Filtra por Casa:** Usa el `select` para ver solo a los miembros de la casa seleccionada. La casa **Gryffindor** es la selección por defecto al cargar la página.
* **Botón `Obliviate` (Reset):** Regresa todos los filtros a su estado inicial.

### 3. La Sala de los Menesteres (Vista de Detalle)

Al hacer clic en cualquier tarjeta, viajas a la vista de detalle. Aquí encontrarás información crucial:
* **Emblema y Casa:** La casa se muestra con su respectivo emblema.
* **Estatus:** ¿Está Vivo/a 🤍 o Muerto/a ☠️?.
* **Datos Clave:** Género, especie y nombres alternativos.

---

## 🪄 Cómo Lanzar el Encantamiento. Trae la Varita (Clonar)

```bash
https://beta.adalab.es/modulo-3-evaluacion-final-lisigaar/