import type {ColaboracionData} from "./interfaces";

const contenedor = document.getElementById("colaboraciones-container")!;

export function renderColaboracion(c: ColaboracionData): void {
  const div = document.createElement("div");
  div.className = "colaboracion-card";

  div.innerHTML = `
    <p><strong>Artistas:</strong> ${c.artistas.join(", ")}</p>
    <p><strong>Proyecto:</strong> ${c.proyecto}</p>
    <button>Eliminar</button>
  `;

  div.querySelector("button")!.addEventListener("click", () => div.remove());
  contenedor.appendChild(div);
}
