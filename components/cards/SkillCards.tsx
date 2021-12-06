import { faArrowDown, faStar, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { Slide } from '../transition';

interface RatingStarsProps {
    rating: 1 | 2 | 3 | 4 | 5;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
    const stars = [];

    for (let i = 1; i < 6; i++) {
        if (i <= rating) {
            stars.push(<FontAwesomeIcon className={'text-yellow-600'} icon={faStar} />);
        } else {
            stars.push(<FontAwesomeIcon className={'text-gray-600'} icon={faStar} />);
        }
    }

    return (
        <div className={'flex gap-2'}>
            {stars.map((star, index) => {
                return <div key={index}>{star}</div>;
            })}
        </div>
    );
};

export interface SkillCardsProp {
    icon: IconDefinition;
    title: string;
    rating: 1 | 2 | 3 | 4 | 5;
    tags: string[];
}

const SkillCards: React.FC<SkillCardsProp> = ({ icon, title, rating, tags }) => {
    const [isSlide, setIsSlide] = useState<boolean>(false);
    const [childHeight, setChildHeight] = useState<number>(0);

    const childRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (childRef && childRef.current) {
            setChildHeight(childRef.current.scrollHeight - 1);
        }
    }, [childRef]);

    return (
        <div
            className={'drop-shadow-lg w-64'}
            onMouseEnter={() => setIsSlide(true)}
            onMouseLeave={() => setIsSlide(false)}
        >
            <Slide className={'relative z-10'} direction={'down'} isSlide={!isSlide} height={childHeight} gap={28}>
                <div
                    className={'bg-indigo-100 dark:bg-indigo-500 rounded flex justify-center items-center flex-col p-5'}
                >
                    <div className={'rounded-full bg-gray-400 w-20 h-20 flex justify-center items-center p-5'}>
                        <FontAwesomeIcon icon={icon} size={'2x'} />
                    </div>
                    <div className={'uppercase text-lg mt-3'} style={{ letterSpacing: '.2em' }}>
                        {title}
                    </div>
                    <div>
                        <RatingStars rating={rating} />
                    </div>

                    {!isSlide ? (
                        <div className={'animate-bounce mt-3 -mb-5'}>
                            <FontAwesomeIcon icon={faArrowDown} />
                        </div>
                    ) : null}
                </div>
            </Slide>
            <Slide className={'relative z-0'} direction={'up'} isSlide={!isSlide} height={childHeight} gap={28}>
                <div
                    ref={childRef}
                    className={
                        'flex flex-wrap justify-center items-center gap-2 bg-indigo-300 dark:bg-indigo-100 rounded p-3'
                    }
                >
                    {tags.map((tag, index) => {
                        return (
                            <div
                                className={'bg-indigo-100 dark:bg-indigo-500 rounded-full py-1 px-2 text-xs'}
                                key={index}
                            >
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
