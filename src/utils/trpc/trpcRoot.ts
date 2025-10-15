import { initTRPC } from '@trpc/server';
import { type FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import { cookies, headers } from 'next/headers';

export async function createContext(
  _opts?: FetchCreateContextFnOptions | object,
) {
  // You can use this to add per-request info like:
  // - current user (from cookies/JWT)
  // - database connection
  // - request headers
  // - etc.

  const h = await headers(); // Next.js headers
  const c = await cookies(); // Next.js cookies

  const userToken = c.get('token')?.value ?? null;

  // Simulate decoding user from token (example)
  const user = userToken ? { id: '123', name: 'Alex' } : null;

  return {
    headers: Object.fromEntries(h),
    user,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;

export const trpcRoot = initTRPC.context<Context>().create({});
