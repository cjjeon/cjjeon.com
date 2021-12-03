import React from "react";

export interface SlideProp {
    direction: "up" | "down";
    isSlide: boolean;
    height: number;
    className?: string
}


const Slide: React.FC<SlideProp> = ({direction, isSlide, height, className, children}) => {
    return (
        <div
            className={className}
            style={{
                transition: "0.8s",
                transform: isSlide
                    ? direction === "up"
                        ? `translateY(-${height}px)`
                        : `translateY(${height}px)`
                    : `translateY(0)`,
            }}
        >
            {children}
        </div>
    );
};

export default Slide;
