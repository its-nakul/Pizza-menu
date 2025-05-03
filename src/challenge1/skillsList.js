import React from "react";
import Skill from "./skill";

const skills = [
  { skillName: "HTML + CSS", level: "advanced", color: "grey" },
  { skillName: "Javascript", level: "intermediate", color: "purple" },
  { skillName: "Web Design", level: "advanced", color: "green" },
  { skillName: "Git & Github", level: "beginner", color: "magenta" },
  { skillName: "React", level: "beginner", color: "blue" },
];

const SkillsList = () => {
  return (
    <div className="skill-list">
      {skills?.map((data) => {
        return (
          <Skill
            name={data?.skillName}
            level={data?.level}
            color={data?.color}
          />
        );
      })}
    </div>
  );
};

export default SkillsList;
