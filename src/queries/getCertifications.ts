// queries/getCertifications.ts
import { Certification } from '../types';
import certifications from '../data/certifications';

export async function getCertifications(): Promise<Certification[]> {
  return Promise.resolve(certifications);
}
