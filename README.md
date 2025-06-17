# POGO

Generador de filtros para Pokémon GO que produce cadenas de búsqueda compatibles con el juego.

## Uso

1. Abre `index.html` en tu navegador.
2. Selecciona las opciones de exclusión, define los valores mínimos de IV y, si lo deseas, filtra por liga y top de ranking PvP.
3. La cadena resultante se mostrará en el área de texto; pulsa **Copiar** para guardarla en el portapapeles.

Ejemplo de cadena resultante válida:

`!4* & !legendary & !shiny & attack12- & defense10- & hp12-`

Los filtros `attack`, `defense` y `hp` aceptan valores de 0 a 15 y utilizan el guion (`-`) para definir rangos.

El sitio está pensado para ser publicado en GitHub Pages utilizando solo HTML, CSS y JavaScript.
