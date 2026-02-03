Entrevista técnica Frontend | Ejercicio

# Objetivo del Ejercicio

El propósito de esta prueba es evaluar tus habilidades como desarrollador frontend para
aplicaciones web.

Lineamientos

* El plazo para completar y entregar el ejercicio es de 3 días. *

Framework: Puedes utilizar el framework con el que te sientas más cómodo.
Diseño: Debes seguir el diseño propuesto.

Una vez que termines el ejercicio, por favor, compártenos el enlace a tu repositorio de código
(puede estar en GitHub, GitLab o la plataforma que prefieras).

Requisitos

Es indispensable que cumplas con todas las funcionalidades obligatorias. Adicionalmente,
encontrarás una lista de requisitos deseables; implementarlos nos dará un mayor contexto de tus
habilidades técnicas.

funcionalidades requeridas

Lista Principal de Personajes

1. Obtener datos: Consumir el endpoint de la RickAndMortyAPI para obtener la
lista de personajes.
2. Renderizado inicial: Mostrar en pantalla los primeros 20 personajes obtenidos
de la API.
3. Modal de detalles: Al hacer clic sobre la tarjeta de un personaje, se debe abrir
un modal que muestre su información detallada.
4. Gestión de favoritos: Cada personaje debe tener un botón para añadirlo o
eliminarlo de la lista de favoritos.

Sección de Favoritos

1. Mostrar lista: Desplegar en una sección aparte la lista de todos los personajes
que el usuario haya marcado como favoritos.
2. Modal de detalles: Al igual que en la lista principal, al hacer clic en un personaje
de la lista de favoritos se debe abrir el modal con su información.
3. Eliminar de favoritos: Cada personaje en la lista de favoritos debe tener una
opción para poder ser eliminado de dicha lista.

Entrevista técnica Frontend | Ejercicio

Requisitos deseables

1. Paginación: Implementar un sistema de paginación que permita navegar entre
todos los personajes disponibles en la API, no solo los primeros 20.
2. Buscador: Añadir una funcionalidad de búsqueda para filtrar los personajes por
nombre en tiempo real.
3. Arquitectura de Componentes: La arquitectura de la aplicación deberá estar
modularizada y basada en componentes reutilizables.
4. Estado Global: Implementar un manejador de estado global para gestionar la
información de la aplicación de forma centralizada (ej. Context API, Redux, Pinia,
etc.).
5. Pruebas Unitarias: Añadir cobertura de pruebas unitarias para los componentes
o funcionalidades clave. Se puede utilizar la librería de preferencia compatible con
el framework elegido (ej. Jest, Vitest).