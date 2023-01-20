import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { formatDate, formatTime } from "../lib/formatters";

type Song = {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  artistId: number;
  url: string;
  duration: number;
};

type Props = {
  songs: Song[];
};

export default function SongTable({ songs }: Props) {
  return (
    <div className="text-slate-300 text-xs bg-transparent">
      <div className="p-3 mb-5">
        <div className="mb-10">
          <button
            aria-label="play"
            className=" bg-emerald-700 rounded-full h-10 w-10 flex items-center justify-center hover:bg-emerald-900"
          >
            <BsFillPlayFill size={30} />
          </button>
        </div>
        <table className="w-full text-left m-0 table-auto">
          <thead className="border-b  border-slate-900">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Date Added</th>
              <th>
                <AiOutlineClockCircle />
              </th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, i) => {
              return (
                <tr
                  className="hover:bg-opacity-5 hover:bg-white h-20 cursor-pointer"
                  key={song.id}
                >
                  <td>{i + 1}</td>
                  <td>{song.name}</td>
                  <td>{formatDate(song.createdAt)}</td>
                  <td>{formatTime(song.duration)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
