import React, { useEffect, useRef } from "react";

const AboutSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(16, 185, 129, 0.3)";
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${
              0.15 * (1 - distance / 150)
            })`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const experiences = [
    {
      year: "2024",
      title: "Senior Full Stack Developer",
      company: "Tech Company",
      description:
        "Leading scalable web applications with MERN stack and AI integration.",
    },
    {
      year: "2023",
      title: "Full Stack Developer",
      company: "Startup Inc",
      description:
        "Built responsive solutions with Flutter and React ecosystems.",
    },
    {
      year: "2022",
      title: "Junior Developer",
      company: "Dev Agency",
      description:
        "Developed modern client projects using cutting-edge frameworks.",
    },
  ];

  const highlights = [
    { number: "50+", label: "Projects", icon: "🚀" },
    { number: "3+", label: "Years", icon: "⏱️" },
    { number: "100%", label: "Satisfaction", icon: "⭐" },
    { number: "15+", label: "Technologies", icon: "💡" },
  ];

  return (
    <section id="about" className="relative py-32 bg-black overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.4 }}
      />

      {/* Circuit Board Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="circuit"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="10" cy="10" r="2" fill="#10b981" />
              <circle cx="90" cy="90" r="2" fill="#10b981" />
              <line
                x1="10"
                y1="10"
                x2="50"
                y2="10"
                stroke="#10b981"
                strokeWidth="1"
              />
              <line
                x1="50"
                y1="10"
                x2="50"
                y2="50"
                stroke="#10b981"
                strokeWidth="1"
              />
              <line
                x1="50"
                y1="50"
                x2="90"
                y2="90"
                stroke="#10b981"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Radial Gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/30 rounded-full">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold text-emerald-400 uppercase tracking-wider">
              About Me
            </span>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
            Know{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400">
              Who I Am
            </span>
          </h2>

          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Full Stack Developer crafting innovative digital experiences
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Story Card */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>

              <div className="relative p-10 bg-gray-900/60 backdrop-blur-xl border border-emerald-500/20 rounded-3xl">
                <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-emerald-400/50 rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-emerald-400/50 rounded-br-3xl"></div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl text-2xl shadow-lg shadow-emerald-500/30">
                    👨‍💻
                  </div>
                  <h3 className="text-3xl font-black text-white">My Journey</h3>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    I'm{" "}
                    <span className="text-emerald-400 font-bold">
                      Kunal Kumawat
                    </span>
                    , a Full Stack Developer with 3+ years building innovative
                    digital solutions. My passion lies in creating impactful
                    applications that solve real-world problems.
                  </p>
                  <p>
                    Specializing in{" "}
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 font-semibold rounded">
                      MERN Stack
                    </span>
                    ,{" "}
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 font-semibold rounded">
                      Flutter
                    </span>
                    , and{" "}
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 font-semibold rounded">
                      FastAPI
                    </span>
                    , while exploring{" "}
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 font-semibold rounded">
                      AI/ML
                    </span>{" "}
                    and{" "}
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 font-semibold rounded">
                      Web3
                    </span>
                    .
                  </p>
                  <p className="italic border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-950/20">
                    I transform complex problems into elegant solutions through
                    clean code and continuous innovation.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative p-6 bg-gray-900/60 backdrop-blur-xl border border-emerald-500/20 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚡</span> Quick Facts
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: "🎓", text: "Computer Science Graduate" },
                    { icon: "📍", text: "Based in Jaipur, India" },
                    { icon: "💼", text: "Open to Opportunities" },
                    { icon: "🌟", text: "Open Source Contributor" },
                  ].map((fact, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-gray-300 hover:text-emerald-300 transition"
                    >
                      <span className="text-xl">{fact.icon}</span>
                      <span>{fact.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl text-2xl shadow-lg shadow-emerald-500/30">
                📈
              </div>
              <h3 className="text-3xl font-black text-white">Experience</h3>
            </div>

            <div className="relative space-y-6">
              <div className="absolute left-7 top-8 bottom-8 w-0.5 bg-gradient-to-b from-emerald-500 to-transparent"></div>

              {experiences.map((exp, idx) => (
                <div key={idx} className="relative flex gap-4 group">
                  <div className="relative flex-shrink-0 z-10">
                    <div className="absolute inset-0 bg-emerald-500 rounded-xl blur opacity-50 group-hover:opacity-100 transition"></div>
                    <div className="relative w-14 h-14 flex items-center justify-center bg-gradient-to-br from-emerald-600 to-green-600 rounded-xl border-4 border-black shadow-xl">
                      <span className="text-white font-black">
                        '{exp.year.slice(2)}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl blur opacity-0 group-hover:opacity-25 transition"></div>
                    <div className="relative p-6 bg-gray-900/60 backdrop-blur-sm border border-emerald-900/30 rounded-xl hover:border-emerald-700/50 transition">
                      <h4 className="text-lg font-bold text-white group-hover:text-emerald-300 transition">
                        {exp.title}
                      </h4>
                      <p className="text-emerald-400 text-sm font-semibold mb-2">
                        {exp.company}
                      </p>
                      <p className="text-gray-400 text-sm">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition"></div>
              <div className="relative p-6 bg-gray-900/70 backdrop-blur-sm border border-emerald-900/50 rounded-xl text-center hover:-translate-y-2 transition-transform">
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
                  {item.number}
                </div>
                <div className="text-xs text-gray-400 font-medium">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex gap-4">
            <button className="group relative px-8 py-4 font-semibold text-white rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition"></div>
              <span className="relative flex items-center gap-2">
                Download Resume
                <svg
                  className="w-5 h-5 group-hover:translate-y-1 transition"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </span>
            </button>
            <button className="px-8 py-4 font-semibold text-white bg-gray-900/50 backdrop-blur-sm border border-emerald-800/50 rounded-lg hover:bg-gray-900/70 hover:border-emerald-700 hover:-translate-y-1 transition">
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
