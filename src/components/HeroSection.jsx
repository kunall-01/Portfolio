import React, { useEffect, useRef } from "react";
import {
  SiJavascript,
  SiCplusplus,
  SiFlutter,
  SiNextdotjs,
  SiGit,
  SiDocker,
  SiMysql,
  SiTypescript,
  SiDart,
  SiWeb3Dotjs,
} from "react-icons/si";

const TechHero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];
    let gridLines = [];
    let time = 0;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color = ["#10b981", "#34d399", "#6ee7b7", "#059669"][
          Math.floor(Math.random() * 4)
        ];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fillRect(this.x, this.y, this.size, this.size);
        ctx.globalAlpha = 1;
      }
    }

    class GridLine {
      constructor(isVertical, position) {
        this.isVertical = isVertical;
        this.position = position;
        this.offset = Math.random() * 100;
        this.opacity = 0.03;
      }

      draw(time) {
        const wave = Math.sin(time * 0.001 + this.offset) * 0.02;
        ctx.strokeStyle = `rgba(16, 185, 129, ${this.opacity + wave})`;
        ctx.lineWidth = 1;
        ctx.beginPath();

        if (this.isVertical) {
          ctx.moveTo(this.position, 0);
          ctx.lineTo(this.position, canvas.height);
        } else {
          ctx.moveTo(0, this.position);
          ctx.lineTo(canvas.width, this.position);
        }

        ctx.stroke();
      }
    }

    const initializeGrid = () => {
      gridLines = [];
      const spacing = 60;

      for (let x = 0; x < canvas.width; x += spacing) {
        gridLines.push(new GridLine(true, x));
      }
      for (let y = 0; y < canvas.height; y += spacing) {
        gridLines.push(new GridLine(false, y));
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeGrid();
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    for (let i = 0; i < 80; i++) {
      particles.push(new Particle());
    }

    const drawConnections = () => {
      particles.forEach((particle, index) => {
        particles.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = `rgba(16, 185, 129, ${
              0.15 * (1 - distance / 150)
            })`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });
    };

    const animate = () => {
      time += 1;

      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0, "#0a0a0a");
      gradient.addColorStop(0.5, "#0d1f17");
      gradient.addColorStop(1, "#0a1612");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      gridLines.forEach((line) => line.draw(time));

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      drawConnections();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Python", icon: "🐍" },
    { name: "FastAPI", icon: "⚡" },
    { name: "AI/ML", icon: "🤖" },
  ];

  const additionalTech = [
    {
      name: "JavaScript",
      icon: <SiJavascript color="#F7DF1E" size={20} />,
      position: { right: "8%", top: "25%" },
    },
    {
      name: "C++",
      icon: <SiCplusplus color="#00599C" size={20} />,
      position: { right: "15%", top: "45%" },
    },
    {
      name: "Flutter",
      icon: <SiFlutter color="#02569B" size={20} />,
      position: { right: "12%", top: "65%" },
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs color="#000000" size={20} />,
      position: { right: "5%", top: "55%" },
    },
    {
      name: "Git",
      icon: <SiGit color="#F05032" size={20} />,
      position: { right: "18%", top: "35%" },
    },
    {
      name: "Docker",
      icon: <SiDocker color="#2496ED" size={20} />,
      position: { right: "8%", top: "75%" },
    },
    {
      name: "SQL",
      icon: <SiMysql color="#00758F" size={20} />,
      position: { right: "22%", top: "50%" },
    },
    {
      name: "TypeScript",
      icon: <SiTypescript color="#3178C6" size={20} />,
      position: { right: "10%", top: "15%" },
    },
    {
      name: "Dart",
      icon: <SiDart color="#0175C2" size={20} />,
      position: { right: "25%", top: "60%" },
    },
    {
      name: "Web3",
      icon: <SiWeb3Dotjs color="#29B6AF" size={20} />,
      position: { right: "6%", top: "85%" },
    },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Floating Tech Badges */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {techStack.map((tech, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              right: `${5 + (i % 3) * 12}%`,
              top: `${10 + i * 13}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          >
            <div className="w-12 h-12 flex items-center justify-center text-2xl bg-emerald-950/50 backdrop-blur-md border border-emerald-800/30 rounded-full shadow-lg">
              {tech.icon}
            </div>
          </div>
        ))}

        {/* Additional Tech Icons Near Photo */}
        {additionalTech.map((tech, i) => (
          <div
            key={`additional-${i}`}
            className="absolute animate-float"
            style={{
              right: tech.position.right,
              top: tech.position.top,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3.5 + i * 0.4}s`,
            }}
          >
            <div className="w-10 h-10 flex items-center justify-center text-xl bg-emerald-950/40 backdrop-blur-md border border-emerald-800/20 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
              {tech.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="relative order-2 lg:order-1">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-emerald-400 bg-emerald-950/70 backdrop-blur-sm border border-emerald-700/50 rounded-lg">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-emerald-400"></span>
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400"></span>
                </span>
                Open to Opportunities
              </div>

              {/* Main Heading */}
              <h1 className="mb-5 text-4xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
                Hi, I'm{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400">
                    Kunal Kumawat
                  </span>
                  <span className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 blur-sm"></span>
                </span>
              </h1>

              {/* Animated Subtitle */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold tracking-wide text-gray-300 md:text-2xl lg:text-3xl">
                  Full Stack Developer & Creative Technologist
                </h2>
              </div>

              {/* Description */}
              <p className="max-w-2xl mb-10 text-base leading-relaxed text-gray-400 md:text-lg">
                I craft powerful, scalable, and intelligent digital solutions
                using the MERN Stack, FastAPI, and AI-driven technologies. My
                passion lies in blending creativity with logic — building
                seamless user experiences, decentralized systems, and
                applications that truly make an impact.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mb-10 max-w-xl">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                  <div className="relative p-5 bg-gray-900/70 backdrop-blur-sm border border-emerald-900/50 rounded-lg">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
                      50+
                    </div>
                    <div className="text-xs text-gray-400 mt-1">Projects</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                  <div className="relative p-5 bg-gray-900/70 backdrop-blur-sm border border-emerald-900/50 rounded-lg">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
                      3+
                    </div>
                    <div className="text-xs text-gray-400 mt-1">Years Exp</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                  <div className="relative p-5 bg-gray-900/70 backdrop-blur-sm border border-emerald-900/50 rounded-lg">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                      100%
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      Satisfaction
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="group relative px-8 py-4 text-base font-semibold text-white transition-all duration-300 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 via-green-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    View My Work
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </button>
                <button className="px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-emerald-800/50 rounded-lg hover:bg-gray-900/70 hover:border-emerald-700/70 group">
                  <span className="flex items-center justify-center gap-2">
                    Contact Me
                    <svg
                      className="w-5 h-5 transition-transform group-hover:rotate-45"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* Right Side - Professional Photo */}
            <div className="relative order-1 lg:order-2 flex items-center justify-center lg:-mt-20">
              <div className="relative group">
                {/* Glowing Background Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition duration-500"></div>

                {/* Animated Border Ring */}
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 via-green-400 to-teal-500 rounded-full opacity-75 blur-sm animate-spin-slow"></div>

                {/* Photo Container */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  {/* Placeholder for your photo */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-900/50 to-gray-900/50 backdrop-blur-sm border-4 border-emerald-500/30 overflow-hidden">
                    {/* Replace this div with your actual photo */}
                    {/* <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-900/30 to-gray-900/30">
                      <div className="text-center p-8">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-emerald-600/20 border-2 border-emerald-500/50 flex items-center justify-center">
                          <svg
                            className="w-12 h-12 text-emerald-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                        <p className="text-emerald-400 text-sm font-medium">
                          Add Your Photo
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                          Replace with img tag
                        </p>
                      </div>
                    </div> */}
                    {/* Use this format for your photo:*/}
                    <img
                      src="/myphoto.jpg"
                      alt="Kunal Kumawat"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-500/20 rounded-full border border-emerald-500/30 animate-pulse"></div>
                  <div
                    className="absolute -bottom-6 -left-6 w-20 h-20 bg-green-500/20 rounded-full border border-green-500/30 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute z-20 transform -translate-x-1/2 bottom-10 left-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-emerald-500/30 rounded-full">
            <div className="w-1 h-3 mx-auto mt-2 bg-emerald-400 rounded-full animate-scroll"></div>
          </div>
          <span className="text-xs text-emerald-500/50">Scroll Down</span>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default TechHero;
