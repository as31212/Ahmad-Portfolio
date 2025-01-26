import { motion } from "framer-motion";
import { Skill } from "../components/Skill";

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
                <Skill name={"HTML"} exp={"Experienced"} />
                <Skill name={"CSS"} exp={"Experienced"} />
                <Skill name={"JavaScript"} exp={"Experienced"} />
                <Skill name={"TypeScript"} exp={"Experienced"} />
                <Skill name={"Redux"} exp={"Experienced"} />
                <Skill name={"Jest"} exp={"Experienced"} />
              </div>
              <div className="flex flex-wrap flex-col" id="frontend-skills-right">
              <Skill name={"Framer-Motion"} exp={"Intermediate"} />
              <Skill name={"React"} exp={"Experienced"} />
              <Skill name={"NextJS"} exp={"Intermediate"} />
              <Skill name={"Tailwind"} exp={"Experienced"} />
              <Skill name={"Bootstrap"} exp={"Experienced"} />
              <Skill name={"Swiper"} exp={"Intermediate"} />
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
              <Skill name={"NodeJS"} exp={"Experienced"} />
              <Skill name={"ExpressJS"} exp={"Experienced"} />
              <Skill name={"Spring"} exp={"Experienced"} />
              <Skill name={"MongoDB"} exp={"Experienced"} />
              <Skill name={"JUnit"} exp={"Experienced"} />
              <Skill name={"JDBC"} exp={"Experienced"} />

                </div>
              <div className="flex flex-wrap flex-col" id="backend-skills-right">
              <Skill name={"Python"} exp={"Intermediate"} />
              <Skill name={"Java"} exp={"Experienced"} />
              <Skill name={"Javalin"} exp={"Experienced"} />
              <Skill name={"Postgres SQL"} exp={"Experienced"} />
              <Skill name={"My SQL"} exp={"Experienced"} />
              <Skill name={"Logback"} exp={"Experienced"} />
              
              

              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default Experience;
