import { Navbar } from "../components/layout";
import { MainBanner } from "../components/banners";
import { useState } from "react";
import { CARDS } from "../constants";
import { ICard } from "../components/cards";

export default function Home() {
  const [cards, setCards] = useState<ICard[]>(CARDS);

  return (
    <div className="flex w-full h-full justify-center">
      <div className="max-w-screen-lg w-full p-5">
        <div className={"p-5"}>
          <MainBanner />
        </div>
        <div className={""}>
          <div className={"flex justify-center"}>
            <div
              className={
                "flex justify-center items-center w-1/2 h-36 text-center rounded-2xl m-5 bg-gray-300 hover:bg-gray-400"
              }
            >
              Projects
            </div>
            <div
              className={
                "flex justify-center items-center w-1/2 h-36 text-center rounded-2xl m-5 bg-gray-300 hover:bg-gray-400"
              }
            >
              About Me
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
