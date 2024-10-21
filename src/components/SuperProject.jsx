import {motion} from "framer-motion";

const SuperProject = ({ name, img, url, github, description }) => {
    return (
      <motion.article
      initial={{opacity:0 , y:100}}
      whileInView={{opacity:1 , y:0}}
      viewport={{once:true}}
      transition={{duration: 1}}
      className="flex gap-5 w-10/12 border-[1px] border-black p-5 rounded-lg jus">
        {/* Project Name and Picture */}
        
          <img
            src={img}
            alt={`Preview of ${name}`}
            className="rounded-lg w-1/2"
          />
          
  
        {/* Project Description */}
        <div className="flex flex-col gap-4 w-1/3" id="description-title-projects">
            <h2 className="font-bold mt-2 text-4xl">{name}</h2>
            <p className="text-lg">{description}.</p>
        </div>
  
        {/* Project Links */}
        <div className="flex flex-col gap-2 my-auto" id="project-links">
          <a
            target="_blank"
            href={url}
            rel="noopener noreferrer"
            className="border-2 font-bold rounded-lg py-4 px-8 text-center hover:bg-black hover:text-white ease-in-out duration-150"          >
            Live Demo
          </a>
          <a
            target="_blank"
            href={github}
            rel="noopener noreferrer"
            className="border-2 font-bold rounded-lg p-2 text-center bg-gray-800 text-white hover:bg-gray-900"
          >
            GitHub
          </a>
        </div>
      </motion.article>
    );
  };
  
  export default SuperProject;