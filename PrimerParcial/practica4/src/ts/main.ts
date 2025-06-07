import { Artistas, Eventos, Colaboraciones } from "./data";
import { renderArtista } from "./Artista";
import { renderEvento } from "./Eventos";
import { renderColaboracion } from "./Colaboraciones";

// Renderizar artista
Artistas.forEach(renderArtista);

// Renderizar eventos
Eventos.forEach(renderEvento);

// Renderizar colaboraciones
Colaboraciones.forEach(renderColaboracion);
