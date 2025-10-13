/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Genre } from '../models/Genre';
import type { GenreSingle } from '../models/GenreSingle';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GenresService {
    /**
     * Get a list of video game genres.
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @returns any
     * @throws ApiError
     */
    public static genresList(
        ordering?: string,
        page?: number,
        pageSize?: number,
    ): CancelablePromise<{
        count: number;
        next?: string | null;
        previous?: string | null;
        results: Array<Genre>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/genres',
            query: {
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
            },
        });
    }
    /**
     * Get details of the genre.
     * @param id A unique integer value identifying this Genre.
     * @returns GenreSingle
     * @throws ApiError
     */
    public static genresRead(
        id: number,
    ): CancelablePromise<GenreSingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/genres/{id}',
            path: {
                'id': id,
            },
        });
    }
}
