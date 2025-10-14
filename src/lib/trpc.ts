'use client';

import { httpBatchLink, loggerLink } from '@trpc/client';

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
    }),
  ],
});
