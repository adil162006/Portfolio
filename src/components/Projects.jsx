import { motion } from "framer-motion";

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

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >

        {/* AI Code Reviewer */}
        <a
          href="https://github.com/adil162006/ai-code-reviewer"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit", display: "block" }}
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{ backgroundImage: "url('/projects/ai-code.jpeg')" }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            />
            <h3>AI Code Reviewer</h3>
            <p>
              An AI-powered code reviewer built using the Gemini API, designed to analyze and improve DSA and development code in real time. It provides intelligent feedback on efficiency, structure, and best coding practices within seconds, helping developers write cleaner, more optimized, and maintainable code effortlessly..
            </p>
            <div className="project-tech">
              <span>Node.js</span>
              <span>Gemini API</span>
              <span>React.js</span>
            </div>
          </motion.div>
        </a>

        {/* Inventory Management */}
        <a
          href="https://github.com/adil162006/Inventory-management"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit", display: "block" }}
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{ backgroundImage: "url('/projects/Inventory.png')" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <h3>Inventory Management with Dashboard</h3>
            <p>
              A lightweight inventory management web app built with Next.js, TypeScript, and Prisma, offering seamless product tracking and management.
              Includes CRUD operations, dashboard analytics with charts, pagination, and a seeded demo dataset for instant exploration.
            </p>
            <div className="project-tech">
              <span>Next.js</span>
              <span>Prisma</span>
              <span>Neon</span>
            </div>
          </motion.div>
        </a>

        {/* Real Time Chat Application */}
        <a
          href="https://github.com/adil162006/ChatterBox-"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit", display: "block" }}
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{ backgroundImage: "url('/projects/Chatapp.png')" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <h3>Real Time Chat Application</h3>
            <p>
              A real-time chat application built with the MERN stack and Socket.IO, offering instant messaging, media sharing, online status tracking, and a modern responsive UI.
              Includes secure JWT authentication, profile customization, dark mode, and strong protection against common web vulnerabilities.
            </p>
            <div className="project-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDb</span>
            </div>
          </motion.div>
        </a>

      </motion.div>
    </motion.section>
  );
};
