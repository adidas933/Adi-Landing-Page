import { Particles } from "@tsparticles/react";
import { useTheme } from "@mui/material";
import type { ISourceOptions } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const theme = useTheme();

  const options: ISourceOptions = {
    fullScreen: { enable: true, zIndex: -1 },
    background: {
      color: { value: theme.palette.background.default }, // ✅ שימוש נכון
    },
    particles: {
      number: {
        value: 50,
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
        value: { min: 3, max: 8 },
        animation: {
          enable: true,
          speed: 4,
          startValue: "random",
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: 2,
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
        value: 0.7,
        animation: {
          enable: true,
          speed: 1.5,
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
        opacity: 0.2,
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
          distance: 200,
          links: { opacity: 0.5 },
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          quantity: 4,
        },
      },
    },
    detectRetina: true,
  };

  return <Particles id="tsparticles" options={options} />;
}
