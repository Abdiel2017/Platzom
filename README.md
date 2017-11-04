# Platzom

Platzom es un idioma inventado para el [Curso de Fundamentos de JavaScript](https://platzi.com/js) de [Platzi](https://platzi.com), el mejor lugar de educación online.

## Descripción del idioma
- Si la palabra termina en "ar" se le quita esos dos caracteres.
- Si la palabra inicia con Z, se le añade "pe" al finaliza.
- Si la palabra traducida tiene 10 o más letras se debe partir a la mitad y unir con un guión del medio.
- Si la palabra es un palídromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas.

## Instalación
```
npm install Platzom
```

## Uso
```
import platzom from `platzom`

platzom("Programar") // Program
platzon("Zarpar") // Zorrope
platzom("abecedario") //abece-dario
platzon("murcielago") // Zarppe
platzon("sometemos") // SoMeTeMoS
```

## Créditos
- [Sacha Lifszyc](https://twitter.com/@slifszyc)

## Licencia
[MIT](https://opensource.org/licenses/MIT)
