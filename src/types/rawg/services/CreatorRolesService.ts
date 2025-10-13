/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Position } from '../models/Position';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CreatorRolesService {
    /**
     * Get a list of creator positions (jobs).
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @returns any
     * @throws ApiError
     */
    public static creatorRolesList(
        page?: number,
        pageSize?: number,
    ): CancelablePromise<{
        count: number;
        next?: string | null;
        previous?: string | null;
        results: Array<Position>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/creator-roles',
            query: {
                'page': page,
                'page_size': pageSize,
            },
        });
    }
}
