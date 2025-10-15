import { GamesService } from '@/types/rawg';
import { trpcRoot } from '@/utils/trpc/trpcRoot';

import { getGameSchema } from './getGame.schema';

export const getGame = () =>
  trpcRoot.procedure.input(getGameSchema).query(async ({ input }) => {
    return GamesService.gamesRead(input.slug);
  });
