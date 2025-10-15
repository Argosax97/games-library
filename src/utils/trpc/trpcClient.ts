'use client';

import { getFetch, httpBatchLink, loggerLink } from '@trpc/client';

import { trpcReact } from '@/utils/trpc/trpcReact';

export const trpcClient = trpcReact.createClient({
  links: [
    loggerLink({
      enabled: (opts) =>
        process.env.NODE_ENV === 'development' ||
        (opts.direction === 'down' && opts.result instanceof Error),
    }),
    httpBatchLink({
      url: '/api/trpc',
      fetch: async (input, init?) => {
        const fetch = getFetch();
        return fetch(input, {
          ...init,
          credentials: 'include',
        });
      },
    }),
  ],
});
