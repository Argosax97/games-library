'use client';

import { trpcReact } from '@/utils/trpc/trpcReact';

export default function Home() {
  const { data, isLoading } = trpcReact.getGames.useQuery({ page: 1 });

  if (isLoading) return <div>Loading...</div>;
  console.log(data);
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"></div>
  );
}
