import { webApp } from "./web-app";
import { cliTool } from "./cli-tool";
import { library } from "./library";
import { portfolio } from "./portfolio";

export type RepoTemplate = {
  name: string;
  description: string;
  category: string;
  markdown: string;
};

export const repoTemplates: RepoTemplate[] = [webApp, cliTool, library, portfolio];
