/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Tag } from '../models/Tag';
import type { TagSingle } from '../models/TagSingle';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TagsService {
    /**
     * Get a list of tags.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @returns any
     * @throws ApiError
     */
    public static tagsList(
        page?: number,
        pageSize?: number,
    ): CancelablePromise<{
        count: number;
        next?: string | null;
        previous?: string | null;
        results: Array<Tag>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tags',
            query: {
                'page': page,
                'page_size': pageSize,
            },
        });
    }
    /**
     * Get details of the tag.
     * @param id A unique integer value identifying this Tag.
     * @returns TagSingle
     * @throws ApiError
     */
    public static tagsRead(
        id: number,
    ): CancelablePromise<TagSingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tags/{id}',
            path: {
                'id': id,
            },
        });
    }
}
