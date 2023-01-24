import Image from "next/image";
import GradientLayout from "../components/gradientLayout";
import { useMe } from "../lib/hooks";
import prisma from "../lib/prisma";

function Home({ artists }: any) {
  const { user, isLoading, error } = useMe();

  const artist = artists.map((element, i) => {
    return (
      <div className="p-2 w-3/6 h-3/6" key={i}>
        <div className="h-full w-full p-2 bg-zinc-900 rounded-lg">
          <div className="flex justify-center mt-5">
            <Image
              alt="profile picture artist"
              src="/artist.png"
              width={110}
              height={110}
              className="rounded-full"
            />
          </div>
          <div className="m-5 p-5">
            <p className="text-sm font-bold">{element.name}</p>
            <p className="text-xs font-light">Artist</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <GradientLayout
      subtitle="profile"
      title={`${user?.firstName} ${user?.lastName}`}
      description={`${user?.playlistsCount} public playlist`}
      image="/teddy.png"
      color="from-red-500"
      rounded="rounded-full"
    >
      <div className="text-white">
        <div className="w-full h-full p-5">
          <p className="text-lg font-bold">Top artists this month</p>
          <p className="text-xs">Only visible to you</p>
        </div>
        <div className="flex">{artist}</div>
      </div>
    </GradientLayout>
  );
}

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});
  return {
    props: JSON.parse(JSON.stringify({ artists })),
  };
};

export default Home;
