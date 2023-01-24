import Player from "./player";
import { useStoreState } from "easy-peasy";

const PlayerBar = () => {
  const songs = useStoreState((state: any) => state.activeSongs);
  const activeSong = useStoreState((state: any) => state.activeSong);

  return (
    <div className="h-20 bg-zinc-900 w-screen p-3 text-white">
      <div className="flex items-center">
        {activeSong ? (
          <div className="p-3 w-1/4">
            <p className="text-base">{activeSong.name}</p>
            <p className="text-xs">{activeSong.artist.name}</p>
          </div>
        ) : null}
        <div className="w-1/2 text-center">
          {activeSong ? <Player songs={songs} activeSong={activeSong} /> : null}
        </div>
        {/* <div className="w-1/4 text-right">state</div> */}
      </div>
    </div>
  );
};

export default PlayerBar;
