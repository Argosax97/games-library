/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Game = {
    readonly id?: number;
    readonly slug?: string;
    readonly name?: string;
    readonly released?: string;
    readonly tba?: boolean;
    readonly background_image?: string;
    rating: number;
    readonly rating_top?: number;
    readonly ratings?: any;
    readonly ratings_count?: number;
    readonly reviews_text_count?: string;
    readonly added?: number;
    readonly added_by_status?: any;
    readonly metacritic?: number;
    /**
     * in hours
     */
    readonly playtime?: number;
    readonly suggestions_count?: number;
    readonly updated?: string;
    esrb_rating?: {
        id?: number;
        slug?: Game.slug;
        name?: Game.name;
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
export namespace Game {
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

