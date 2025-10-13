'use client';

import { trpc } from '@/utils/trpc/trpc';

export default function Home() {
  const { data, isLoading } = trpc.hello.useQuery({ name: 'Alexander' });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {data?.greeting}
    </div>
  );
}
