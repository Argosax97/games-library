/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Publisher } from '../models/Publisher';
import type { PublisherSingle } from '../models/PublisherSingle';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PublishersService {
    /**
     * Get a list of video game publishers.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @returns any
     * @throws ApiError
     */
    public static publishersList(
        page?: number,
        pageSize?: number,
    ): CancelablePromise<{
        count: number;
        next?: string | null;
        previous?: string | null;
        results: Array<Publisher>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/publishers',
            query: {
                'page': page,
                'page_size': pageSize,
            },
        });
    }
    /**
     * Get details of the publisher.
     * @param id A unique integer value identifying this Publisher.
     * @returns PublisherSingle
     * @throws ApiError
     */
    public static publishersRead(
        id: number,
    ): CancelablePromise<PublisherSingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/publishers/{id}',
            path: {
                'id': id,
            },
        });
    }
}
