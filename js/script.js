function mostrar(servicio) {
  const contenedor = document.getElementById("contenido-servicio");

  const data = {
    branding: "Creación de identidad visual, logos y estrategia de marca.",
    uiux: "Diseño de interfaces modernas enfocadas en experiencia de usuario.",
    audiovisual: "Producción de contenido visual creativo.",
    edicion: "Edición profesional de video.",
    marketing: "Estrategias digitales para crecimiento de marca."
  };

  contenedor.innerHTML = `
    <div class="card">
      <h3>${servicio.toUpperCase()}</h3>
      <p>${data[servicio]}</p>
    </div>
  `;
}





// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// SERVICIOS DINÁMICOS
function mostrar(servicio) {
  const contenedor = document.getElementById("contenido-servicio");

  const data = {
    branding: "Creación de identidad visual, logos y estrategia de marca.",
    uiux: "Diseño de interfaces modernas enfocadas en experiencia de usuario.",
    audiovisual: "Producción de contenido visual creativo.",
    edicion: "Edición profesional de video.",
    marketing: "Estrategias digitales para crecimiento de marca."
  };

  contenedor.innerHTML = `
    <div class="card reveal active">
      <h3>${servicio.toUpperCase()}</h3>
      <p>${data[servicio]}</p>
    </div>
  `;
}
