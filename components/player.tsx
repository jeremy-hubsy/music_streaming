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
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { formatTime } from "../lib/formatters";

type Props = {
  songs: string[];
  activeSong: string;
};

const Player = (props: Props) => {
  const { songs, activeSong } = props;
  const [playing, setPlaying] = useState(true);
  const [index, setIndex] = useState(
    songs.findIndex((s) => s.id === activeSong.id)
  );
  const [seek, setSeek] = useState(0.0);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [duration, setDuration] = useState(0.0);
  const soundRef = useRef(null);
  const repeatRef = useRef(repeat);
  const setActiveSong = useStoreActions((state: any) => state.changeActiveSong);

  useEffect(() => {
    let timerId;
    if (playing) {
      const f = () => {
        setSeek(soundRef.current.seek());
        timerId = requestAnimationFrame(f);
      };
      timerId = requestAnimationFrame(f);
      return () => cancelAnimationFrame(timerId);
    }
    cancelAnimationFrame(timerId);
  }, [playing]);

  useEffect(() => {
    setActiveSong(songs[index]);
  }, [index, setActiveSong, songs]);

  useEffect(() => {
    repeatRef.current = repeat;
  }, [repeat]);

  const setPlayState = (value: boolean) => {
    setPlaying(value);
  };

  const onShuffle = () => {
    setShuffle((state) => !state);
  };

  const onRepeat = () => {
    setRepeat((state) => !state);
  };

  const prevSong = () => {
    setIndex((state) => {
      return state ? state - 1 : songs.length - 1;
    });
  };
  const nextSong = () => {
    setIndex((state) => {
      if (shuffle) {
        const next = Math.floor(Math.random() * songs.length);
        if (next === state) {
          return nextSong();
        }
        return next;
      } else {
        return state === songs.length - 1 ? 0 : state + 1;
      }
    });
  };

  const onEnd = () => {
    if (repeatRef.current) {
      setSeek(0);
      soundRef.current.seek(0);
    } else {
      nextSong();
    }
  };

  const onLoad = () => {
    const songDuration = soundRef.current.duration();
    setDuration(songDuration);
  };

  const onSeek = (e) => {
    setSeek(parseFloat(e));
    soundRef.current.seek(e);
  };

  return (
    <div>
      <div>
        <ReactHowler
          playing={playing}
          src={activeSong?.url}
          ref={soundRef}
          onLoad={onLoad}
          onEnd={onEnd}
        />
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
          <button
            className="text-slate-500 p-2"
            aria-label="previous"
            onClick={prevSong}
          >
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

          <button
            className="text-slate-500 p-2"
            aria-label="next"
            onClick={nextSong}
          >
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
            <p className="text-xs items-center justify-center">
              {formatTime(seek)}
            </p>
          </div>
          <div className="w-10/12 flex items-center">
            <Slider
              railStyle={{ background: "#212121" }}
              trackStyle={{ background: "#3d3d3d" }}
              step={0.1}
              min={0}
              max={duration ? duration.toFixed(2) : 0}
              onChange={(e) => onSeek(e)}
              value={[seek]}
            />
          </div>
          <div className="w-1/12 items-center">
            <p className="text-xs items-center justify-center">
              {formatTime(duration)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
