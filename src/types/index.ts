export interface IMetaHead {
  title: string;
  description: string;
  ogImageUrl: string;
}

export interface IHeroProps {
  name: string;
  about: string;
  technologies: string[];
}

export interface IExperience {
  name: string;
  resume: string;
  startDate: string;
  endDate: string;
  experiencia: boolean,
  tecnologias: string[];
  description: string[];
}
export interface IExperiences {
  title: string;
  details: IExperience[];
}

export interface IProject {
  title: string;
  isFeatured: boolean;
  thumbnail: string;
  githubUrl: string;
  youtubeUrl: string;
  liveUrl: string;
  tecnologias: string[];
  description: string;
}
export interface IProjects {
  projects: IProject[];
}

export interface IProjectDetails {
  projectDetail: IProject;
}

export interface ISkill {
  name: string;
  url: string;
  time: string;
}

export interface ISkills {
  skills: ISkill[]
}

export interface ISkillsProps {
  title: string;
  skills: ISkill[];
}