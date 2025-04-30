export enum SelectedPage {
  Home = "home",
  Services = "services",
  About = "about",
  Team = "team",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  desc: string;
}

export interface ClassType {
  // name: string;
  desc?: string;
  image: string;
}
