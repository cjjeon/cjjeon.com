import { Navbar } from "../components/layout";
import { MainBanner } from "../components/banners";
import MainButton from "../components/buttons/MainButton";
import { useState } from "react";
import { CARDS } from "../constants";

export default function Home() {
  return (
    <div className="flex w-full h-full justify-center">
      <div className="max-w-screen-lg w-full p-5">
        <div className={"p-5"}>
          <MainBanner />
        </div>
        <div className={""}>
          <div className={"flex justify-center"}>
            <MainButton
              title={"Projects"}
              description={
                "List of all the cool projects that I worked or I'm working on."
              }
              link={"/projects"}
            />
            <MainButton
              title={"About Me"}
              description={
                "Not sure why you would be interested... This is where you can read about me :D"
              }
              link={"/about"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
