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

const Player = () => {
  return (
    <div>
      <div>{/* <ReactHowler /> */}</div>
      <div className="justify-center">
        <div className="flex justify-center">
          <button className="text-slate-500 p-2" aria-label="shuffle">
            <MdShuffle />
          </button>
          <button className="text-slate-500 p-2" aria-label="previous">
            <MdSkipPrevious />
          </button>
          <button className="text-white p-2 text-3xl" aria-label="play">
            <MdOutlinePlayCircleFilled />
          </button>
          <button className="text-white p-2 text-3xl" aria-label="pause">
            <MdOutlinePauseCircleFilled />
          </button>
          <button className="text-slate-500 p-2" aria-label="next">
            <MdSkipNext />
          </button>
          <button className="text-slate-500 p-2" aria-label="repeat">
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
            <div className="relative h-1 w-full bg-gray-200">
              <div className="absolute h-full w-1/4 bg-emerald-700 flex items-center justify-end">
                <div className="rounded-full w-3 h-3 bg-white shadow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
