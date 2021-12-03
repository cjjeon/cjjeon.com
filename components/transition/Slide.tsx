import React, { useEffect, useRef, useState } from "react";

export interface SlideProp {
  direction: "up" | "down";
  isSlide: boolean;
}

const Slide: React.FC<SlideProp> = ({ direction, isSlide, children }) => {
  const [childHeight, setChildHeight] = useState<number>(0);
  const childRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (childRef && childRef.current) {
      setChildHeight(childRef.current.scrollHeight + 24);
    }
  }, [childRef]);
  return (
    <div
      style={{
        transition: "0.8s",
        transform: isSlide
          ? direction === "up"
            ? `translateY(-${childHeight}px)`
            : `translateY(${childHeight}px)`
          : `translateY(0)`,
      }}
    >
      <div ref={childRef} className={"overflow-visible"}>
        {children}
      </div>
    </div>
  );
};

export default Slide;
