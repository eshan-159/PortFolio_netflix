// queries/getProfileBanner.ts
import { ProfileBanner } from '../types';
import profileBanner from '../data/profileBanner';

export async function getProfileBanner(): Promise<ProfileBanner> {
  return Promise.resolve(profileBanner);
}
