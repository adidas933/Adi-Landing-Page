import { Particles } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";

export default function ParticlesBackground() {

  const options: ISourceOptions = {
    fullScreen: { enable: true, zIndex: -1 },
background: {
  color: { value: 'rgba(0,0,0,0)' }, // ✅ שקיפות מלאה
},
    particles: {
      number: {
        value: 25, // פחות חלקיקים = פחות עומס ויזואלי
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
        type: "circle",
      },
      size: {
        value: { min: 20, max: 60 }, // 🟣⚪⚫ כדורים הרבה יותר גדולים
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
        enable: true,
        distance: 120,
        color: "#ffffff",
        opacity: 0.15,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: ["grab", "repulse"] },
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
