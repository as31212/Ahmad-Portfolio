import Project from "./Project";

const Projects = () => {
  return (
    <>
      <section className="h-auto min-h-screen" id="Projects">
        <p className="text-center">Browse My Recent</p>
        <h3 className="text-center text-5xl font-semibold">Projects</h3>
        <div
          className=" flex flex-col flex-wrap items-center gap-20 h-auto p-10"
          id="Projects-container"
        >
          <Project
            title="Lead Service Line Replacement Prioritization Project"
            img="garret-project-pipes.png"
            description="Lead water service lines, once widely used for their durability and malleability, pose significant health risks due to lead leaching into drinking water (Fehr Graham, n.d.; Rabin, 2008). Over the years, several key laws and acts have been passed to address this issue. The 1986 Safe Drinking Water Act (SDWA) amendments were..."
            url="https://storymaps.arcgis.com/stories/0c8c51cf8d1e48dea01ce1ab13e0f8ae"
          />
          <Project
            title="Extreme Heat Vulnerability in Chicago"
            img="extreme-heat-blog.jpg"
            description="Heat is the deadliest weather hazard in the US, and it accounts for approximately twenty percent of environmental hazard deaths in the US (Sharma et al. 2018). Between the late 1980s and 2015, 130 people on average died due to heat stress (Sharma et al. 2018). One case of severe heat stress..."
            url="https://storymaps.arcgis.com/stories/93ee535b6bb9401da37e24eb561bcf8e"
          />
          <Project
            title="Honors Studies in Geography"
            img="thesis-fr.png"
            description="Heat is the most fatal environmental hazard and as such poses significant risks to public health. Seattle experiences excess mortality from heat at far lower temperatures compared to Phoenix, necessitating an investigation into this..."
            url="thesis.pdf"
          />
        </div>
      </section>
    </>
  );
};
export default Projects;
