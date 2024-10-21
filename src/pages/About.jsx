import { motion } from "framer-motion";

const About = () => {

    const yearsOfDevelopment = new Date();

  return (
    <>
      <section className="min-h-screen h-auto mb-40" id="About">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          Get to Know
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center text-5xl font-semibold"
        >
          About Me
        </motion.h2>
        <div
          className="flex flex-wrap gap-5 justify-center mt-20"
          id="experience-and-Education"
        >
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className=" min-w-80 border-2 border-gray-400 w-1/3 text-center p-10 text-2xl rounded-xl"
            id="experience"
          >
            <i class="fa-solid fa-medal"></i>
            <p className="font-bold">Experience</p>
            <p>{`${yearsOfDevelopment.getFullYear() - 2022}+ years`}</p>
            <p>Frontend Development</p>
            <p>{`${yearsOfDevelopment.getFullYear() - 2023}+ years`}</p>
            <p>Backend Development</p>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
            className="min-w-80 border-2 border-gray-400 w-1/3 text-center p-10 text-2xl rounded-xl"
            id="education"
          >
            <i class="fa-solid fa-book"></i>
            <p className="font-bold">Education</p>
            <p>Bachelors Degree</p>
            <p>BBA Business Analytics</p>
          </motion.div>
        </div>
        <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .4 }}
        className="min-w-80 border-2 mb-10 mt-10 mr-auto ml-auto border-gray-400 w-1/2 text-center p-10 text-2xl rounded-xl">
          <p>
            As a self-taught Full-stack software engineer, my journey in tech is fueled by
            an unquenchable thirst for knowledge and a commitment to continuous
            learning. Starting from scratch, I have cultivated a deep
            understanding of both design and data handling, enabling me to
            tackle complex challenges with precision and creativity. My ability
            to learn and adapt quickly is not just a skill but a cornerstone of
            my professional philosophy. I am always eager to expand my expertise
            and embrace new technologies or methodologies that enhance my
            effectiveness and contribute value to my team. This proactive
            approach ensures that I am always ready to meet the evolving demands
            of the tech industry.
          </p>
        </motion.div>
      </section>
    </>
  );
};
export default About;
