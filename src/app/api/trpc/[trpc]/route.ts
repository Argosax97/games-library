import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

import { appRouter } from '@/server/trpc/router';

export const handler = (req: Request) =>
  fetchRequestHandler({
    req: req,
    router: appRouter,
    createContext: () => ({}),
    endpoint: '/api/trpc',
  });

export { handler as GET, handler as POST };
