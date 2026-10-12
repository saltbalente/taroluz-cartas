export type Palabra = 'sí' | 'no' | 'todavía no';
export interface Carta {
  id: string; slug: string; mazo: 'tarot' | 'baraja-espanola';
  nombre: string; nombre_en: string; nombre_marsella: string | null;
  arcano: 'mayor' | 'menor' | null; palo: 'bastos' | 'copas' | 'espadas' | 'oros' | null; rango: string | null; numero: number | null;
  elemento: 'fuego' | 'agua' | 'aire' | 'tierra' | null;
  astrologia: { tipo: 'planeta' | 'signo' | 'decanato' | 'elemento' | 'figura'; planeta: string | null; signo: string | null; decanato: number | null; regente: string | null; subelemento: string | null; nota: string | null } | null;
  palabras_clave: string[]; palabras_clave_invertida: string[];
  al_derecho: string; invertida: string; esencia: string; luz: string; sombra: string; amor: string; trabajo: string;
  pasado: string | null; presente: string | null; futuro: string | null; persona: string | null;
  si_o_no: Palabra; si_o_no_invertida: Palabra;
  imagen: string; url: string;
  revision: { revisado: boolean; por: string | null; fecha: string | null };
}
export declare const cartas: Carta[];
export declare function carta(clave: string, mazo?: Carta['mazo']): Carta | null;
export declare function buscar(palabra: string): Carta[];
export declare function siONo(clave: string, invertida?: boolean, mazo?: Carta['mazo']): Palabra | null;
