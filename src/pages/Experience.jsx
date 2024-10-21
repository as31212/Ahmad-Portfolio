import { motion } from "framer-motion";

const Experience = () => {
  return (
    <>
      <div className="h-auto min-h-screen mt-5" id="Experience">
      <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          Explore My
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center text-5xl font-semibold"
        >
          Experience
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-10 p-40" id="frontend-backend">
          <motion.div
          initial={{opacity:0 , y:100}}
          whileInView={{opacity:1 , y:0}}
          transition={{duration: .4}}
          viewport={{once:true}}
            className="w-2/5 min-w-80 p-10  rounded-xl  border-2 border-black"
            id="frontend"
          >
            <h2 className="mb-10 text-center text-3xl text-gray-500">
              Frontend Development
            </h2>
            <div className="flex flex-wrap justify-between" id="frontend-skills">
              <div className="flex flex-wrap flex-col" id="frontend-skills-left">
                <div className="mb-10 skill flex flex-wrap ">
                  <i className="fa-solid fa-check mt-1 text-2xl mr-2 ml-2"></i>
                  <div className="skill-text text-2xl ">
                    <p className="font-bold">HTML</p>
                    <p>Experienced</p>
                  </div>
                </div>
                <div className="mb-10 skill flex flex-wrap ">
                  <i className="fa-solid fa-check mt-1 text-2xl mr-2 ml-2"></i>
                  <div className="skill-text text-2xl ">
                    <p className="font-bold">CSS</p>
                    <p>Experienced</p>
                  </div>
                </div>
                <div className="mb-10 skill flex flex-wrap ">
                  <i className="fa-solid fa-check mt-1 text-2xl mr-2 ml-2"></i>
                  <div className="skill-text text-2xl ">
                    <p className="font-bold">Javascript</p>
                    <p>Experienced</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap flex-col" id="frontend-skills-right">
                <div className="mb-10 skill flex flex-wrap ">
                  <i className="fa-solid fa-check mt-1 text-2xl mr-2 ml-2"></i>
                  <div className="skill-text text-2xl ">
                    <p className="font-bold">React</p>
                    <p>Experienced</p>
                  </div>
                </div>
                <div className="mb-10 skill flex flex-wrap ">
                  <i className="fa-solid fa-check mt-1 text-2xl mr-2 ml-2"></i>
                  <div className="skill-text text-2xl ">
                    <p className="font-bold">Tailwind</p>
                    <p>Experienced</p>
                  </div>
                </div>
                <div className="mb-10 skill flex flex-wrap ">
                  <i className="fa-solid fa-check mt-1 text-2xl mr-2 ml-2"></i>
                  <div className="skill-text text-2xl ">
                    <p className="font-bold">Typescript</p>
                    <p>Intermediate</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
          initial={{opacity:0 , y:100}}
          whileInView={{opacity:1 , y:0}}
          transition={{duration: .4}}
          viewport={{once:true}}
            className="w-2/5 p-10 min-w-80  rounded-xl  border-2 border-black"
            id="backend"
          >
            <h2 className="mb-10 text-center text-3xl text-gray-500">
              Backend Development
            </h2>
            <div className="flex flex-wrap justify-between" id="backend-skills">
              <div className="flex flex-wrap flex-col" id="backend-skills-left">
                <div className="mb-10 skill flex flex-wrap ">
                  <i className="fa-solid fa-check mt-1 text-2xl mr-2 ml-2"></i>
                  <div className="skill-text text-2xl ">
                    <p className="font-bold">Python</p>
                    <p>Basic</p>
                  </div>
                </div>
                <div className="mb-10 skill flex "flex-wrap >
                  <i className="fa-solid fa-check mt-1 text-2xl mr-2 ml-2"></i>
                  <div className="skill-text text-2xl ">
                    <p className="font-bold">SQL</p>
                    <p>Intermediate</p>
                  </div>
                </div>
                <div className="mb-10 skill flex flex-wrap ">
                  <i className="fa-solid fa-check mt-1 text-2xl mr-2 ml-2"></i>
                  <div className="skill-text text-2xl ">
                    <p className="font-bold">NodeJS</p>
                    <p>Basic</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap flex-col" id="backend-skills-right">
                <div className="mb-10 skill flex flex-wrap ">
                  <i className="fa-solid fa-check mt-1 text-2xl mr-2 ml-2"></i>
                  <div className="skill-text text-2xl ">
                    <p className="font-bold">ExpressJS</p>
                    <p>Basic</p>
                  </div>
                </div>
                <div className="mb-10 skill flex flex-wrap ">
                  <i className="fa-solid fa-check mt-1 text-2xl mr-2 ml-2"></i>
                  <div className="skill-text text-2xl ">
                    <p className="font-bold">MongoDB</p>
                    <p>Basic</p>
                  </div>
                </div>
                <div className="mb-10 skill flex flex-wrap ">
                  <i className="fa-solid fa-check mt-1 text-2xl mr-2 ml-2"></i>
                  <div className="skill-text text-2xl ">
                    <p className="font-bold">Rest API</p>
                    <p>Basic</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default Experience;
