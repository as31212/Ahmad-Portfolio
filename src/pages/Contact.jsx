import { motion } from "framer-motion";
import Footer from "../components/Footer";


const Contact = ()=>{

    return(
        <>
        <div className=" min-h-screen h-auto flex flex-col gap-10 items-center p-5" id="Contact">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          Get In Touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center text-5xl font-semibold"
        >
          Contact Me
        </motion.h2>
            <motion.div initial={{opacity:0 , y: 200}} whileInView={{opacity:1 , y:0}} transition={{duration:1}} viewport={{once:true}} className=" border-2 border-gray-400 rounded-3xl flex flex-wrap gap-10 p-5 text-[22px] mt-60" id="anchors">
                <a target="_blank" href="mailto:ahmadsearcy7@gmail.com"><i class="fa-solid fa-envelope"></i> ahmadsearcy7@gmail.com</a>
                <a target="_blank" href="https://www.linkedin.com/in/ahmad-searcy/"><i class="fa-brands fa-linkedin"></i> https://www.linkedin.com/in/ahmad-searcy/</a>
            </motion.div>
            <Footer />
        </div>
       
        </>
    );
}
export default Contact;