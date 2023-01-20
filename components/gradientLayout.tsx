import Image from "next/image";
import { ReactElement } from "react";

type Props = {
  children: ReactElement;
  image: string;
  subtitle: string;
  title: string;
  description: string;
  color: string;
  rounded: string;
};

export default function GradientLayout({
  children,
  image = "/teddy.png",
  subtitle,
  title,
  description,
  color,
  rounded,
}: Props) {
  return (
    <div
      className={`h-full overflow-y-auto bg-gradient-to-b ${color} via-black to-black`}
    >
      <div className={`flex p-9 items-end `}>
        <div className="p-5">
          <Image
            className={`shadow-slate-900 ${rounded}`}
            height={120}
            width={120}
            src={image}
            alt="profile picture"
          />
        </div>
        <div className="p-8">
          <p className="text-xs uppercase text-white">{subtitle}</p>
          <p className="text-5xl text-white my-3">{title}</p>
          <p className="text-xs font-light text-white">{description}</p>
        </div>
      </div>
      <div className="py-14">{children}</div>
    </div>
  );
}
