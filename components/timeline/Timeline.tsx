import React, { useState } from "react";
import Collapse from "../transition/Collapse";

interface TimelineItem {
  title: string;
  date: string;
  description: React.ReactElement;
}

interface TimelineItemProps extends TimelineItem {
  isLastItem: boolean;
}

const TimeLineItem: React.FC<TimelineItemProps> = ({
  title,
  date,
  description,
  isLastItem,
}) => {
  const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false);

  return (
    <div className={"flex"}>
      <div
        className={"flex flex-col items-center w-24"}
        style={{ minHeight: "5em" }}
      >
        <div
          className={
            "flex justify-center items-center bg-indigo-300 dark:bg-indigo-500 rounded-full p-3 h-12 w-12"
          }
        >
          {date}
        </div>
        <div className={"flex justify-center h-full"}>
          {!isLastItem ? (
            <div
              className={"border-l-4 border-dotted border-gray-500 h-full"}
            />
          ) : null}
        </div>
      </div>
      <div
        onMouseEnter={() => setIsDetailOpen(true)}
        onMouseLeave={() => setIsDetailOpen(false)}
        className={"flex flex-col ml-4 mt-1 w-full"}
      >
        <div />
        <div className={"bg-indigo-300 dark:bg-indigo-500 rounded w-full p-2"}>
          <div className={"text-lg"}>{title}</div>
          <Collapse isOpen={isDetailOpen}>
            <div className={"italic mt-5"}>{description}</div>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export interface TimelineProp {
  timelineItems: TimelineItem[];
}

const Timeline: React.FC<TimelineProp> = ({ timelineItems }) => {
  return (
    <div>
      {timelineItems.map((timelineItem, index) => {
        return (
          <TimeLineItem
            key={index}
            title={timelineItem.title}
            date={timelineItem.date}
            description={timelineItem.description}
            isLastItem={index === timelineItems.length - 1}
          />
        );
      })}
    </div>
  );
};

export default Timeline;
