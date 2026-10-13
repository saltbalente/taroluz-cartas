# Significado de las cartas del tarot y de la baraja española — en español

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.23328712.svg)](https://doi.org/10.5281/zenodo.23328712)

**118 cartas, en español, en datos abiertos:** las 78 del tarot Rider-Waite y las 40 de la baraja española, con su
significado al derecho e invertida, en el amor, en el trabajo, en el sí o no, sus palabras clave, su elemento y su
astrología. Publicado por [Taroluz](https://www.taroluz.com), donde cada carta tiene su página:
[www.taroluz.com/cartas](https://www.taroluz.com/cartas).

*English: an open, Spanish-language dataset of all 78 Rider-Waite tarot cards plus the 40 cards of the Spanish deck
(baraja española): upright and reversed meanings, love, career, yes/no, keywords, element and astrology. Field names are
in Spanish; see the table below.*

## Qué hay aquí

| Archivo | Qué es |
| --- | --- |
| `data/cartas.json` | Las 118 cartas, una lista de objetos |
| `data/cartas.jsonl` | Una carta por línea (cómodo para Hugging Face) |
| `data/cartas.csv` | Lo mismo en CSV, para Excel o Google Sheets |
| `paquetes/npm/` | El paquete `taroluz-cartas` de npm |
| `paquetes/python/` | El paquete `taroluz-cartas` de PyPI |
| `huggingface/` | La ficha del conjunto en Hugging Face |
| `data/dataset-metadata.json` | Los metadatos para Kaggle |

También se descargan de la web: [cartas.json](https://www.taroluz.com/datos-abiertos/cartas.json) ·
[cartas.csv](https://www.taroluz.com/datos-abiertos/cartas.csv) · [cartas.jsonl](https://www.taroluz.com/datos-abiertos/cartas.jsonl).

## Los campos de cada carta

| Campo | Qué es |
| --- | --- |
| `id` | Código de la carta: `ar00`…`ar21` (mayores); `wa`/`cu`/`sw`/`pe` + `ac`, `02`…`10`, `pa`, `kn`, `qu`, `ki` (menores); `e` + `o`/`c`/`e`/`b` + `01`…`07`, `so`, `ca`, `re` (baraja española) |
| `slug`, `url` | La página de la carta en www.taroluz.com/cartas |
| `mazo` | `tarot` o `baraja-espanola` |
| `nombre`, `nombre_en`, `nombre_marsella` | En español, en inglés y, si cambia, en el Tarot de Marsella |
| `arcano`, `palo`, `rango`, `numero` | Su lugar en el mazo |
| `elemento`, `astrologia` | Elemento y correspondencia astrológica (Golden Dawn: planeta, signo o decanato con su regente) |
| `palabras_clave`, `palabras_clave_invertida` | Palabras clave al derecho e invertida |
| `al_derecho`, `invertida` | El significado en una línea |
| `esencia`, `luz`, `sombra` | Qué energía es, su cara favorable y su advertencia |
| `amor`, `trabajo` | Cómo habla en el amor y en el trabajo o el dinero |
| `pasado`, `presente`, `futuro` | Cómo habla en cada posición (arcanos mayores) |
| `persona` | Qué persona puede representar (figuras de la baraja española) |
| `si_o_no`, `si_o_no_invertida` | `sí`, `no` o `todavía no` |
| `imagen` | Enlace a la lámina |
| `revision` | Si un tarotista la revisó: `revisado`, `por`, `fecha` |

## Cómo usarlo

**JavaScript** (npm):

```bash
npm install taroluz-cartas
```

```js
import { cartas, carta, buscar, siONo } from 'taroluz-cartas';
carta('La Torre').amor;          // cómo habla La Torre en el amor
siONo('El Sol');                 // 'sí'
siONo('El Sol', true);           // 'todavía no' (invertido)
buscar('dinero').map((c) => c.nombre);
```

**Python** (PyPI):

```bash
pip install taroluz-cartas
```

```python
from taroluz_cartas import cartas, carta, buscar, si_o_no
carta("La Torre")["amor"]
si_o_no("El Sol")            # "sí"
```

**Sin instalar nada:** descarga `data/cartas.json` o usa https://www.taroluz.com/datos-abiertos/cartas.json.

## Cómo se hizo

Es síntesis propia de Taroluz: la escuela del Tarot de Marsella y la tradición Rider-Waite para el tarot, y la cartomancia
española para la baraja. Ninguna carta anuncia desgracia: las cartas duras se leen como algo que transformar, no como una
condena. El sí o no de cada carta sale de la misma regla que usa la mesa de Taroluz; la astrología, de la tabla de la
Golden Dawn que usa su motor (los decanatos se calculan, no se copian).

**Revisión:** hoy ninguna de las 118 cartas lleva todavía la firma de un tarotista. El campo `revision` de cada carta lo dice y cambiará cuando se revisen.

## Licencia y cómo citarlo

Los textos se publican con licencia **CC BY 4.0** (https://creativecommons.org/licenses/by/4.0/deed.es): puedes copiarlos, adaptarlos y
usarlos, también con fines comerciales, citando a Taroluz con un enlace a https://www.taroluz.com/datos-abiertos. El código de los
paquetes (`paquetes/`) es MIT. Las láminas del tarot son el Rider-Waite-Smith de 1909 (dominio público); las de la
baraja española son arte propio de Taroluz y no entran en la licencia: el campo `imagen` solo enlaza a ellas.

> Taroluz (2026). *Significado de las cartas del tarot y de la baraja española*, versión 1.0.1. Zenodo. https://doi.org/10.5281/zenodo.23328712. Licencia CC BY 4.0.

¿Un error o una mejora? Escríbenos desde https://www.taroluz.com/contacto.

---

Este repositorio se genera desde la web de Taroluz (`npm run datos-abiertos`): no se edita a mano.
