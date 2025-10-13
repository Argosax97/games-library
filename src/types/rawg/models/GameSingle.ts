/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GamePlatformMetacritic } from './GamePlatformMetacritic';
export type GameSingle = {
    readonly id?: number;
    readonly slug?: string;
    readonly name?: string;
    readonly name_original?: string;
    readonly description?: string;
    readonly metacritic?: number;
    readonly metacritic_platforms?: Array<GamePlatformMetacritic>;
    readonly released?: string;
    readonly tba?: boolean;
    readonly updated?: string;
    readonly background_image?: string;
    readonly background_image_additional?: string;
    readonly website?: string;
    rating: number;
    readonly rating_top?: number;
    readonly ratings?: any;
    readonly reactions?: any;
    readonly added?: number;
    readonly added_by_status?: any;
    /**
     * in hours
     */
    readonly playtime?: number;
    readonly screenshots_count?: number;
    readonly movies_count?: number;
    readonly creators_count?: number;
    readonly achievements_count?: number;
    readonly parent_achievements_count?: string;
    /**
     * For example "https://www.reddit.com/r/uncharted/" or "uncharted"
     */
    readonly reddit_url?: string;
    readonly reddit_name?: string;
    readonly reddit_description?: string;
    readonly reddit_logo?: string;
    readonly reddit_count?: number;
    readonly twitch_count?: string;
    readonly youtube_count?: string;
    readonly reviews_text_count?: string;
    readonly ratings_count?: number;
    readonly suggestions_count?: number;
    readonly alternative_names?: Array<string>;
    /**
     * For example "http://www.metacritic.com/game/playstation-4/the-witcher-3-wild-hunt"
     */
    readonly metacritic_url?: string;
    readonly parents_count?: number;
    readonly additions_count?: number;
    readonly game_series_count?: number;
    esrb_rating?: {
        id?: number;
        slug?: GameSingle.slug;
        name?: GameSingle.name;
    } | null;
    platforms?: Array<{
        platform?: {
            id?: number;
            slug?: string;
            name?: string;
        };
        released_at?: string | null;
        requirements?: {
            minimum?: string;
            recommended?: string;
        } | null;
    }>;
};
export namespace GameSingle {
    export enum slug {
        EVERYONE = 'everyone',
        EVERYONE_10_PLUS = 'everyone-10-plus',
        TEEN = 'teen',
        MATURE = 'mature',
        ADULTS_ONLY = 'adults-only',
        RATING_PENDING = 'rating-pending',
    }
    export enum name {
        EVERYONE = 'Everyone',
        EVERYONE_10_ = 'Everyone 10+',
        TEEN = 'Teen',
        MATURE = 'Mature',
        ADULTS_ONLY = 'Adults Only',
        RATING_PENDING = 'Rating Pending',
    }
}

