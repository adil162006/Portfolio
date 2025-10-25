import { motion } from "framer-motion";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import ts from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import js from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// Register languages
SyntaxHighlighter.registerLanguage("typescript", ts);
SyntaxHighlighter.registerLanguage("javascript", js);

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        {/* Hero Content */}
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span> 👋 Hello, I'm </span>
          </motion.div>

          <motion.h1 className="glitch" variants={fadeInUp} whileHover={{ scale: 1.02 }}>
            Mohammed Adil
          </motion.h1>

          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            Crafting seamless web experiences as a MERN Stack Developer Leveraging LLM-powered agents to build intelligent applications that can reason, act, and interact autonomously.
          </motion.h2>

          <motion.p className="hero-description" variants={fadeInUp}>
            I design and develop robust backend systems that power scalable and efficient applications. I also build intelligent solutions using LLM-powered agents, enabling autonomous reasoning, task automation, and smart workflows
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a href="#projects" className="cta-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              View My Work
            </motion.a>
            <motion.a href="#contacts" className="cta-secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com/adil162006" target="_blank">
              <i className="fab fa-github"> </i>
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/mohammad-adil-shaikh-8a43b3320" target="_blank">
              <i className="fab fa-linkedin"> </i>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Hero Image / Code Display */}
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-display">
            <SyntaxHighlighter
              language="typescript"
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100%",
                borderRadius: "20px",
                background: "rgba(30, 41, 59, 0.8)",
                backdropFilter: "blur(10px)",
                marginBottom: 50,
              }}
            >
              {`const aboutMe: DeveloperProfile = {
  codename: "FullstackSentinel",
  origin: "🛠️ Building apps where every endpoint tells a story",
  role: "Fullstack Developer with a Backend Edge",
  stack: {
    languages: ["Python", "Java", "JavaScript"],
    frameworks: ["Node.js", "Express", "Next.js", "React.js"],
    databases: ["MongoDB", "SQL", "FAISS", "Chroma"],
    libraries: ["NumPy", "Pandas", "LangChain", "Langraph", "Matplotlib", 
              "Seaborn", "TailwindCSS", "Bootstrap"]
  },
  traits: [
    "DSA strategist — loves solving algorithmic puzzles",
    "API architect — writes endpoints that scale effortlessly",
    "balances frontend and backend, but thrives in backend complexity",
    "integrates ML sensibly — only where it improves systems"
  ],
  missionStatement: "Crafting fullstack applications with robust backends, 
                      optimized data flows, and 
                      intelligent features where it counts",
  availability: "Open for projects that need a versatile developer
                 who rules both front and backend"
};`}
            </SyntaxHighlighter>
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon"> 💻 </span>
              <span className="card-text">Currently working on something awesome!</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
