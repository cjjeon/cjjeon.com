import React from "react";
import Link from "next/link";
import ArrowRight from "../../assets/icons/arrowRight";

interface IMainButton {
  title: string;
  description: string;
  link: string;
}

const MainButton: React.FC<IMainButton> = ({ title, description, link }) => {
  return (
    <Link href={link}>
      <div
        className={
          "group flex-col w-1/2 h-auto  rounded-2xl m-5 p-6 border-2 border-blue-300 hover:shadow-lg"
        }
      >
        <div className={"flex text-blue-500 group-hover:text-gray-700"}>
          <div className={"text-2xl font-bold"}>{title}</div>
          <div className={"pl-3"}>
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
              <ArrowRight />
            </svg>
          </div>
        </div>
        <div className={"flex py-2 group-hover:text-gray-700"}>
          {description}
        </div>
      </div>
    </Link>
  );
};

export default MainButton;
