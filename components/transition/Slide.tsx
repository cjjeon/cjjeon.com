import React from 'react';

export interface SlideProp {
    direction: 'up' | 'down';
    isSlide: boolean;
    height: number;
    gap?: number;
    className?: string;
}

const Slide: React.FC<SlideProp> = ({ direction, isSlide, height, gap = 0, className, children }) => {
    return (
        <div
            className={className}
            style={{
                transition: '0.8s',
                transform: isSlide
                    ? direction === 'up'
                        ? `translateY(-${height - gap}px)`
                        : `translateY(${height - gap}px)`
                    : `translateY(0)`,
            }}
        >
            {children}
        </div>
    );
};

export default Slide;
