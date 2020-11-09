var timeline = gsap.timeline();

// première animation
gsap.to("#terre", {
  duration: 10,
  x: 250,
  y: 100,
  motionPath: {
    path: "#chemin-terre",
    align: "#chemin-terre"
  },
  ease: Linear.easeNone,
  repeat: -1
});

// deuxième animation
gsap.to("#comete", {
  duration: 10,
  x: 300,
  y: 100,
  motionPath: {
    path: "#chemin-comete",
    align: "#chemin-comete",
    autoRotate: true,
  },
  ease: Linear.easeNone,
  repeat: -1
});

// troisième animation
gsap.to("#alone", {
  duration: 10,
  x: 300,
  y: 100,
  motionPath: {
    path: "#chemin-alone",
    align: "#chemin-alone"
  },
  ease: Linear.easeNone,
  repeat: -1
});

// quatrième animation
gsap.to("#astronaute", {
  duration: 10,
  x: 150,
  y: 100,
  motionPath: {
    path: "#chemin-astronaute",
    align: "#chemin-astronaute"
  },
  ease: Linear.easeNone,
  repeat: -1
});