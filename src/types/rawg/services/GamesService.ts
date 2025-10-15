/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Game } from '../models/Game';
import type { GamePersonList } from '../models/GamePersonList';
import type { GameSingle } from '../models/GameSingle';
import type { GameStoreFull } from '../models/GameStoreFull';
import type { Movie } from '../models/Movie';
import type { ParentAchievement } from '../models/ParentAchievement';
import type { Reddit } from '../models/Reddit';
import type { ScreenShot } from '../models/ScreenShot';
import type { Twitch } from '../models/Twitch';
import type { Youtube } from '../models/Youtube';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GamesService {
    /**
     * Get a list of games.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search Search query.
     * @param searchPrecise Disable fuzziness for the search query.
     * @param searchExact Mark the search query as exact.
     * @param parentPlatforms Filter by parent platforms, for example: `1,2,3`.
     * @param platforms Filter by platforms, for example: `4,5`.
     * @param stores Filter by stores, for example: `5,6`.
     * @param developers Filter by developers, for example: `1612,18893` or `valve-software,feral-interactive`.
     * @param publishers Filter by publishers, for example: `354,20987` or `electronic-arts,microsoft-studios`.
     * @param genres Filter by genres, for example: `4,51` or `action,indie`.
     * @param tags Filter by tags, for example: `31,7` or `singleplayer,multiplayer`.
     * @param creators Filter by creators, for example: `78,28` or `cris-velasco,mike-morasky`.
     * @param dates Filter by a release date, for example: `2010-01-01,2018-12-31.1960-01-01,1969-12-31`.
     * @param updated Filter by an update date, for example: `2020-12-01,2020-12-31`.
     * @param platformsCount Filter by platforms count, for example: `1`.
     * @param metacritic Filter by a metacritic rating, for example: `80,100`.
     * @param excludeCollection Exclude games from a particular collection, for example: `123`.
     * @param excludeAdditions Exclude additions.
     * @param excludeParents Exclude games which have additions.
     * @param excludeGameSeries Exclude games which included in a game series.
     * @param excludeStores Exclude stores, for example: `5,6`.
     * @param ordering Available fields: `name`, `released`, `added`, `created`, `updated`, `rating`, `metacritic`. You can reverse the sort order adding a hyphen, for example: `-released`.
     * @returns any
     * @throws ApiError
     */
    public static gamesList(
        page?: number,
        pageSize?: number,
        search?: string,
        searchPrecise?: boolean,
        searchExact?: boolean,
        parentPlatforms?: string,
        platforms?: string,
        stores?: string,
        developers?: string,
        publishers?: string,
        genres?: string,
        tags?: string,
        creators?: string,
        dates?: string,
        updated?: string,
        platformsCount?: number,
        metacritic?: string,
        excludeCollection?: number,
        excludeAdditions?: boolean,
        excludeParents?: boolean,
        excludeGameSeries?: boolean,
        excludeStores?: string,
        ordering?: string,
    ): CancelablePromise<{
        count: number;
        next?: string | null;
        previous?: string | null;
        results: Array<Game>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/games',
            query: {
                'page': page,
                'page_size': pageSize,
                'search': search,
                'search_precise': searchPrecise,
                'search_exact': searchExact,
                'parent_platforms': parentPlatforms,
                'platforms': platforms,
                'stores': stores,
                'developers': developers,
                'publishers': publishers,
                'genres': genres,
                'tags': tags,
                'creators': creators,
                'dates': dates,
                'updated': updated,
                'platforms_count': platformsCount,
                'metacritic': metacritic,
                'exclude_collection': excludeCollection,
                'exclude_additions': excludeAdditions,
                'exclude_parents': excludeParents,
                'exclude_game_series': excludeGameSeries,
                'exclude_stores': excludeStores,
                'ordering': ordering,
            },
        });
    }
    /**
     * Get a list of DLC's for the game, GOTY and other editions, companion apps, etc.
     * @param gamePk
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @returns any
     * @throws ApiError
     */
    public static gamesAdditionsList(
        gamePk: string,
        page?: number,
        pageSize?: number,
    ): CancelablePromise<{
        count: number;
        next?: string | null;
        previous?: string | null;
        results: Array<Game>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/games/{game_pk}/additions',
            path: {
                'game_pk': gamePk,
            },
            query: {
                'page': page,
                'page_size': pageSize,
            },
        });
    }
    /**
     * Get a list of individual creators that were part of the development team.
     * @param gamePk
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @returns any
     * @throws ApiError
     */
    public static gamesDevelopmentTeamList(
        gamePk: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
    ): CancelablePromise<{
        count: number;
        next?: string | null;
        previous?: string | null;
        results: Array<GamePersonList>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/games/{game_pk}/development-team',
            path: {
                'game_pk': gamePk,
            },
            query: {
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
            },
        });
    }
    /**
     * Get a list of games that are part of the same series.
     * @param gamePk
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @returns any
     * @throws ApiError
     */
    public static gamesGameSeriesList(
        gamePk: string,
        page?: number,
        pageSize?: number,
    ): CancelablePromise<{
        count: number;
        next?: string | null;
        previous?: string | null;
        results: Array<Game>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/games/{game_pk}/game-series',
            path: {
                'game_pk': gamePk,
            },
            query: {
                'page': page,
                'page_size': pageSize,
            },
        });
    }
    /**
     * Get a list of parent games for DLC's and editions.
     * @param gamePk
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @returns any
     * @throws ApiError
     */
    public static gamesParentGamesList(
        gamePk: string,
        page?: number,
        pageSize?: number,
    ): CancelablePromise<{
        count: number;
        next?: string | null;
        previous?: string | null;
        results: Array<Game>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/games/{game_pk}/parent-games',
            path: {
                'game_pk': gamePk,
            },
            query: {
                'page': page,
                'page_size': pageSize,
            },
        });
    }
    /**
     * Get screenshots for the game.
     * @param gamePk
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @returns any
     * @throws ApiError
     */
    public static gamesScreenshotsList(
        gamePk: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
    ): CancelablePromise<{
        count: number;
        next?: string | null;
        previous?: string | null;
        results: Array<ScreenShot>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/games/{game_pk}/screenshots',
            path: {
                'game_pk': gamePk,
            },
            query: {
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
            },
        });
    }
    /**
     * Get links to the stores that sell the game.
     * @param gamePk
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @returns any
     * @throws ApiError
     */
    public static gamesStoresList(
        gamePk: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
    ): CancelablePromise<{
        count: number;
        next?: string | null;
        previous?: string | null;
        results: Array<GameStoreFull>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/games/{game_pk}/stores',
            path: {
                'game_pk': gamePk,
            },
            query: {
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
            },
        });
    }
    /**
     * Get details of the game.
     * @returns GameSingle
     * @throws ApiError
     * @param id
     */
    public static gamesRead(
        id: string,
    ): CancelablePromise<GameSingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/games/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of game achievements.
     * @param id A unique integer value identifying this Game.
     * @returns ParentAchievement
     * @throws ApiError
     */
    public static gamesAchievementsRead(
        id: number,
    ): CancelablePromise<ParentAchievement> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/games/{id}/achievements',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of game trailers.
     * @param id A unique integer value identifying this Game.
     * @returns Movie
     * @throws ApiError
     */
    public static gamesMoviesRead(
        id: number,
    ): CancelablePromise<Movie> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/games/{id}/movies',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of most recent posts from the game's subreddit.
     * @param id A unique integer value identifying this Game.
     * @returns Reddit
     * @throws ApiError
     */
    public static gamesRedditRead(
        id: number,
    ): CancelablePromise<Reddit> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/games/{id}/reddit',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of visually similar games, available only for business and enterprise API users.
     * @param id A unique integer value identifying this Game.
     * @returns GameSingle
     * @throws ApiError
     */
    public static gamesSuggestedRead(
        id: number,
    ): CancelablePromise<GameSingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/games/{id}/suggested',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get streams on Twitch associated with the game, available only for business and enterprise API users.
     * @param id A unique integer value identifying this Game.
     * @returns Twitch
     * @throws ApiError
     */
    public static gamesTwitchRead(
        id: number,
    ): CancelablePromise<Twitch> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/games/{id}/twitch',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get videos from YouTube associated with the game, available only for business and enterprise API users.
     * @param id A unique integer value identifying this Game.
     * @returns Youtube
     * @throws ApiError
     */
    public static gamesYoutubeRead(
        id: number,
    ): CancelablePromise<Youtube> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/games/{id}/youtube',
            path: {
                'id': id,
            },
        });
    }
}
