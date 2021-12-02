import React from "react";
import Image from "next/image";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IMainBanner {}

const MainBanner: React.FC<IMainBanner> = (props) => {
  return (
    <div
      className={
        "flex flex-col md:flex-row w-full justify-between items-center p-5"
      }
    >
      <div className={"flex w-full md:w-1/2 justify-center items-center"}>
        <Image
          className={"rounded rounded-full"}
          src="/profile_picture.jpg"
          alt={"profile_picture"}
          width={64 * 4}
          height={64 * 4}
        />
      </div>
      <div
        className={
          "flex flex-col w-full md:w-1/2 gap-5 text-center items-center py-5 md:items-start md:text-left md:py-0"
        }
      >
        <div className={"text-4xl"}>Hello! My Name is CJ.</div>
        <div>
          I&apos;m a full-stack engineer who likes to build and solve problems!
          I currently work at Commit. And, I love working on 3D printing and
          building IoT for fun ✌.
        </div>
        <a>You wanna chat? Let&apos;s Grab Coffee Together!</a>
        <div className={"flex gap-3"}>
          <a
            className={
              "flex items-center gap-2 bg-blue-400 dark:bg-blue-600 p-2 rounded no-underline text-black dark:text-white"
            }
            href={"https://www.linkedin.com/in/cj-jeon/"}
            target={"_blank"}
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            LinkedIn
          </a>
          <a
            className={
              "flex items-center gap-2 bg-gray-400 dark:bg-gray-600 p-2 rounded no-underline text-black dark:text-white"
            }
            href={"https://github.com/cjjeon"}
            target={"_blank"}
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
