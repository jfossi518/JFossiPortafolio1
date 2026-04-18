// script.js

// Datos de contenido de servicios
const dataServicios = {
  branding: "Creación de identidad visual, logos y estrategia de marca para posicionar tu negocio en el mercado.",
  uiux: "Diseño de interfaces modernas y usables con foco en la experiencia del usuario.",
  audiovisual: "Producción de contenido visual creativo: fotografía y video para campañas.",
  edicion: "Edición profesional de video, con storytelling y ritmo para comunicar ideas efectivamente.",
  marketing: "Estrategias digitales para crecimiento de marca: redes, contenido y conversiones."
};

// Mostrar contenido del servicio en #contenido-servicio
function mostrar(servicio) {
  const contenedor = document.getElementById("contenido-servicio");
  if (!contenedor) return;

  contenedor.innerHTML = `
    <div class="card" style="min-width:0; max-width:720px;">
      <h3 style="margin:0 0 6px;">${servicio.toUpperCase()}</h3>
      <p style="margin:0;">${dataServicios[servicio]}</p>
    </div>
  `;
  // Opcional: hacer que el nuevo bloque aparezca con una animación
  setTimeout(() => contenedor.querySelector('.card')?.classList.add('reveal', 'active'), 50);
}

// Eventos de las tarjetas de servicios
document.addEventListener('DOMContentLoaded', () => {
  // Asignar handlers a todas las tarjetas de servicios
  document.querySelectorAll('.servicio-card').forEach(card => {
    card.addEventListener('click', () => {
      const servicio = card.dataset.servicio;
      if (servicio) mostrar(servicio);
    });
  });

  // Animaciones de entrada (Scroll Reveal) con IntersectionObserver
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('active');
        // Si quieres que solo se active una vez:
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => io.observe(el));

  // Opcional: activar la primera vez el contenido de un servicio predeterminado
  // mostrar('branding');
});

// Si quisieras cargar un proyecto o sección al hacer click en una tarjeta
/*
// Ejemplo de apertura de proyecto
document.querySelectorAll('.project').forEach(p => {
  p.addEventListener('click', () => {
    // Implementa un modal o navegación a detalle
  });
});
*/
