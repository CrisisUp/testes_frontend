/**
 * Animações Parallax
 * Versão IDÊNTICA ao original em termos de comportamento
 */

function initParallaxAnimations() {
  // Verifica se o GSAP está disponível
  if (typeof gsap === "undefined") {
    console.error("GSAP não foi carregado.");
    return;
  }

  // Registra o ScrollTrigger se disponível
  if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  // ===== ANIMAÇÕES EXATAMENTE IGUAIS AO ORIGINAL =====
  // Montanhas sobem (valores positivos em y)
  gsap.from("#m1", {
    scrollTrigger: { scrub: true },
    y: 100,
    ease: "none",
  });

  gsap.from("#m2", {
    scrollTrigger: { scrub: true },
    y: 50,
    ease: "none",
  });

  // Árvores se movem horizontalmente
  gsap.from("#t2", {
    scrollTrigger: { scrub: true },
    x: -50,
    ease: "none",
  });

  gsap.from("#t1", {
    scrollTrigger: { scrub: true },
    x: 50,
    ease: "none",
  });

  // Personagem vai para direita
  gsap.from("#man", {
    scrollTrigger: { scrub: true },
    x: -250,
    ease: "none",
  });

  // Plantas vão para direita
  gsap.from("#plants", {
    scrollTrigger: { scrub: true },
    x: -50,
    ease: "none",
  });

  // Título vai para esquerda
  gsap.from("#hero-title", {
    scrollTrigger: { scrub: true },
    x: 600,
    ease: "none",
  });

  // Atualiza o ScrollTrigger
  if (typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.refresh();
  }
}

// Inicializa quando o DOM estiver pronto
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initParallaxAnimations);
} else {
  initParallaxAnimations();
}
