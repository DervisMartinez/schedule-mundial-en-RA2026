# 🏆 Mundial 2026 en América - Web App de Radio América

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Una aplicación web interactiva, rápida y estática desarrollada para **Radio América**, diseñada para ofrecer cobertura completa de la Copa Mundial de la FIFA 2026. 

La plataforma destaca por su arquitectura *Serverless* (sin base de datos propia), la cual obtiene, procesa y calcula toda la información del torneo en tiempo real leyendo archivos de calendario (`.ics`) directamente desde el cliente.

## ✨ Características Principales

- **📅 Calendario Automatizado:** Lee y parsea archivos `.ics` (como los de FotMob/FIFA) para mostrar partidos por día, marcadores y estados sin intervención manual.
- **📻 Radio en Vivo Integrada:** Reproductor flotante persistente conectado al servidor de streaming Icecast/Shoutcast de Radio América.
- **📊 Tablas de Posiciones Inteligentes:** Motor matemático interno que lee los resultados de los partidos y auto-calcula Partidos Jugados (PJ), Ganados (G), Diferencia de Goles (DG) y Puntos (Pts).
- **🏆 Cuadro de Fixture (Eliminatorias):** Visualización del formato de llaves desde Dieciseisavos de Final hasta la Gran Final, el cual se auto-rellena a medida que el torneo avanza.
- **📱 100% Responsivo:** Interfaz diseñada con Tailwind CSS, adaptada para móviles, tablets y monitores de escritorio.
- **⚡ Alta Velocidad:** Renderizado y empaquetado optimizado mediante Vite.

## 🛠️ Tecnologías Utilizadas

- **Frontend:** React (JavaScript / JSX)
- **Estilos:** Tailwind CSS
- **Build Tool:** Vite
- **Servidor Web Destino:** LiteSpeed / Nginx (Archivos estáticos)

## 🚀 Instalación y Desarrollo Local

Sigue estos pasos para correr el proyecto en tu entorno local:

1. **Clonar el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd calendario-mundial
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   El proyecto estará disponible en `http://localhost:5173`.

## 📦 Compilación y Despliegue en Producción

Esta aplicación está diseñada para ser alojada en cualquier servidor web estándar (como LiteSpeed o Apache) sin necesidad de Node.js en producción.

1. **Generar los archivos de producción:**
   ```bash
   npm run build
   ```
   Esto creará una carpeta llamada `dist/` con el código optimizado.

2. **Despliegue:**
   Sube todo el contenido de la carpeta `dist/` a la carpeta pública de tu servidor web (`public_html` o similar).

3. **Manejo de Rutas (LiteSpeed / Apache):**
   El proyecto incluye un archivo `.htaccess` en la raíz. Asegúrate de que este archivo se suba al servidor junto con los archivos de la carpeta `dist/` para evitar errores `404 Not Found` al recargar la página.

## 🧠 Arquitectura de Datos (`api.js`)

El corazón de la aplicación reside en el archivo `api.js`. Este módulo:
1. Descarga el calendario del torneo.
2. Utiliza expresiones regulares y mapeos para detectar países, marcadores e instancias (Ej: "Cuartos de final").
3. Cruza los nombres de los países con una base de datos local `flagMap` para extraer automáticamente la bandera del país desde `flagcdn.com`.
4. Utiliza `stadiumMap` para resolver en qué estadio se jugará un encuentro específico.

Esto garantiza que la aplicación no requiera mantenimiento backend mientras transcurre la competición.

## 👤 Créditos y Autoría

Desarrollado para **Radio América**.

---
*El fútbol se vive mejor por la radio.*