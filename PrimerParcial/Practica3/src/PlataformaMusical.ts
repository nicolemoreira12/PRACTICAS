// Interfaces con readonly, optional (?) y union types (string | number)
interface Artista {
  readonly id: number;
  nombre: string;
  generoMusical: string;
  seguidores: number;
  verificado: boolean;
  paginaWeb?: string;
}

interface Cancion {
  readonly id: number;
  titulo: string;
  duracionSegundos: number | string;
  fechaLanzamiento: string;
  artistaId: number;
}

interface Evento {
  readonly id: number;
  nombre: string;
  fecha: string;
  lugar: string;
  artistaId: number | string;
}

// Clases basadas en las interfaces con validaciones
class ArtistaConCanciones implements Artista {
  canciones: Cancion[] = [];
  id: number;
  nombre: string;
  generoMusical: string;
  seguidores: number;
  verificado: boolean;
  constructor(id:number,nombre:string,generoMusical:string,seguidores:number, verificado: boolean ) {
    this.id = id
    this.nombre = nombre
    this.generoMusical = generoMusical
    this.seguidores = seguidores
    this.verificado = verificado
  }

  agregarCancion(cancion: Cancion): void {
    if (cancion.artistaId === this.id) {
      this.canciones.push(cancion);
    } else {
      console.error("La canción no pertenece a este artista.");
    }
  }

  aumentarSeguidores(cantidad: number): void {
    if (cantidad > 0) {
      this.seguidores += cantidad;
    } else {
      console.error("La cantidad a aumentar debe ser positiva.");
    }
  }
}

class Cancion implements Cancion {
  titulo: string;
  duracionSegundos: string | number;
  fechaLanzamiento: string;
  artistaId: number;
  constructor(artistaId:number,titulo:string, duracionSegundos:number, fechaLanzamientos: string) {
    this.artistaId = artistaId 
    this.titulo = titulo
   this.duracionSegundos = duracionSegundos
   this.fechaLanzamiento = fechaLanzamientos
  }

  esDuracionValida(): boolean {
    let duracionNum = typeof this.duracionSegundos === "string" ? parseInt(this.duracionSegundos) : this.duracionSegundos;
    return duracionNum > 30; // duración mínima 30 segundos
  }
}

class Evento implements Evento {
  nombre: string;
  fecha: string;
  lugar: string;
  artistaId: string | number;
  constructor(nombre: string, fecha: string,lugar: string, artistaId: number){
    this.nombre = nombre
    this.fecha = fecha
    this.lugar = lugar
    this.artistaId = artistaId
  }
  

  esEventoFuturo(): boolean {
    return new Date(this.fecha) > new Date();
  }
}

// Arreglos con 10 elementos simulados por entidad
const artistas: ArtistaConCanciones[] = [
  new ArtistaConCanciones(1, "Luna Torres", "Pop", 1500,true),
  new ArtistaConCanciones(2, "Rafa Beats", "Electrónica", 800, true),
  new ArtistaConCanciones(3, "The Wilds", "Rock", 1200, true),
  new ArtistaConCanciones(4, "DJ Solar", "House", 500,true),
  new ArtistaConCanciones(5, "Maya Soul", "Soul", 900,true),
  new ArtistaConCanciones(6, "Nico Jazz", "Jazz", 700,true),
  new ArtistaConCanciones(7, "Electra", "Electrónica", 400,true),
  new ArtistaConCanciones(8, "Los Caminantes", "Folk", 1100,true),
  new ArtistaConCanciones(9, "Sofi Beats", "Hip-Hop", 1300, true),
  new ArtistaConCanciones(10, "Alex Luna", "Pop", 1500, true),
];

const canciones: Cancion[] = [
  new Cancion(1, "Luz en la Oscuridad", 210, "2024-06-01"),
  new Cancion(2, "Electro Fiesta", 180, "2023-11-20"),
  new Cancion(3, "Salsa Pa’ Ti", 240, "2024-01-10"),
  new Cancion(4, "Rock On", 300, "2024-03-15"),
  new Cancion(5, "House Party", 200, "2023-12-05"),
  new Cancion(6, "Soul Vibes", 220, "2024-02-22"),
  new Cancion(7, "Jazz Nights", 400, "2024-04-18"),
  new Cancion(8, "Electro Waves", 230, "2024-05-25"),
  new Cancion(9, "Folk Tales", 260, "2023-10-30",),
  new Cancion(10, "Hip-Hop Flow", 210, "2024-07-01"),
];

