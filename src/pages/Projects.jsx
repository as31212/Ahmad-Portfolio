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
            <SuperProject name="Shop-IT" img="Shop.png" description="Shop-IT is a sleek and modern online clothing store designed to offer a seamless shopping experience for fashion enthusiasts. With a wide range of stylish clothing and accessories for men, women, and children, Shop-IT provides high-quality, trendy products at competitive prices. The store features a user-friendly interface with categories for easy browsing, a secure checkout process, and personalized recommendations to enhance the shopping experience. Whether you're looking for everyday essentials or statement pieces, Shop-IT has something for everyone"  github="https://github.com/as31212/Mock-Ecommerce-Store" url="https://shop-it-v2.netlify.app/" />
            <SuperProject name="Real-IT" img="real-it-img.png" description="Real-IT is an innovative online realty web app designed to help users find their ideal homes for buying or renting. With an intuitive interface and powerful search functionality, Real-IT allows users to browse a vast collection of property listings, complete with detailed descriptions, high-quality images, and pricing information. The platform caters to both buyers and renters, offering filters for location, price range, property type, and more to simplify the search process. Whether you're looking for your next dream home or a rental, Real-IT makes house hunting effortless and efficient" github="https://github.com/as31212/Mock-Home" url="https://real-it.netlify.app/" />
            </div>
        </section>
        </>
    );
}
export default Projects;