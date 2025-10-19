// queries/getWorkPermit.ts
import { WorkPermit } from '../types';
import workPermit from '../data/workPermit';

export async function getWorkPermit(): Promise<WorkPermit> {
  return Promise.resolve(workPermit);
}
