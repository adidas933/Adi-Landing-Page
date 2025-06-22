import { Particles } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const options: ISourceOptions = {
    fullScreen: { enable: true, zIndex: -1 },
    background: {
      color: { value: 'rgba(0,0,0,0)' },
    },
    particles: {
      number: {
        value: 25,
        density: { enable: true, width: 800 },
      },
      color: {
        value: ["#b169e6", "#66ccff", "#ffcc00", "#ff6699"],
        animation: {
          enable: true,
          speed: 10,
          sync: false,
        },
      },
    shape: {
  type: ["circle", "image"],
  options: {
    image: {
      src: "/images/logo-Adi-Sites.png",
      width: 100,
      height: 100,
    },
  },
},
      size: {
        value: { min: 40, max: 100 },
        animation: {
          enable: true,
          speed: 3,
          startValue: "random",
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "bounce" },
        angle: {
          value: 360,
          offset: 0,
        },
        attract: {
          enable: true,
          rotate: {
            x: 600,
            y: 1200,
          },
        },
      },
      opacity: {
        value: 0.4,
        animation: {
          enable: true,
          speed: 1.2,
          startValue: "random",
        },
      },
      collisions: {
        enable: true,
        mode: "bounce",
      },
    links: {
  enable: false, // ⬅️ מכבה את הקווים
},
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: [ "repulse"] },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        grab: {
          distance: 250,
          links: { opacity: 0.5 },
        },
        repulse: {
          distance: 120,
          duration: 0.4,
        },
        push: {
          quantity: 3,
        },
      },
    },
    detectRetina: true,
  };

  return <Particles id="tsparticles" options={options} />;
}
