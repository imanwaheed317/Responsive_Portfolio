import React from 'react';
import { skillsData } from '../../data';
import SectionHeading from '@/About/SectionHeading';
import SkillsCard from './SkillsCard';

const Skills = () => {
  return (
    <div className="pt-16 pb-16 bg-[#231535]">
      <SectionHeading>My Skills</SectionHeading>
      <div className="mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center gap-5">
        {skillsData.map((skill) => (
          <div key={skill.id}>
            <SkillsCard skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
