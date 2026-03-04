import { minimal } from "./minimal";
import { creative } from "./creative";
import { jobSeeker } from "./job-seeker";
import { student } from "./student";
import { fullstack } from "./fullstack";
import { dataScience } from "./data-science";

export type Template = {
  name: string;
  description: string;
  category: string;
  markdown: string;
};

export const profileTemplates: Template[] = [
  minimal,
  creative,
  jobSeeker,
  student,
  fullstack,
  dataScience,
];
