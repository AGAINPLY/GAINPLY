document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio site loaded ✔");

  // 1. NAV ACTIVE LINK
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    // Check if the link href matches the current page url
    if (window.location.href.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });

  // 2. FADE-IN SCROLL ANIMATION
  // This looks for elements with class "fade-in" and makes them visible
  const faders = document.querySelectorAll(".fade-in");
  
  const appearOptions = { threshold: 0.1 };
  
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));

  // 3. PROJECT MODAL HANDLER (Only runs if modal exists on page)
  const projectCards = document.querySelectorAll(".project-card");
  const modal = document.querySelector(".project-modal");
  const modalBody = document.getElementById("modal-body");
  const modalClose = document.querySelector(".modal-close");

  if (modal && modalBody && modalClose) {
    projectCards.forEach(card => {
      card.addEventListener("click", () => {
        const title = card.dataset.title || "Project";
        const desc = card.dataset.desc || "No description available.";
        const video = card.dataset.video || "";

        modalBody.innerHTML = `
          <h2 style="margin-top:0">${title}</h2>
          <p>${desc}</p>
          ${
            video
              ? `<div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:8px; margin-top:1rem;">
                   <iframe src="${video}" style="position:absolute; top:0; left:0; width:100%; height:100%;" frameborder="0" allowfullscreen></iframe>
                 </div>`
              : ""
          }
        `;
        modal.classList.add("open");
      });
    });

    modalClose.addEventListener("click", () => modal.classList.remove("open"));
    
    // Close when clicking outside the box
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("open");
    });
  }
});
