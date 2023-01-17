import Image from "next/image";

export default function GradientLayout({
  children,
  image = "/teddy.png",
  subtitle,
  title,
  description,
  roundImage,
}) {
  return (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-red-700 via-black to-black">
      <div className={`flex p-9 items-end `}>
        <div className="p-5">
          <Image
            className="shadow-slate-900 rounded-3xl"
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
    </div>
  );
}
