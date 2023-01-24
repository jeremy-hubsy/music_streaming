import Player from "./player";

const PlayerBar = () => {
  return (
    <div className="h-20 bg-slate-900 w-screen p-3 text-white">
      <div className="flex items-center">
        <div className="p-3 w-1/4">
          <p className="text-base">Song Name</p>
          <p className="text-xs">Artist Name</p>
        </div>
        <div className="w-1/2 text-center">
          <Player />
        </div>
        <div className="w-1/4 text-right">state</div>
      </div>
    </div>
  );
};

export default PlayerBar;
