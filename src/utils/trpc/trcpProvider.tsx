'use client';

import { ReactNode, useState } from 'react';
import { defaultShouldDehydrateQuery } from '@tanstack/query-core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { trpcClient } from '@/utils/trpc/trpcClient';
import { trpcReact } from '@/utils/trpc/trpcReact';

export function TRPCProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 30 * 1000,
          },
          dehydrate: {
            shouldDehydrateQuery: (query) =>
              defaultShouldDehydrateQuery(query) ||
              query.state.status === 'pending',
          },
          hydrate: {},
        },
      }),
  );

  return (
    <trpcReact.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpcReact.Provider>
  );
}
