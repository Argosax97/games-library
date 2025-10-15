import { appRouter } from '@/server/trpc/router';
import { createContext } from '@/utils/trpc/trpcRoot';

export default async function GamePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caller = appRouter.createCaller(await createContext({}));
  const game = await caller.getGameBySlug({
    slug: slug,
  });

  if (!game) return <div>Game not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{game.name ?? ''}</h1>
      <img
        src={game.background_image}
        alt={game.name}
        className="w-full max-w-3xl rounded-xl shadow-lg"
      />
    </div>
  );
}
