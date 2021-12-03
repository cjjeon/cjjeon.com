import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Slide from "../transition/Slide";

interface RatingStarsProps {
  rating: 1 | 2 | 3 | 4 | 5;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const stars = [];

  const emptyStar = (
    <svg
      aria-hidden="true"
      focusable="false"
      className={"w-5 h-5 block text-yellow-600 stroke-current"}
    >
      <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218" />
    </svg>
  );

  const fullStar = (
    <svg
      aria-hidden="true"
      focusable="false"
      className={"w-5 h-5 block text-yellow-600 stroke-current fill-current"}
    >
      <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218" />
    </svg>
  );

  for (let i = 1; i < 6; i++) {
    if (i <= rating) {
      stars.push(fullStar);
    } else {
      stars.push(emptyStar);
    }
  }

  return <div className={"flex gap-2"}>{stars}</div>;
};

export interface SkillCardsProp {
  icon: IconDefinition;
  title: string;
  rating: 1 | 2 | 3 | 4 | 5;
  tags: string[];
}

const SkillCards: React.FC<SkillCardsProp> = ({
  icon,
  title,
  rating,
  tags,
}) => {
  const [isSlide, setIsSlide] = useState<boolean>(false);

  return (
    <div
      className={"drop-shadow-lg w-72 h-48"}
      onMouseEnter={() => setIsSlide(true)}
      onMouseLeave={() => setIsSlide(false)}
    >
      <Slide direction={"up"} isSlide={isSlide}>
        <div
          className={
            "bg-blue-400 w-full rounded flex justify-center items-center flex-col transform translate-y-20 z-10"
          }
        >
          <div className={"rounded-full bg-gray-400 p-5"}>
            <FontAwesomeIcon icon={icon} size={"3x"} />
          </div>
          <div
            className={"uppercase text-lg mt-3"}
            style={{ letterSpacing: ".2em" }}
          >
            {title}
          </div>
          <div>
            <RatingStars rating={rating} />
          </div>
        </div>
      </Slide>
      <Slide direction={"down"} isSlide={isSlide}>
        <div
          className={
            "flex justify-center items-center gap-2 bg-white border z-0"
          }
          style={{
            transform: "transformY(50%)",
          }}
        >
          {tags.map((tag, index) => {
            return (
              <div className={"bg-indigo-400 rounded"} key={index}>
                {tag}
              </div>
            );
          })}
        </div>
      </Slide>
    </div>
  );
};

export default SkillCards;
