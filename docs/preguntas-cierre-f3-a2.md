# Preguntas de cierre - EC1 F1 A3

**Nombre:** Ana Cristina Rascon Ochoa  
**Grupo:** 001

## 1. Modelo Gif
La interfaz `Gif` asegura que todos los objetos tengan las mismas propiedades y evita errores al trabajar con la colección.

## 2. Interfaz y objeto literal
La interfaz es el molde que define cómo debe ser un objeto. El objeto literal es un ejemplo concreto que sigue ese molde.

## 3. Gif[]
Significa un arreglo de objetos tipo `Gif`. Evita que se agreguen datos que no cumplen la estructura.

## 4. Propiedades opcionales
Porque no todos los GIFs tienen autor o descripción, así se permite flexibilidad.

## 5. Uso de let y const
`const` para valores que no cambian, como la colección. `let` cuando la variable se va a modificar.

## 6. Funciones
- `normalizeText`: recibe texto y devuelve texto limpio en minúsculas.  
- `searchGifs`: recibe texto y devuelve GIFs filtrados.  
- `createGifCard`: recibe un GIF y devuelve HTML.

## 7. Métodos de arreglo
- `forEach`: recorre sin devolver.  
- `filter`: devuelve los que cumplen condición.  
- `map`: transforma y devuelve nuevo arreglo.  
- `find`: devuelve el primero que cumple o `undefined`.

## 8. find y undefined
Puede devolver `undefined` si no hay coincidencia. Se controló con condicionales.

## 9. Callback
Es una función que se ejecuta en un evento. Ejemplos: el `submit` del formulario y el `click` en la galería.

## 10. Template strings
Permiten insertar variables dentro de cadenas y construir HTML de forma sencilla.

## 11. Destructuración y valor por defecto
Se usó para extraer propiedades rápido y mostrar “Autor no disponible” si falta el username.

## 12. querySelector y null
Puede devolver `null` si el elemento no existe. Se validó con condicionales y el operador `!`.

## 13. preventDefault
Evita que el formulario recargue la página al enviarse.

## 14. Sin coincidencias
La aplicación muestra el mensaje “No se encontraron GIFs.”

## 15. Cambio con Giphy API
Los datos vendrán de internet en lugar del arreglo local, pero la lógica seguirá igual.

## 16. Error o dificultad
El error fue en la importación de `gif-detail`. Se resolvió corrigiendo el nombre y comprobando con `pnpm build`.
