import { getGames } from '@/server/rawg/getGames/getGames';
import { trpcRoot } from '@/utils/trpc/trpcRoot';

export const appRouter = trpcRoot.router({
  getGames: getGames(),
});

export type AppRouter = typeof appRouter;
