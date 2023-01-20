import GradientLayout from "../../components/gradientLayout";
import { validateToken } from "../../lib/auth";
import prisma from "../../lib/prisma";
import SongTable from "../../components/songs";

function Playlist({ playlist }) {
  return (
    <GradientLayout
      color="from-indigo-500"
      title={playlist.name}
      subtitle="playlist"
      description={`${playlist.songs.length} songs`}
      image={`https://picsum.photos/400?random=${playlist.id}`}
      rounded="rounded-md"
    >
      <SongTable songs={playlist.songs}></SongTable>
    </GradientLayout>
  );
}

export const getServerSideProps = async ({ query, req }) => {
  const { id } = validateToken(req.cookies.TRAX_ACCESS_TOKEN);
  const [playlist] = await prisma.playlist.findMany({
    where: {
      id: +query.id,
      userId: id,
    },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      },
    },
  });
  return {
    props: JSON.parse(JSON.stringify({ playlist })),
  };
};

export default Playlist;
