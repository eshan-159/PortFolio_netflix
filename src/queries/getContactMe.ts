// queries/getContactMe.ts
import { ContactMe } from '../types';
import contactMe from '../data/contact';

export async function getContactMe(): Promise<ContactMe> {
  return Promise.resolve(contactMe);
}
