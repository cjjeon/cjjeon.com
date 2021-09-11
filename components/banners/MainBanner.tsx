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
        src="/profipicture.jpg"
        alt={"profile_picture"}
        width={64 * 3}
        height={64 * 3}
      />
      <div className={"text-4xl p-5"}>Hi! I'm CJ</div>
      <div className={"w-1/2 italic text-center"}>
        I'm just an engineer who likes to create and build things that are
        awesome! Follow me if you are interested in what I'm up to.
      </div>
    </div>
  );
};

export default MainBanner;
