import NextImage from "next/image";

export default function GradientLayout({
  color,
  children,
  image,
  subtitle,
  title,
  description,
  roundImage,
}) {
  return (
    <div className="h-[(100vh-80px)] overflow-y-auto bg-gradient-to-b from-red-500 to-black">
      <div className={`flex bg-${color}.600 p-9 items-end `}>hello</div>
    </div>
  );
}
