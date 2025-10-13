/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Platform } from '../models/Platform';
import type { PlatformParentSingle } from '../models/PlatformParentSingle';
import type { PlatformSingle } from '../models/PlatformSingle';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PlatformsService {
    /**
     * Get a list of video game platforms.
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @returns any
     * @throws ApiError
     */
    public static platformsList(
        ordering?: string,
        page?: number,
        pageSize?: number,
    ): CancelablePromise<{
        count: number;
        next?: string | null;
        previous?: string | null;
        results: Array<Platform>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/platforms',
            query: {
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
            },
        });
    }
    /**
     * Get a list of parent platforms.
     * For instance, for PS2 and PS4 the “parent platform” is PlayStation.
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @returns any
     * @throws ApiError
     */
    public static platformsListsParentsList(
        ordering?: string,
        page?: number,
        pageSize?: number,
    ): CancelablePromise<{
        count: number;
        next?: string | null;
        previous?: string | null;
        results: Array<PlatformParentSingle>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/platforms/lists/parents',
            query: {
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
            },
        });
    }
    /**
     * Get details of the platform.
     * @param id A unique integer value identifying this Platform.
     * @returns PlatformSingle
     * @throws ApiError
     */
    public static platformsRead(
        id: number,
    ): CancelablePromise<PlatformSingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/platforms/{id}',
            path: {
                'id': id,
            },
        });
    }
}
