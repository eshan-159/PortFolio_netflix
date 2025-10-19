// queries/getSkills.ts
import { Skill } from '../types';
import skills from '../data/skills';

export async function getSkills(): Promise<Skill[]> {
  return Promise.resolve(skills);
}
