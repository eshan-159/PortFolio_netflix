// queries/getTimeline.ts
import { TimelineItem } from '../types';
import timelineItems from '../data/timeline';

export async function getTimeline(): Promise<TimelineItem[]> {
  return Promise.resolve(timelineItems);
}
