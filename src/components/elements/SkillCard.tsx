type skillCardType = {
  skill: {
    skillIcon: any;
    skillName: string;
    skillExperience: string;
    skillProficiency: string;
  };
};

const SkillCard = ({ skill }: skillCardType) => {
  /* Set the color of the text based on the proficiency */
  let skillProficiencyColor: any = "";
  if (skill.skillProficiency === "High") {
    skillProficiencyColor = "text-clr-thertiary-one";
  }
  if (skill.skillProficiency === "Medium") {
    skillProficiencyColor = "text-clr-thertiary-two";
  }
  if (skill.skillProficiency === "Low") {
    skillProficiencyColor = "text-clr-thertiary-three";
  }

  return (
    <div className="flex w-full items-center gap-2 rounded-xl bg-clr-primary-two px-2 py-2">
      <div className="text-4xl lg:text-5xl">{skill.skillIcon}</div>
      <div className="w-full">
        <div className="flex justify-between">
          <h4 className="text-xl font-medium lg:text-2xl">
            {skill.skillName}{" "}
            <span className="text-base font-normal text-clr-primary-three/75 lg:text-lg">
              {skill.skillExperience}
            </span>
          </h4>
          <h4
            className={`text-lg font-medium lg:text-xl ${skillProficiencyColor}`}
          >
            {skill.skillProficiency}
          </h4>
        </div>
        <div className="h-3 w-full rounded-full bg-gradient-to-r from-clr-secondary-one to-clr-secondary-two" />
      </div>
    </div>
  );
};

export default SkillCard;
