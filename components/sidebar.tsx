import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";
import NextImage from "next/image";
import MenuItem from "./molecules/MenuItem";
import MyDivider from "./atoms/divider";
import PlaylistItem from "./molecules/PlaylistItem";
import { usePlaylist } from "../lib/hooks";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites",
  },
];

export default function Sidebar() {
  const { playlists } = usePlaylist();
  return (
    <div className="w-full h-[(100vh-80px)] bg-black px-2.5 text-gray-500">
      <div className="py-5 h-full">
        <div className="w-32 px-5">
          <NextImage
            src="/logo.png"
            alt="logo of the company"
            height={60}
            width={120}
          />
        </div>
        <ul className="my-5">
          <MenuItem data={navMenu} />
        </ul>
        <ul className="my-5">
          <MenuItem data={musicMenu} />
        </ul>
        <MyDivider />
        <div className="h-3/5 overflow-auto">
          <ul>
            <PlaylistItem data={playlists} />
          </ul>
        </div>
      </div>
    </div>
  );
}
