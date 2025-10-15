import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

import { appRouter } from '@/server/trpc/router';
import { createContext } from '@/utils/trpc/trpcRoot';

export const handler = (req: Request) =>
  fetchRequestHandler({
    req,
    router: appRouter,
    endpoint: '/api/trpc',
    createContext: () => createContext(req),
    onError:
      process.env.NODE_ENV === 'development'
        ? ({ path, error }) => {
            console.error(
              `❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`,
            );
          }
        : undefined,
  });

export { handler as GET, handler as POST };
