import { client } from '../client';
import { achievementsQuery } from './queries/achievementsQuery';

export const fetchAchievements = async () => {
  const achievements = await client.fetch(achievementsQuery);
  return achievements[0].item;
};
