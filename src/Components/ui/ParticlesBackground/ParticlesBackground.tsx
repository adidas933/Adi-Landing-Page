import Particles from "@tsparticles/react";

export default function ParticlesBackground() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: { value: "#0d0d0d" },
        },
        particles: {
          number: {
            value: 40,
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
            type: ["circle", "square", "polygon"],
          },
          size: {
            value: { min: 4, max: 10 },
            animation: {
              enable: true,
              speed: 5,
            },
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            outModes: { default: "bounce" },
          },
          collisions: {
            enable: true,
            mode: "bounce",
          },
          opacity: {
            value: 0.8,
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: ["repulse", "connect"],
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
            connect: {
              distance: 120,
              radius: 60,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
