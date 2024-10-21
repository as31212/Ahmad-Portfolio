import SuperProject from "../components/SuperProject"
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
            <div className=" flex flex-col-reverse justify-center items-center gap-20 h-auto min-h-[1300px] p-10" id="Projects-container">
            <SuperProject name="Shop-IT" img="Shop.png" description="Shop-IT is a mock e-commerce clothing store built to showcase frontend skills, featuring filtering, sorting, and cart functionality. It offers a clean, user-friendly interface to highlight key aspects of web development and UI design."  github="https://github.com/as31212/Mock-Ecommerce-Store" url="https://shop-it-v2.netlify.app/" />
            <SuperProject name="Real-IT" img="real-it-img.png" description="Real-IT is an innovative online realty web app built to showcase frontend skills, featuring sorting, search, filtering, pagination, and more. The platform provides a seamless user experience for browsing properties to buy or rent, with a focus on performance and responsive design." github="https://github.com/as31212/Mock-Home" url="https://real-it.netlify.app/" />
            <SuperProject name="Tech-IT API" img="tech-it-logo.png" github="https://github.com/as31212/Tech-it-Backend" description="Tech-IT is a mock e-commerce technology store built for the purpose of displaying fullstack skills. The backend includes login, authorization, session management, and more." url="" />
            </div>
        </section>
        </>
    );
}
export default Projects;