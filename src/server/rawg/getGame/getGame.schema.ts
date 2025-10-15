import { z } from 'zod';

export const getGameSchema = z.object({
  slug: z.string(),
});
