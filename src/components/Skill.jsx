export const Skill = ({ name, exp }) => {
  return (
    <>
      <div className="mb-10 skill flex flex-wrap ">
        <i className="fa-solid fa-check mt-1 text-2xl mr-2 ml-2"></i>
        <div className="skill-text text-2xl ">
          <p className="font-bold">{name}</p>
          <p>{exp}</p>
        </div>
      </div>
    </>
  );
};
