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

        
        {/* Expense Tracker */}
        <a
          href="https://github.com/adil162006/expense-tracker-react-native-app"
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
              style={{ backgroundImage: "url('/projects/expensetracker.png')" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <h3>Expense Tracker App</h3>
            <p>
              Lightweight expense tracker with a React Native (Expo) front-end and Express backend using PostgreSQL (Neon) and optional Upstash rate-limiting.
              Mobile app uses Clerk for authentication and interacts with backend REST endpoints for transactions and summaries.
              Supports local development and deployment on Node hosts; Expo handles mobile builds for Android, iOS, or real devices.
            </p>
            <div className="project-tech">
              <span>React Native</span>
              <span>Neon</span>
              <span>Clerk</span>
              <span>Expo</span>
              <span>Node js</span>
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
        {/* Nasa Api */}
        <a
          href="https://github.com/adil162006/celestial-space-visualizer"
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
              style={{ backgroundImage: "url('/projects/spaceapi.png')" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <h3>Celestial — NASA Space Exploration</h3>
            <p>
             Celestial is an educational and interactive space-themed web application that brings NASA’s 
             open data to your fingertips. Explore high-resolution space imagery, discover new planets, 
             and track the International Space Station — all in one immersive dashboard.
            </p>
            <div className="project-tech">
              <span>EJS</span>
              <span>Node.js</span>
              <span>Nasa APIs</span>
              <span>Mapbox Api</span>
            </div>
          </motion.div>
        </a>
        {/* Pokedex */}
        <a
          href="https://github.com/adil162006/Pokedex"
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
              style={{ backgroundImage: "url('/projects/pokeball.png')" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <h3>Pokedex</h3>
            <p>
              A Pokedex application built with React, providing a clean and interactive interface to explore Pokémon data from the Pokémon API.
              Features include viewing Pokémon images, stats, types, and basic search functionality.
              The project focuses on frontend functionality, offering a responsive design, smooth navigation, and an intuitive user experience.
            </p>
            <div className="project-tech">
              <span>React</span>
              <span>Pokemon API</span>
              <span>Tailwind css</span>
            </div>
          </motion.div>
        </a>

      </motion.div>
    </motion.section>
  );
};
