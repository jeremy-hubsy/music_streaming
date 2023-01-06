import Link from "next/link";
import { IconType } from "react-icons";

type MenuItem = {
  name: string;
  icon: IconType;
  route: string;
};

type Props = {
  data: MenuItem[];
};

export default function MenuItem(props: Props) {
  return (
    <>
      {props.data.map((menu: MenuItem, i: number) => {
        return (
          <li className="my-2 px-5">
            <div>
              <Link href={menu.route} className="flex flex-row items-center">
                <menu.icon className="mr-1" />
                {menu.name}
              </Link>
            </div>
          </li>
        );
      })}
    </>
  );
}
