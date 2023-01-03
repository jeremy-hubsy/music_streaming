import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";
import NextImage from "next/image";

export default function Sidebar() {
  return (
    <div className="w-full h-[calc(100vh-100px)] bg-black px-2.5 text-gray-500">
      <div className="py-5">
        <div className="w-32 px-5">
          <NextImage
            src="/logo.png"
            alt="logo of the company"
            height={60}
            width={120}
          />
        </div>
      </div>
    </div>
  );
}
