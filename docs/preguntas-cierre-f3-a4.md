# Preguntas de cierre - EC1 F3 A4

## 1. ¿Qué diferencia existe entre una operación síncrona y una asíncrona?
Lo síncrono pasa al instante. Lo asíncrono tarda, como pedir algo a internet, y mientras espera la app sigue funcionando.

## 2. ¿Cuáles son los estados de una promesa y qué relación tienen con async/await?
Pending (esperando), fulfilled (salió bien) o rejected (salió mal). `await` espera a que la promesa termine para seguir con el código.

## 3. ¿Qué devuelve fetch y qué devuelve response.json()?
`fetch` devuelve la respuesta del servidor. `response.json()` convierte esa respuesta en datos que ya puedo usar.

## 4. ¿Por qué es necesario comprobar response.ok?
Porque fetch no avisa solo si hubo un error. Hay que revisarlo antes de usar los datos.

## 5. ¿Cómo se utilizan try, catch y unknown para manejar errores en GIFinder?
Lo que puede fallar va en `try`. Si falla, salta al `catch`, donde el error llega como `unknown` y se revisa con `error instanceof Error` antes de leer `error.message`.

## 6. ¿Qué diferencia existe entre GiphyGif y Gif, y qué responsabilidad tiene mapGiphyGif?
`GiphyGif` es como llega desde la API. `Gif` es la versión simple que usa mi app. `mapGiphyGif` convierte uno en el otro.

## 7. ¿Por qué se utiliza URLSearchParams al construir la solicitud?
Para armar bien la URL sin preocuparme por espacios o acentos.

## 8. ¿Qué significa Promise<Gif[]> en el tipo de retorno?
Que la función no da el arreglo al instante, sino que lo promete para después. Por eso uso `await`.

## 9. ¿Qué diferencia existe entre .env.local y .env.example, y por qué una variable VITE_ no debe considerarse secreta?
`.env.local` tiene mi clave real y no se sube. `.env.example` solo muestra qué variable hace falta. Y aunque no se suba, la clave igual se puede ver desde el navegador.

## 10. ¿Cómo comprobaste que .env.local no está versionado?
Con `git check-ignore -v .env.local` (me mostró la regla) y `git ls-files .env.local` (no mostró nada).

## 11. ¿Por qué Loading puede observarse con mayor claridad al consultar una API?
Porque pedirle datos a GIPHY sí tarda, a diferencia de datos locales. Por eso se alcanza a ver "Consultando GIPHY...".

## 12. ¿Qué dificultad se presentó durante la integración y cómo comprobaste que quedó resuelta?
# Preguntas de cierre - EC1 F3 A4

## 1. ¿Qué diferencia existe entre una operación síncrona y una asíncrona?
Lo síncrono pasa al instante. Lo asíncrono tarda, como pedir algo a internet, y mientras espera la app sigue funcionando.

## 2. ¿Cuáles son los estados de una promesa y qué relación tienen con async/await?
Pending (esperando), fulfilled (salió bien) o rejected (salió mal). `await` espera a que la promesa termine para seguir con el código.

## 3. ¿Qué devuelve fetch y qué devuelve response.json()?
`fetch` devuelve la respuesta del servidor. `response.json()` convierte esa respuesta en datos que ya puedo usar.

## 4. ¿Por qué es necesario comprobar response.ok?
Porque fetch no avisa solo si hubo un error como 404. Hay que revisarlo antes de usar los datos.

## 5. ¿Cómo se utilizan try, catch y unknown para manejar errores en GIFinder?
Lo que puede fallar va en `try`. Si falla, salta al `catch`, donde el error llega como `unknown` y se revisa con `error instanceof Error` antes de leer `error.message`.

## 6. ¿Qué diferencia existe entre GiphyGif y Gif, y qué responsabilidad tiene mapGiphyGif?
`GiphyGif` es como llega desde la API. `Gif` es la versión simple que usa mi app. `mapGiphyGif` convierte uno en el otro.

## 7. ¿Por qué se utiliza URLSearchParams al construir la solicitud?
Para armar bien la URL sin preocuparme por espacios o acentos.

## 8. ¿Qué significa Promise<Gif[]> en el tipo de retorno?
Que la función no da el arreglo al instante, sino que lo promete para después. Por eso uso `await`.

## 9. ¿Qué diferencia existe entre .env.local y .env.example, y por qué una variable VITE_ no debe considerarse secreta?
`.env.local` tiene mi clave real y no se sube. `.env.example` solo muestra qué variable hace falta. Y aunque no se suba, la clave igual se puede ver desde el navegador.

## 10. ¿Cómo comprobaste que .env.local no está versionado?
Con `git check-ignore -v .env.local` (me mostró la regla) y `git ls-files .env.local` (no mostró nada).

## 11. ¿Por qué Loading puede observarse con mayor claridad al consultar una API?
Porque pedirle datos a GIPHY sí tarda, a diferencia de datos locales. Por eso se alcanza a ver "Consultando GIPHY...".

## 12. ¿Qué dificultad se presentó durante la integración y cómo comprobaste que quedó resuelta?
Al principio la página no cambiaba, seguía mostrando el diseño viejo. Me di cuenta con la consola que el `index.html` tenía todo el HTML escrito a mano y le faltaba el `<div id="app">` que usa `main.ts`. Lo arreglé dejando solo ese div vacío, y comprobé que ya funcionaba porque la página empezó a mostrar "Consultando GIPHY..." y luego los GIFs reales.
tambien tuve dificutad en adaptar el logo de GIPHY a mi paguina 