import React, { useEffect, useRef } from "react";

import Astronaut from "../assets/astronaut.png";

const GalaxyHerod = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let stars = [];
    let planets = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create stars
    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random();
        this.fadeSpeed = (Math.random() - 0.5) * 0.01;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity += this.fadeSpeed;

        if (this.opacity <= 0 || this.opacity >= 1) {
          this.fadeSpeed *= -1;
        }

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create planets
    class Planet {
      constructor(color, size, speed, distance) {
        this.angle = Math.random() * Math.PI * 2;
        this.color = color;
        this.size = size;
        this.speed = speed;
        this.distance = distance;
        this.centerX = canvas.width / 2;
        this.centerY = canvas.height / 2;
      }

      update() {
        this.angle += this.speed;
        this.centerX = canvas.width / 2;
        this.centerY = canvas.height / 2;
      }

      draw() {
        const x = this.centerX + Math.cos(this.angle) * this.distance;
        const y = this.centerY + Math.sin(this.angle) * this.distance;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.size);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Initialize stars
    for (let i = 0; i < 200; i++) {
      stars.push(new Star());
    }

    // Initialize planets
    planets.push(new Planet("rgba(147, 51, 234, 0.6)", 40, 0.001, 250));
    planets.push(new Planet("rgba(59, 130, 246, 0.5)", 30, 0.0015, 180));
    planets.push(new Planet("rgba(236, 72, 153, 0.4)", 25, 0.002, 320));
    planets.push(new Planet("rgba(168, 85, 247, 0.3)", 20, 0.0012, 400));

    // Animation loop
    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.update();
        star.draw();
      });

      planets.forEach((planet) => {
        planet.update();
        planet.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Content Overlay */}
      <div className=" max-w-7xl mx-auto relative z-10 flex items-center justify-between h-full px-6 lg:px-5 ">
        {/* Left Content */}
        <div className="max-w-2xl">
          {/* Main Heading */}
          <h1 className="mb-6  mt-20 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#38ff81] to-[#2edb6d] md:text-6xl lg:text-6xl">
            Hi, <br /> I’m Kunal Kumawat
          </h1>

          {/* Subheading */}
          <p className="mb-8 text-xl text-gray-300 md:text-2xl lg:text-3xl">
            Full Stack Developer & Creative Technologist
          </p>

          {/* Description */}
          <p className="max-w-3xl mb-10 text-base leading-relaxed text-gray-400 md:text-lg">
            I craft powerful, scalable, and intelligent digital solutions using
            the MERN Stack, FastAPI, and AI-driven technologies. My passion lies
            in blending creativity with logic — building seamless user
            experiences, decentralized systems, and applications that truly make
            an impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="px-8 py-4 text-lg font-semibold text-white transition-all duration-300 transform bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
              View My Work
            </button>
            <button className="px-8 py-4 text-lg font-semibold text-white transition-all duration-300 transform border-2 border-purple-500 rounded-full hover:scale-105 hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/30">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Astronaut Image */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative astronaut-float">
            <img
              src={Astronaut}
              alt="Astronaut floating in space"
              className="w-[450px] h-[550px] object-contain"
              style={{
                filter:
                  "drop-shadow(0 0 40px rgba(255, 165, 0, 0.6)) drop-shadow(0 0 80px rgba(255, 140, 0, 0.4))",
              }}
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute transform -translate-x-1/2 bottom-10 left-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-purple-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/50" />

      {/* Float Animation */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(-5deg);
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(-3deg);
          }
          50% {
            transform: translateY(-15px) translateX(-10px) rotate(-7deg);
          }
          75% {
            transform: translateY(-25px) translateX(5px) rotate(-4deg);
          }
        }

        .astronaut-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default GalaxyHerod;
