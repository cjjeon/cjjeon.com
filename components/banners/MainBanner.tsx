import React from "react";
import Image from "next/image";

interface IMainBanner {}

const MainBanner: React.FC<IMainBanner> = (props) => {
  return (
    <div
      className={
        "flex flex-col justify-center items-center rounded bg-gray-500 w-full p-10"
      }
    >
      <Image
        className={"rounded rounded-full"}
        src="/profile_picture.jpg"
        alt={"profile_picture"}
        width={64 * 3}
        height={64 * 3}
      />
      <div className={"text-4xl p-5"}>Hi! I'm CJ</div>
      <div className={"w-3/4 italic text-center"}>
        I'm just an engineer who likes to build and solve problems!
      </div>
    </div>
  );
};

export default MainBanner;