const eventos: Evento[] = [
  new Evento("1", "Noche Pop", "2025-06-15", 1),
  new Evento("2", "ElectroWorld", "2025-07-20", 2),
  new Evento("3", "Rock Fest", "2025-09-05", 3),
  new Evento("4", "House Night", "2025-08-10",4),
  new Evento("5", "Soul Experience", "2025-07-25", 5),
  new Evento("6", "Jazz & Blues", "2025-10-12", 6),
  new Evento("7", "Electro Fiesta", "2025-11-02", 7),
  new Evento("8", "Folk Festival", "2025-09-30", 8),
  new Evento("9", "Hip-Hop Battle", "2025-12-01", 9),
  new Evento("10", "Pop Stars Live", "2025-08-20", 10),
];

// Relaciones: agregar canciones a artistas correspondientes
artistas.forEach(artista => {
  canciones.forEach(cancion => {
    if (cancion.artistaId === artista.id) {
      artista.agregarCancion(cancion);
    }
  });
});

// Funciones tipadas

// Mostrar elementos de cualquier arreglo
function mostrarElementos<T>(elementos: T[], nombreEntidad: string): void {
  console.log(`--- Listado de ${nombreEntidad} ---`);
  elementos.forEach((elem, idx) => console.log(`${idx + 1}.`, elem));
  console.log('------------------------------');
}

// Contar artistas verificados
function contarArtistasVerificados(artistas: ArtistaConCanciones[]): number {
  return artistas.filter(artista => artista.verificado).length;
}

// Insertar y eliminar artista en arreglo
function actualizarArtistas(
  artistas: ArtistaConCanciones[],
  artistaNuevo: ArtistaConCanciones,
  idEliminar: number
): ArtistaConCanciones[] {
  const actualizados = artistas.filter(artista => artista.id !== idEliminar);
  actualizados.push(artistaNuevo);
  return actualizados;
}

// Uso de map: obtener nombres en mayúsculas
const nombresArtistasMayus = artistas.map(a => a.nombre.toUpperCase());

// Uso de filter: artistas verificados
const artistasVerificados = artistas.filter(a => a.verificado);

// Uso de reduce: total seguidores
const totalSeguidores = artistas.reduce((acc, a) => acc + a.seguidores, 0);

// Operación de negocio: resumen evento con artista y canciones
function resumenEvento(evento: Evento, baseDatos: {
  artistas: ArtistaConCanciones[],
  canciones: Cancion[]
}): void {
  const artista = baseDatos.artistas.find(a => a.id === evento.artistaId);
  if (!artista) {
    console.log("Artista no encontrado para este evento.");
    return;
  }
  console.log(`Resumen Evento: ${evento.nombre}`);
  console.log(`Artista: ${artista.nombre}`);
  console.log("Canciones:");
  artista.canciones.forEach(c => console.log(`- ${c.titulo} (${c.duracionSegundos} seg)`));
}

// Impresión de estructura anidada: todos los eventos con su artista y canciones
function imprimirEventosConDetalles(baseDatos: {
  eventos: Evento[],
  artistas: ArtistaConCanciones[]
}) {
  baseDatos.eventos.forEach(evento => {
    const artista = baseDatos.artistas.find(a => a.id === evento.artistaId);
    console.log(`Evento: ${evento.nombre} (${evento.fecha}) - Lugar: ${evento.lugar}`);
    if (artista) {
      console.log(`  Artista: ${artista.nombre} (${artista.generoMusical})`);
      console.log("  Canciones:");
      artista.canciones.forEach(c => console.log(`    * ${c.titulo}`));
    } else {
      console.log("  Artista no encontrado.");
    }
    console.log('--------------------------');
  });
}

// Ejecución ejemplo

mostrarElementos(artistas, "Artistas");
console.log("Total artistas verificados:", contarArtistasVerificados(artistas));

const nuevoArtista = new ArtistaConCanciones(11, "Nova Star", "Pop", 500, true);
const artistasActualizados = actualizarArtistas(artistas, nuevoArtista, 2);
mostrarElementos(artistasActualizados, "Artistas actualizados");

console.log("Nombres en mayúsculas:", nombresArtistasMayus);
console.log("Artistas verificados:", artistasVerificados.map(a => a.nombre));
console.log("Total seguidores:", totalSeguidores);

resumenEvento(eventos[0], { artistas, canciones });

imprimirEventosConDetalles({ eventos, artistas });
