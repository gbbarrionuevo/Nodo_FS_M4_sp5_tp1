# App PokeAPI

PokeAPI es una aplicación web interactiva desarrollada con **React**, **Vite** y **Tailwind CSS V4**, que permite visualizar y gestionar Pokémon mediante un CRUD básico, consumiendo una API propia/privada.

Incluye un diseño adaptable con modo claro/oscuro y animaciones estilo Pokémon.

---

## Demo en vivo

**URL del proyecto desplegado:**  
[https://pokeapipublic.netlify.app/](https://pokeapipublic.netlify.app/)

---

## Características principales

1. Context API para manejar el estado global de los Pokémon.
2. Consumo de API propia mediante una variable de entorno pública (VITE_API_URL).
3. Componentes simples y reutilizables.
4. Alertas modales modernas y personalizadas con SweetAlert2.
5. Notificaciones con Toastify.
6. Diseño responsive con Tailwind CSS V4.
7. Animaciones inspiradas en las Pokéballs y transiciones suaves entre vistas.

---

## Axios — Cliente HTTP para las peticiones a la API

En este proyecto se utiliza Axios en lugar del método nativo fetch. Las razones son tanto de conveniencia como de mantenibilidad:

1. **Simplifica las peticiones HTTP**: Axios convierte automáticamente las respuestas a JSON, sin necesidad de response.json().
2. **Manejo automático de errores**: Axios lanza excepciones en códigos 4xx o 5xx, lo que permite un uso natural de try/catch.
3. **Cancelación de peticiones**: Permite cancelar requests en curso (útil para prevenir solapamientos o doble carga).
4. **Configuración global sencilla**: Podemos definir una baseURL, interceptores o headers comunes en una sola instancia.
5. **Estructura de respuesta uniforme**: Siempre devuelve un objeto con las mismas propiedades (data, status, headers, etc.).
6. **Soporte JSON automático**: Convierte objetos JS en JSON sin necesidad de serializar manualmente ni definir headers.

---

## Instalación y ejecución local

```bash
# Clonar el repositorio
git clone https://github.com/gbbarrionuevo/Nodo_FS_M4_sp5_tp1.git pokeApi-react
cd pokeApi-react

# Instalar dependencias
npm install

# Crear tu API propia
# Podés crear una API rápida y gratuita usando MockAPI
https://mockapi.io/

# Crear un archivo .env en la raíz
VITE_API_URL=https://tu-endpoint.mockapi.io

# Ejecutar en modo desarrollo
npm run dev

# Abrir en tu navegador
http://localhost:5173
```
