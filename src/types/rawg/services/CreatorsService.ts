/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Person } from '../models/Person';
import type { PersonSingle } from '../models/PersonSingle';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CreatorsService {
    /**
     * Get a list of game creators.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @returns any
     * @throws ApiError
     */
    public static creatorsList(
        page?: number,
        pageSize?: number,
    ): CancelablePromise<{
        count: number;
        next?: string | null;
        previous?: string | null;
        results: Array<Person>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/creators',
            query: {
                'page': page,
                'page_size': pageSize,
            },
        });
    }
    /**
     * Get details of the creator.
     * @param id A unique integer value identifying this Person.
     * @param id
     * @returns PersonSingle
     * @throws ApiError
     */
    public static creatorsRead(
        id: number,
        id: string,
    ): CancelablePromise<PersonSingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/creators/{id}',
            path: {
                'id': id,
                'id': id,
            },
        });
    }
}
