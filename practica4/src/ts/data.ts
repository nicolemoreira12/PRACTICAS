import type{ ArtistaData, EventoData, ColaboracionData } from "./interfaces";

export const Artistas: ArtistaData[] = [
  { nombre: "Ana", genero: "Pop", anio: 2010 },
  { nombre: "Luis", genero: "Rock", anio: 2015 }
];

export const Eventos: EventoData[] = [
  { titulo: "Festival Indie", fecha: "2024-08-12", lugar: "CDMX" },
  { titulo: "Showcase Online", fecha: "2024-09-01", lugar: "Zoom" }
];

export const Colaboraciones: ColaboracionData[] = [
  { artistas: ["Ana", "Luis"], proyecto: "Dúo Acústico" },
  { artistas: ["Luis", "Carlos"], proyecto: "Rock Alternativo" }
];
