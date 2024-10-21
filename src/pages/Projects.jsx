import Project from "../components/Project";
import { motion } from "framer-motion";
const Projects = ()=>{

    return(
        <>
        <section className="h-auto min-h-screen" id="Projects">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          Browse My Recent
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center text-5xl font-semibold"
        >
          Projects
        </motion.h2>
            <div className=" flex flex-wrap justify-center gap-20 h-auto p-10" id="Projects-container">
            <Project title="Shop-IT" img="Shop.png" github="https://github.com/as31212/Mock-Ecommerce-Store" url="https://shop-it-v2.netlify.app/" />
            <Project title="Real-IT" img="real-it-img.png" github="https://github.com/as31212/Mock-Home" url="https://real-it.netlify.app/" />
            </div>
        </section>
        </>
    );
}
export default Projects;