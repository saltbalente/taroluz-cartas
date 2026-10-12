# taroluz-cartas

El significado de las 118 cartas —las 78 del tarot y las 40 de la baraja española— en español, de
[Taroluz](https://www.taroluz.com/cartas).

```js
import { cartas, carta, buscar, siONo } from 'taroluz-cartas';
carta('La Torre').amor;
siONo('El Sol');               // 'sí'
carta('As de Oros', 'baraja-espanola').trabajo;
```

Datos con licencia CC BY 4.0: cita a Taroluz con un enlace a https://www.taroluz.com/datos-abiertos. Código MIT.
