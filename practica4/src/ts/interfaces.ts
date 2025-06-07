export interface ArtistaData {
  nombre: string;
  genero: string;
  anio: number;
}

export interface EventoData {
  titulo: string;
  fecha: string;
  lugar: string;
}

export interface ColaboracionData {
  artistas: string[];
  proyecto: string;
}
