/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Store } from '../models/Store';
import type { StoreSingle } from '../models/StoreSingle';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StoresService {
    /**
     * Get a list of video game storefronts.
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @returns any
     * @throws ApiError
     */
    public static storesList(
        ordering?: string,
        page?: number,
        pageSize?: number,
    ): CancelablePromise<{
        count: number;
        next?: string | null;
        previous?: string | null;
        results: Array<Store>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stores',
            query: {
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
            },
        });
    }
    /**
     * Get details of the store.
     * @param id A unique integer value identifying this Store.
     * @returns StoreSingle
     * @throws ApiError
     */
    public static storesRead(
        id: number,
    ): CancelablePromise<StoreSingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stores/{id}',
            path: {
                'id': id,
            },
        });
    }
}
