import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();
export const router = t.router;
export const publicProcedure = t.procedure;

export const appRouter = router({
  hello: publicProcedure
    .input(z.object({ name: z.string().optional() }))
    .query(({ input }) => {
      return { greeting: `Hello ${input.name ?? 'world'}!` };
    }),
  getGames: publicProcedure
    .input(
      z.object({
        search: z.string().optional(),
        page: z.number().optional(),
      }),
    )
    .query(async ({ input }) => {
      const params = new URLSearchParams({
        key: process.env.RAWG_API_KEY ?? '',
        search: input.search ?? '',
        page: (input.page ?? 1).toString(),
      });

      const response = await fetch(`https://api.rawg.io/api/games?${params}`);
      if (!response.ok) throw new Error('Failed to fetch RAWG API');

      return await response.json();
    }),
});

export type AppRouter = typeof appRouter;
