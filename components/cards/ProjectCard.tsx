import React from 'react';
import Image from 'next/image'

interface ProjectCardProps {
    title: string
    imgHref: string
    linkHref: string
    date: Date
}

const ProjectCard: React.FC<ProjectCardProps> = ({title, imgHref, linkHref, date}) => {
    return (
        <div className={"w-[15rem] h-80 border-4 rounded-lg p-5 relative bg-black/50"}>
            <a className="no-underline z-10 w-full h-full" href={linkHref}>
                <div className="absolute top-4 right-4 text-xs font-bold">{date.toISOString().substring(0, 10)}</div>
                <h2 className={'font-medium absolute left-0 bottom-5 p-5'}>{title}</h2>
                <div className={'absolute w-full h-full top-0 left-0 -z-10'}>
                    <Image
                        src={'/interview.jpg'}
                        layout={'fill'}
                        objectFit={'cover'}
                        quality={20}
                    />
                </div>
            </a>
        </div>
    );
};


export default ProjectCard;