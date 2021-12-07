import React from 'react';
import Image from 'next/image';

interface GearCardProps {
    imageSrc: string;
    title: string;
    detail: string;
}

const GearCard: React.FC<GearCardProps> = ({ imageSrc, title, detail }) => {
    return (
        <div className={'flex flex-col md:flex-row rounded-lg border-2'}>
            <div
                className={
                    'flex justify-center items-center bg-white dark:bg-gray-500 rounded-t-lg md:rounded-t-none md:rounded-l-lg'
                }
            >
                <div className={'w-60 md:w-44 p-5'}>
                    <Image
                        className={'rounded-t-lg md:rounded-l-lg md:rounded-t-none'}
                        width={500}
                        height={400}
                        layout={'responsive'}
                        src={imageSrc}
                    />
                </div>
            </div>
            <div className={'flex flex-col justify-center md:items-start items-center p-5'}>
                <h3>{title}</h3>
                <div className={'text-gray-500 dark:text-gray-400'}>{detail}</div>
            </div>
        </div>
    );
};

export default GearCard;
