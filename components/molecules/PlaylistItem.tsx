import Link from "next/link";
import { IconType } from "react-icons";

type PlaylistItem = {
  name: string;
  route: string;
};

type Props = {
  data: PlaylistItem[];
};

export default function PlaylistItem(props: Props) {
  // console.log(props.data);
  return (
    <>
      {props.data.map((playlist: PlaylistItem, i: number) => {
        console.log(playlist);
        return (
          <li className="px-5" key={i}>
            <div>
              <Link href="/" className="flex flex-row items-center">
                {playlist.name}
              </Link>
            </div>
          </li>
        );
      })}
    </>
  );
}
