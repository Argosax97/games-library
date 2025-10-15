import Image from 'next/image';
import Link from 'next/link';

import { appRouter } from '@/server/trpc/router';
import { createContext } from '@/utils/trpc/trpcRoot';

export default async function Games() {
  const caller = appRouter.createCaller(await createContext({}));
  const data = await caller.getGames({ page: 1 });

  if (!data) return <div>Error</div>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
      {data.map((game) => (
        <Link
          key={game.id}
          href={`/games/${game.slug}`}
          className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-md"
        >
          <Image
            src={game.background_image ?? ''}
            alt={game.name ?? ''}
            fill
            sizes="(max-width: 640px) 50vw,
                   (max-width: 1024px) 33vw,
                   25vw"
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </Link>
      ))}
    </div>
  );
}
