import { getGame } from '@/server/rawg/getGame';
import { getGames } from '@/server/rawg/getGames';
import { trpcRoot } from '@/utils/trpc/trpcRoot';

export const appRouter = trpcRoot.router({
  getGames: getGames(),
  getGameBySlug: getGame(),
});

export type AppRouter = typeof appRouter;
