/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Developer } from '../models/Developer';
import type { DeveloperSingle } from '../models/DeveloperSingle';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DevelopersService {
    /**
     * Get a list of game developers.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @returns any
     * @throws ApiError
     */
    public static developersList(
        page?: number,
        pageSize?: number,
    ): CancelablePromise<{
        count: number;
        next?: string | null;
        previous?: string | null;
        results: Array<Developer>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/developers',
            query: {
                'page': page,
                'page_size': pageSize,
            },
        });
    }
    /**
     * Get details of the developer.
     * @param id A unique integer value identifying this Developer.
     * @returns DeveloperSingle
     * @throws ApiError
     */
    public static developersRead(
        id: number,
    ): CancelablePromise<DeveloperSingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/developers/{id}',
            path: {
                'id': id,
            },
        });
    }
}
