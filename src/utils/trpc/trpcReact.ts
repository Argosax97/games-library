'use client';

import { createTRPCReact } from '@trpc/react-query';

import type { AppRouter } from '@/server/trpc/router';

export const trpcReact = createTRPCReact<AppRouter>();
