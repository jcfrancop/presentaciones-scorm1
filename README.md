# Presentaciones SCORM

Microcurso interactivo desarrollado con **React + Vite** para enseñar un flujo de trabajo orientado a la creación y organización de presentaciones.

La aplicación propone una experiencia de aprendizaje secuencial en la que el estudiante recopila fuentes, responde preguntas, utiliza una simulación de síntesis con IA y construye progresivamente los elementos necesarios para definir una presentación.

> **Estado actual:** aplicación web interactiva en React. La integración con SCORM aún está pendiente y forma parte de la siguiente fase del proyecto.

---

## 🎯 Objetivo del proyecto

El proyecto busca convertir un proceso de elaboración de presentaciones en una experiencia de aprendizaje interactiva.

El estudiante recorre diferentes etapas relacionadas con:

- recopilación de información;
- selección y síntesis de fuentes;
- uso crítico de herramientas de IA;
- definición de un storyboard;
- toma de decisiones sobre el contenido;
- comprobación del aprendizaje mediante preguntas interactivas.

La intención es que la interacción no se limite a mostrar contenido, sino que el estudiante tenga que **tomar decisiones y realizar acciones para avanzar**.

---

## 🧩 Flujo del microcurso

La aplicación está organizada como una secuencia de pantallas:

```text
Welcome
   ↓
Instructions
   ↓
Introduction
   ↓
DragFiles
   ↓
Question1
   ↓
Notebook
   ↓
Question2
   ↓
StoryBoard
   ↓
Message
   ↓
DefStoryboard
   ↓
Question3
   ↓
FinalSteep
   ↓
Final
```

La navegación se controla actualmente desde `App.jsx` mediante un estado llamado `currentScreen`.

---

## 🖥️ Pantallas

### Welcome

Pantalla inicial del microcurso.

### Instructions

Presenta las instrucciones necesarias antes de comenzar la experiencia.

### Introduction

Introduce el tema y el flujo de trabajo que seguirá el estudiante.

### DragFiles

Actividad de **arrastrar y soltar** en la que el estudiante debe recopilar diferentes tipos de fuentes:

- Documento
- Artículo
- Entrevista
- Podcast
- Video
- Página web

La actividad utiliza estado local de React para determinar qué fuentes han sido recopiladas.

### Question1

Pregunta de comprobación relacionada con la recopilación de información en diferentes formatos.

El estudiante recibe retroalimentación y solo puede continuar cuando selecciona la respuesta correcta.

### Notebook

Simulación de un proceso de síntesis utilizando Gemini Notebook.

El estudiante arrastra las fuentes hacia un área de trabajo y la aplicación simula un proceso de procesamiento antes de mostrar las fuentes sintetizadas.

> Actualmente esta pantalla es una **simulación**. No existe una integración real con Gemini ni procesamiento real de documentos.

### Question2

Segunda actividad de comprobación del aprendizaje.

### StoryBoard

Presenta el concepto y/o construcción de un storyboard para organizar la presentación.

### Message

Actividad o contenido intermedio relacionado con la construcción del mensaje de la presentación.

### DefStoryboard

Profundiza en la definición del storyboard.

### Question3

Tercera actividad de comprobación del aprendizaje.

### FinalSteep

Pantalla previa al cierre del microcurso.

### Final

Pantalla final de la experiencia.

---

## 🛠️ Tecnologías

El proyecto utiliza:

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- React DOM
- ESLint
- React Compiler
- CSS
- JavaScript / JSX

Las dependencias y scripts están definidos en `package.json`.

---

## 📁 Estructura del proyecto

```text
presentaciones-scorm1/
│
├── public/
│   ├── logo-avaco1 separador.png
│   └── logo-unibague_w.png
│
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components/
│   │   ├── Footer.jsx
│   │   └── footer.css
│   │
│   ├── screens/
│   │   ├── Welcome.jsx
│   │   ├── Instructions.jsx
│   │   ├── Introduction.jsx
│   │   ├── DragFiles.jsx
│   │   ├── Question1.jsx
│   │   ├── Notebook.jsx
│   │   ├── Question2.jsx
│   │   ├── StoryBoard.jsx
│   │   ├── Message.jsx
│   │   ├── DefStoryboard.jsx
│   │   ├── Question3.jsx
│   │   ├── FinalSteep.jsx
│   │   └── Final.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🚀 Instalación

### Requisitos

Se necesita tener instalado:

- Node.js
- npm

Se recomienda utilizar una versión reciente de Node.js compatible con las versiones actuales de React y Vite.

### Clonar el repositorio

```bash
git clone https://github.com/jcfrancop/presentaciones-scorm1.git
```

Entrar en el proyecto:

```bash
cd presentaciones-scorm1
```

### Instalar dependencias

```bash
npm install
```

---

## 💻 Desarrollo local

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local desde la que se puede acceder a la aplicación.

El servidor de desarrollo permite trabajar con **Hot Module Replacement (HMR)**, por lo que los cambios realizados en el código se reflejan durante el desarrollo.

---

## 📦 Generar una versión de producción

Para generar el build:

```bash
npm run build
```

Los archivos resultantes se generan normalmente en:

```text
dist/
```

Para comprobar localmente el build:

```bash
npm run preview
```

---

## 🔍 Lint

El proyecto incluye ESLint.

Para ejecutar la revisión:

```bash
npm run lint
```

---

## 🧠 Gestión actual del estado

La navegación del microcurso utiliza el estado de React.

En `App.jsx` se mantiene la pantalla actual:

```js
const [currentScreen, setCurrentScreen] = useState("welcome");
```

Cada pantalla recibe `setCurrentScreen` y puede solicitar el cambio a otra pantalla.

Las actividades interactivas también utilizan estado local. Por ejemplo, `DragFiles.jsx` mantiene el estado de las fuentes recopiladas y `Question1.jsx` mantiene la respuesta seleccionada.

### Limitación actual

El estado no se persiste fuera de la sesión de React.

Por lo tanto, si el usuario recarga la aplicación, el progreso del microcurso no se recupera.

Esta limitación será abordada durante la integración con SCORM.

---

## 🎓 Integración SCORM

La aplicación todavía **no incluye una implementación SCORM**.

El objetivo de la siguiente fase es convertir la aplicación en un paquete SCORM compatible con **Moodle 4**.

La integración deberá permitir, como mínimo:

- inicializar la comunicación con el LMS;
- identificar el estado de la actividad;
- guardar el progreso;
- recuperar el progreso al volver a abrir el curso;
- registrar las respuestas de las actividades;
- registrar la puntuación;
- registrar la finalización del curso;
- cerrar correctamente la sesión SCORM.

La arquitectura prevista será similar a:

```text
React
 │
 ├── Interfaz del microcurso
 │
 ├── Estado del curso
 │
 └── Adaptador SCORM
        │
        ├── Inicializar
        ├── Leer datos
        ├── Guardar datos
        ├── Guardar puntuación
        └── Finalizar
                │
                ▼
              Moodle
