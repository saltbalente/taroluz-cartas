// taroluz-cartas — el significado de las cartas del tarot y de la baraja española, en español.
// Datos: CC BY 4.0, citando a Taroluz (https://www.taroluz.com/datos-abiertos). Código: MIT.
import { readFileSync } from 'node:fs';

/** Las 118 cartas. */
export const cartas = JSON.parse(readFileSync(new URL('./cartas.json', import.meta.url), 'utf8'));

const normaliza = (s) => String(s || '').normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().trim();

/** Una carta por su nombre («La Torre»), su id («ar16») o su slug («la-torre»). Con dos mazos, gana el tarot salvo que digas el mazo. */
export function carta(clave, mazo) {
  const k = normaliza(clave);
  const del = mazo ? cartas.filter((c) => c.mazo === mazo) : cartas;
  return del.find((c) => c.id === clave || c.slug === k || normaliza(c.nombre) === k || normaliza(c.nombre_en) === k) || null;
}

/** Las cartas cuyo texto contiene la palabra («dinero», «reconciliación»…), sin importar tildes ni mayúsculas. */
export function buscar(palabra) {
  const k = normaliza(palabra);
  return cartas.filter((c) => normaliza([c.nombre, c.al_derecho, c.invertida, c.esencia, c.luz, c.sombra, c.amor, c.trabajo, ...c.palabras_clave].join(' ')).includes(k));
}

/** «sí», «no» o «todavía no» para una carta, al derecho o invertida. */
export function siONo(clave, invertida = false, mazo) {
  const c = carta(clave, mazo);
  return c ? (invertida ? c.si_o_no_invertida : c.si_o_no) : null;
}
