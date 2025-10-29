import React, { useState } from "react";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Web", "Mobile", "AI/ML", "Web3"];

  const projects = [
    {
      id: 1,
      title: "AI-Powered Chat Application",
      description:
        "Real-time chat app with AI-driven responses and sentiment analysis",
      category: "AI/ML",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
      tags: ["React", "Node.js", "OpenAI", "Socket.io", "MongoDB"],
      github: "#",
      live: "#",
      featured: true,
      overview:
        "A sophisticated real-time chat application that leverages artificial intelligence to enhance user communication. The platform integrates OpenAI's GPT models to provide intelligent responses, sentiment analysis, and contextual understanding of conversations.",
      features: [
        "Real-time messaging with Socket.io",
        "AI-powered response suggestions",
        "Sentiment analysis and emotion detection",
        "Multi-user chat rooms",
        "Message encryption for security",
        "User authentication and profiles",
      ],
      challenges:
        "Implementing efficient real-time communication while maintaining low latency for AI processing. Solved by implementing message queuing and optimized API calls.",
      technologies: {
        Frontend: ["React.js", "TailwindCSS", "Socket.io Client"],
        Backend: ["Node.js", "Express.js", "Socket.io"],
        "AI/ML": ["OpenAI GPT-4 API", "Natural Language Processing"],
        Database: ["MongoDB", "Redis for caching"],
        Authentication: ["JWT", "bcrypt"],
      },
      timeline: "3 months",
      role: "Full Stack Developer",
    },
    {
      id: 2,
      title: "DeFi Trading Platform",
      description:
        "Decentralized exchange for crypto trading with real-time analytics",
      category: "Web3",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop",
      tags: ["React", "Solidity", "Web3.js", "Ethereum", "Hardhat"],
      github: "#",
      live: "#",
      featured: true,
      overview:
        "A decentralized finance (DeFi) platform enabling secure cryptocurrency trading without intermediaries. Built on Ethereum blockchain with smart contracts ensuring transparency and security.",
      features: [
        "Token swapping with automated market making",
        "Liquidity pool management",
        "Real-time price charts and analytics",
        "Wallet integration (MetaMask, WalletConnect)",
        "Yield farming opportunities",
        "Transaction history and portfolio tracking",
      ],
      challenges:
        "Gas optimization for smart contracts and ensuring security against common vulnerabilities. Implemented comprehensive testing and audit protocols.",
      technologies: {
        Frontend: ["React.js", "Web3.js", "Ethers.js", "TailwindCSS"],
        "Smart Contracts": ["Solidity", "Hardhat", "OpenZeppelin"],
        Blockchain: ["Ethereum", "IPFS for decentralized storage"],
        Testing: ["Chai", "Mocha", "Hardhat Network"],
        APIs: ["The Graph", "CoinGecko API"],
      },
      timeline: "4 months",
      role: "Blockchain Developer",
    },
    {
      id: 3,
      title: "E-Commerce Mobile App",
      description:
        "Cross-platform shopping app with seamless payment integration",
      category: "Mobile",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
      tags: ["Flutter", "Firebase", "Stripe", "REST API"],
      github: "#",
      live: "#",
      featured: false,
      overview:
        "A comprehensive mobile e-commerce application providing seamless shopping experience across iOS and Android platforms. Features include product browsing, cart management, and secure payment processing.",
      features: [
        "Product catalog with search and filters",
        "Shopping cart and wishlist",
        "Secure payment gateway integration",
        "Order tracking and history",
        "Push notifications for deals",
        "User reviews and ratings",
      ],
      challenges:
        "Ensuring smooth performance across different devices and optimizing image loading. Implemented lazy loading and caching strategies.",
      technologies: {
        Mobile: ["Flutter", "Dart"],
        Backend: ["Firebase", "Cloud Functions"],
        Payment: ["Stripe API"],
        "State Management": ["Provider", "GetX"],
        Storage: ["Cloud Firestore", "Firebase Storage"],
      },
      timeline: "2.5 months",
      role: "Mobile Developer",
    },
    {
      id: 4,
      title: "Project Management Dashboard",
      description: "Collaborative tool for agile teams with real-time updates",
      category: "Web",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      tags: ["Next.js", "MongoDB", "TailwindCSS", "WebSocket"],
      github: "#",
      live: "#",
      featured: false,
      overview:
        "An intuitive project management platform designed for agile teams. Enables efficient task tracking, sprint planning, and team collaboration with real-time synchronization.",
      features: [
        "Kanban and Scrum board views",
        "Sprint planning and management",
        "Time tracking and reporting",
        "Team collaboration tools",
        "File attachments and comments",
        "Analytics dashboard",
      ],
      challenges:
        "Managing real-time updates across multiple users without performance degradation. Implemented efficient WebSocket connections and optimistic UI updates.",
      technologies: {
        Frontend: ["Next.js", "React", "TailwindCSS"],
        Backend: ["Node.js", "Express.js"],
        Database: ["MongoDB", "Mongoose"],
        "Real-time": ["Socket.io", "WebSocket"],
        Authentication: ["NextAuth.js"],
      },
      timeline: "3 months",
      role: "Full Stack Developer",
    },
    {
      id: 5,
      title: "Smart Health Tracker",
      description:
        "ML-powered fitness app with personalized workout recommendations",
      category: "AI/ML",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",
      tags: ["Python", "TensorFlow", "FastAPI", "React Native"],
      github: "#",
      live: "#",
      featured: false,
      overview:
        "An intelligent health and fitness application using machine learning to provide personalized workout plans and nutrition advice based on user goals and progress.",
      features: [
        "Personalized workout recommendations",
        "Nutrition tracking and meal planning",
        "Progress tracking with visualizations",
        "Integration with fitness wearables",
        "Goal setting and achievement tracking",
        "Health metrics analysis",
      ],
      challenges:
        "Training accurate ML models with limited dataset. Implemented data augmentation and transfer learning techniques.",
      technologies: {
        Mobile: ["React Native", "Expo"],
        Backend: ["Python", "FastAPI"],
        "ML/AI": ["TensorFlow", "Scikit-learn", "Pandas"],
        Database: ["PostgreSQL"],
        APIs: ["Google Fit API", "Apple HealthKit"],
      },
      timeline: "4 months",
      role: "AI/ML Developer",
    },
    {
      id: 6,
      title: "NFT Marketplace",
      description: "Platform for minting, buying, and selling digital art NFTs",
      category: "Web3",
      image:
        "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&h=500&fit=crop",
      tags: ["React", "Solidity", "IPFS", "Hardhat", "Moralis"],
      github: "#",
      live: "#",
      featured: true,
      overview:
        "A complete NFT marketplace where artists can mint digital creations, collectors can discover and purchase NFTs, and users can trade on the secondary market with integrated royalty systems.",
      features: [
        "NFT minting with metadata",
        "Marketplace for buying and selling",
        "Auction system with bidding",
        "Creator royalties on resales",
        "IPFS for decentralized storage",
        "Collection management",
      ],
      challenges:
        "Implementing efficient smart contracts for gas optimization and ensuring proper royalty distribution. Conducted thorough testing and security audits.",
      technologies: {
        Frontend: ["React.js", "Web3.js", "Ethers.js"],
        "Smart Contracts": ["Solidity", "ERC-721", "ERC-1155"],
        Storage: ["IPFS", "Pinata"],
        Backend: ["Moralis", "Node.js"],
        Development: ["Hardhat", "Remix IDE"],
      },
      timeline: "3.5 months",
      role: "Web3 Developer",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          style={{
            backgroundImage: `linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
          className="w-full h-full"
        ></div>
      </div>

      <div className="absolute top-40 left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
            <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">
              Portfolio
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
              Projects
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my recent work across various technologies and
            domains
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all ${
                activeFilter === category
                  ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white"
                  : "bg-gray-900/50 text-gray-400 border border-emerald-900/30 hover:border-emerald-700/50 hover:text-emerald-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>

              <div className="relative bg-gray-900/60 backdrop-blur-sm border border-emerald-900/30 rounded-xl overflow-hidden hover:border-emerald-700/50 transition-all">
                {project.featured && (
                  <div className="absolute top-3 right-3 z-10 px-3 py-1 bg-emerald-600 rounded-full text-xs font-bold text-white">
                    Featured
                  </div>
                )}

                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>

                <div className="p-5">
                  <div className="mb-2">
                    <span className="px-2.5 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded text-xs font-semibold text-emerald-400">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-800/50 border border-gray-700/50 rounded text-xs text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs text-gray-500">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-center text-sm font-semibold text-white hover:bg-gray-700 transition"
                    >
                      Code
                    </a>
                    <a
                      href={project.live}
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg text-center text-sm font-semibold text-white hover:from-emerald-700 hover:to-green-700 transition"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-gray-900 rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-30 w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-red-600 rounded-full transition-all"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Header Image */}
              <div className="relative h-64">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1.5 bg-emerald-600 rounded-lg text-sm font-bold text-white">
                      {selectedProject.category}
                    </span>
                    {selectedProject.featured && (
                      <span className="px-3 py-1.5 bg-yellow-600 rounded-lg text-sm font-bold text-white">
                        Featured Project
                      </span>
                    )}
                  </div>
                  <h3 className="text-3xl font-black text-white">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-8">
                {/* Project Info Grid */}
                <div className="grid md:grid-cols-2 gap-4 pb-8 border-b border-gray-800">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">
                      Role
                    </p>
                    <p className="text-white font-medium">
                      {selectedProject.role}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">
                      Timeline
                    </p>
                    <p className="text-white font-medium">
                      {selectedProject.timeline}
                    </p>
                  </div>
                </div>

                {/* Overview */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-emerald-500 rounded"></span>
                    Project Overview
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.overview}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-emerald-500 rounded"></span>
                    Key Features
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50"
                      >
                        <svg
                          className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-emerald-500 rounded"></span>
                    Technologies & Tools
                  </h4>
                  <div className="space-y-4">
                    {Object.entries(selectedProject.technologies).map(
                      ([category, techs]) => (
                        <div key={category}>
                          <p className="text-sm font-semibold text-emerald-400 mb-2">
                            {category}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {techs.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Challenges */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-emerald-500 rounded"></span>
                    Challenges & Solutions
                  </h4>
                  <div className="p-4 bg-gray-800/50 border border-gray-700/50 rounded-lg">
                    <p className="text-gray-300 leading-relaxed">
                      {selectedProject.challenges}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={selectedProject.github}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-gray-800 border border-gray-700 rounded-lg font-semibold text-white hover:bg-gray-700 transition-all"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View Source Code
                  </a>
                  <a
                    href={selectedProject.live}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg font-semibold text-white hover:from-emerald-700 hover:to-green-700 transition-all"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    View Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
