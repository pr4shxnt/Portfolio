import React from "react";
import SkillsData from "../Data/SkillsData";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen pt-16 flex justify-center">
      <div className="w-3/4 text-center flex flex-col gap-10">
        <h1 className="text-4xl text-white font-bold">Skills</h1>
        <div className="flex flex-wrap gap-10 justify-center">
          {SkillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
