"""taroluz-cartas: el significado de las cartas del tarot y de la baraja española, en español.

Datos: CC BY 4.0, citando a Taroluz (https://www.taroluz.com/datos-abiertos). Código: MIT.
"""
import json
import unicodedata
from importlib import resources

__all__ = ["cartas", "carta", "buscar", "si_o_no"]

cartas = json.loads(resources.files(__name__).joinpath("cartas.json").read_text(encoding="utf-8"))


def _normaliza(s):
    s = unicodedata.normalize("NFD", str(s or ""))
    return "".join(ch for ch in s if unicodedata.category(ch) != "Mn").lower().strip()


def carta(clave, mazo=None):
    """Una carta por su nombre ("La Torre"), su id ("ar16") o su slug ("la-torre")."""
    k = _normaliza(clave)
    for c in cartas:
        if mazo and c["mazo"] != mazo:
            continue
        if c["id"] == clave or c["slug"] == k or _normaliza(c["nombre"]) == k or _normaliza(c["nombre_en"]) == k:
            return c
    return None


def buscar(palabra):
    """Las cartas cuyo texto contiene la palabra, sin importar tildes ni mayúsculas."""
    k = _normaliza(palabra)
    campos = ("nombre", "al_derecho", "invertida", "esencia", "luz", "sombra", "amor", "trabajo")
    return [c for c in cartas if k in _normaliza(" ".join([c[f] for f in campos] + c["palabras_clave"]))]


def si_o_no(clave, invertida=False, mazo=None):
    """Devuelve "sí", "no" o "todavía no" para una carta, al derecho o invertida."""
    c = carta(clave, mazo)
    if not c:
        return None
    return c["si_o_no_invertida"] if invertida else c["si_o_no"]
