import React from "react";
import style from "./Timeline.module.css";

interface TimelineItem {
  title: string;
  date: string;
  description: string;
}

export interface TimelineProp {
  timelineItems: TimelineItem[];
}

const Timeline: React.FC<TimelineProp> = ({ timelineItems }) => {
  return (
    <div>
      {timelineItems.map((timelineItem, index) => {
        return (
          <div className={"flex relative"} key={index}>
            <div className={"flex flex-col w-24"}>
              <div
                className={
                  "flex justify-center items-center bg-gray-800 rounded-full p-3"
                }
              >
                {timelineItem.date}
              </div>
              <div className={"flex justify-center h-full"}>
                {index !== timelineItems.length - 1 ? (
                  <div className={"border-l-4 border-dotted h-full"} />
                ) : null}
              </div>
            </div>
            <div className={style.timeline_content}>
              <div className={"text-lg"}>{timelineItem.title}</div>
              <div className={"mt-5 italic"}>{timelineItem.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