```

La primera implementación SCORM estará orientada a **SCORM 1.2**, salvo que durante el desarrollo se determine que SCORM 2004 ofrece una ventaja necesaria para este proyecto.

---

## 📊 Datos que se deberán persistir en SCORM

Como parte de la integración con Moodle se deberá definir una estrategia para almacenar información como:

```text
Estado del curso
Progreso
Pantalla actual
Respuestas
Puntuación
Actividades completadas
Estado de finalización
```

Por ejemplo:

```text
lesson_status
lesson_location
score.raw
suspend_data
```

La implementación definitiva dependerá de la versión SCORM seleccionada y de las necesidades de seguimiento del microcurso.

---

## 🏗️ Próximas mejoras

### Integración SCORM

- [ ] Implementar adaptador SCORM.
- [ ] Crear `imsmanifest.xml`.
- [ ] Configurar el build para generar un paquete SCORM.
- [ ] Persistir el progreso del estudiante.
- [ ] Recuperar el progreso al reabrir el curso.
- [ ] Registrar la puntuación.
- [ ] Registrar el estado de finalización.
- [ ] Probar el paquete en Moodle 4.

### Arquitectura

- [ ] Centralizar el estado global del curso.
- [ ] Separar navegación, estado pedagógico y presentación.
- [ ] Definir un modelo común para las actividades.
- [ ] Reducir la dependencia de strings para controlar la navegación.

### Experiencia de usuario

- [ ] Revisar comportamiento responsive.
- [ ] Mejorar accesibilidad.
- [ ] Unificar componentes visuales.
- [ ] Mejorar estados de feedback.
- [ ] Revisar transiciones entre pantallas.
- [ ] Optimizar la experiencia para diferentes tamaños de pantalla.

### Contenido

- [ ] Revisar textos de las actividades.
- [ ] Revisar consistencia pedagógica entre las preguntas.
- [ ] Definir criterios de evaluación.
- [ ] Determinar las condiciones exactas para completar el microcurso.

---

## ⚠️ Consideraciones actuales

### Simulación de Gemini Notebook

La actividad `Notebook.jsx` simula el procesamiento mediante un temporizador:

```text
Fuentes
   ↓
Arrastrar a Notebook
   ↓
Procesando...
   ↓
Fuentes sintetizadas
```

No existe actualmente una llamada a una API de Gemini ni procesamiento real de archivos.

### Persistencia

El progreso se mantiene únicamente en memoria mientras la aplicación está abierta.

### SCORM

El proyecto todavía no contiene:

```text
imsmanifest.xml
```

ni una capa de comunicación con la API SCORM del LMS.

Por tanto, el proyecto actual debe considerarse una **aplicación web interactiva previa a su empaquetado SCORM**.

---

## 👨‍💻 Desarrollo

El proyecto está pensado para poder evolucionar progresivamente desde un prototipo interactivo hacia un recurso educativo empaquetado para un LMS.

Antes de añadir nuevas funcionalidades se recomienda mantener separadas estas responsabilidades:

```text
Contenido pedagógico
        │
        ▼
Componentes React
        │
        ▼
Estado del curso
        │
        ▼
Integración SCORM
        │
        ▼
Moodle
```

Esto permitirá modificar la experiencia visual o pedagógica sin tener que reescribir la integración con el LMS.

---

## 📄 Uso y distribución

Este proyecto es de **uso privado e institucional de la Universidad de Ibagué**.

El código fuente, los recursos gráficos, contenidos educativos y demás materiales incluidos en este repositorio **no están autorizados para su distribución, reproducción, publicación o reutilización fuera de los fines institucionales establecidos por la Universidad de Ibagué**, salvo autorización expresa de la institución.

Este repositorio es de carácter privado para efectos de desarrollo, mantenimiento y evolución del proyecto.

---

## 🔗 Repositorio

Repositorio oficial:

https://github.com/jcfrancop/presentaciones-scorm1
