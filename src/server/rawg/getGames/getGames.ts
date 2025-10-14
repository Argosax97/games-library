import { getGamesSchema } from '@/server/rawg/getGames/getGames.schema';
import { GamesService } from '@/types/rawg';
import { trpcRoot } from '@/utils/trpc/trpcRoot';

export const getGames = () =>
  trpcRoot.procedure.input(getGamesSchema).query(async ({ input }) => {
    const games = await GamesService.gamesList(
      input.page,
      input.pageSize,
      input.search,
      input.searchPrecise,
      input.searchExact,
      input.parentPlatforms,
      input.platforms,
      input.stores,
      input.developers,
      input.publishers,
      input.genres,
      input.tags,
      input.creators,
      input.dates,
      input.updated,
      input.platformsCount,
      input.metacritic,
      input.excludeCollection,
      input.excludeAdditions,
      input.excludeParents,
      input.excludeGameSeries,
      input.excludeStores,
      input.ordering,
    );

    return games.results;
  });
