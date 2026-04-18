document.addEventListener("DOMContentLoaded", () => {

  // ===============================
  // REVEAL ON SCROLL
  // ===============================
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, {
    threshold: 0.15
  });

  revealElements.forEach(el => observer.observe(el));

  // ===============================
  // CONTENIDO DINÁMICO SERVICIOS
  // ===============================
  const servicios = {
    branding:
      "Construcción de marcas memorables con identidad visual sólida y enfoque estratégico.",

    uiux:
      "Diseño de interfaces intuitivas, modernas y centradas en la experiencia del usuario.",

    audiovisual:
      "Producción visual creativa para campañas, redes sociales y contenido digital.",

    marketing:
      "Estrategias digitales enfocadas en crecimiento, posicionamiento y conversión."
  };

  const cards = document.querySelectorAll(".servicio-card");
  const box = document.getElementById("contenido-servicio");

  cards.forEach(card => {
    card.addEventListener("click", () => {

      const key = card.dataset.servicio;

      if (!servicios[key] || !box) return;

      box.innerHTML = `
        <div class="profile-card reveal active">
          <h3>${card.querySelector("h3").textContent}</h3>
          <p>${servicios[key]}</p>
        </div>
      `;
    });
  });

  // ===============================
  // HEADER SHADOW AL HACER SCROLL
  // ===============================
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";
    } else {
      header.style.boxShadow = "none";
    }
  });

});
