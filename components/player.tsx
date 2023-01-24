import ReactHowler from "react-howler";
import { useEffect, useState, useRef } from "react";
import {
  MdShuffle,
  MdSkipPrevious,
  MdSkipNext,
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdOutlineRepeat,
} from "react-icons/md";
import { useStoreActions } from "easy-peasy";

type Props = {
  songs: string[];
  activeSong: string;
};

const Player = (props: Props) => {
  const { songs, activeSong } = props;
  const [playing, setPlaying] = useState(true);
  const [index, setIndex] = useState(0);
  const [seek, setSeek] = useState(0.0);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [duration, setDuration] = useState(0.0);

  const setPlayState = (value: boolean) => {
    setPlaying(value);
  };

  const onShuffle = () => {
    setShuffle((state) => !state);
  };

  const onRepeat = () => {
    setRepeat((state) => !state);
  };

  return (
    <div>
      <div>
        <ReactHowler playing={playing} src={activeSong?.url} />
      </div>
      <div className="justify-center">
        <div className="flex justify-center">
          <button
            className={`p-2 ${shuffle ? "text-white" : "text-slate-500"}`}
            aria-label="shuffle"
            onClick={onShuffle}
          >
            <MdShuffle />
          </button>
          <button className="text-slate-500 p-2" aria-label="previous">
            <MdSkipPrevious />
          </button>
          {playing ? (
            <button
              className="text-white p-2 text-3xl"
              aria-label="pause "
              onClick={() => setPlayState(false)}
            >
              <MdOutlinePauseCircleFilled />
            </button>
          ) : (
            <button
              className="text-white p-2 text-3xl"
              aria-label="play"
              onClick={() => setPlayState(true)}
            >
              <MdOutlinePlayCircleFilled />
            </button>
          )}

          <button className="text-slate-500 p-2" aria-label="next">
            <MdSkipNext />
          </button>
          <button
            className={`p-2 ${repeat ? "text-white" : "text-slate-500"}`}
            aria-label="repeat"
            onClick={onRepeat}
          >
            <MdOutlineRepeat />
          </button>
        </div>
      </div>
      <div className="text-slate-600">
        <div className="flex justify-center items-center">
          <div className="w-1/12 items-center">
            <p className="text-xs items-center justify-center">1:21</p>
          </div>
          <div className="w-10/12 flex items-center">
            <div className="relative h-1 w-full bg-zinc-800 rounded">
              <div className="absolute h-full w-1/4 bg-zinc-600 flex items-center justify-end rounded">
                <div className="rounded-full w-3 h-3 bg-white shadow"></div>
              </div>
            </div>
          </div>
          <div className="w-1/12 items-center">
            <p className="text-xs items-center justify-center">3:28</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
