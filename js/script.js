document.addEventListener("DOMContentLoaded", () => {

  /* Reveal al hacer scroll */
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("active");
      }
    });
  }, {
    threshold: 0.15
  });

  reveals.forEach(item => observer.observe(item));


  /* Glow dinámico en cards */
  const cards = document.querySelectorAll(".card, .hero-card");

  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.background = `
        radial-gradient(circle at ${x}px ${y}px,
        rgba(0,207,255,.18),
        rgba(255,255,255,.04) 40%)
      `;
    });

    card.addEventListener("mouseleave", () => {
      card.style.background = "rgba(255,255,255,.06)";
    });
  });


  /* Efecto typing en títulos */
  const title = document.querySelector("h1");

  if(title){
    const text = title.innerHTML;
    title.innerHTML = "";

    let i = 0;

    const typing = setInterval(() => {
      title.innerHTML += text.charAt(i);
      i++;

      if(i >= text.length){
        clearInterval(typing);
      }

    }, 35);
  }

});
