import "@fortawesome/fontawesome-free/css/all.min.css";
import { motion } from "framer-motion";
import FloatingImage from "../components/FloatingImage";
import { useState, useEffect } from "react";
import { useType } from "../Hooks/useType";

const Home = () => {
  const {typewriter,headerText} = useType();

  useEffect(() => {
    typewriter(`Hello, I'mAhmad SearcyFull-Stack Software Engineer`);
  }, []);

  return (
    <>
      <section className="p-10 min-h-screen mb-20" id="Home">
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-20 mt-40"
          id="img-and-text"
        >
          <FloatingImage />
          <div
            className="flex flex-col justify-center gap-10 text-center w-[400px]"
            id="img-text"
          >
            <div className="flex flex-col gap-3" id="Home-text">
              <p className="text-2xl font-bold">{headerText.slice(0, 10)}</p>
              <h2 className="font-bold text-5xl">{headerText.slice(10, 22)}</h2>
              <h3 className="font-bold text-2xl text-gray-500">
                {headerText.slice(22)}
              </h3>
              <div id="download-buttons">
                {/* Add your download buttons here */}
              </div>
            </div>
            <div className="flex justify-center gap-5" id="linkedin-github">
              <a target="_blank" href="https://github.com/as31212">
                <i className="fa-brands fa-github text-4xl"></i>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ahmad-searcy/"
              >
                <i className="fa-brands fa-linkedin text-4xl"></i>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};
export default Home;
