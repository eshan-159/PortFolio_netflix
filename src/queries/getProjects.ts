// queries/getProjects.ts
import { Project } from '../types';
import projects from '../data/projects';

export async function getProjects(): Promise<Project[]> {
  return Promise.resolve(projects);
}
