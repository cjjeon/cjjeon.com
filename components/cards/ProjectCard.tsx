import React from 'react';

interface ProjectCardProps {
    title: string
    imgHref: string
    linkHref: string
    date: Date
}

const ProjectCard: React.FC<ProjectCardProps> = ({title, imgHref, linkHref, date}) => {
    const bgImg = "bg-[url('" + imgHref + "')]"
    return (
        <a
            className={
                `w-[15rem] h-80 border-4 rounded-lg p-5 relative transition-all hover:scale-105 bg-center bg-cover bg-no-repeat ${bgImg}`
            }
            href={linkHref}
        >
            <div
                className={"absolute top-0 left-0 w-full h-full hover:bg-black/40 bg-black/50"}/>
            <div className="absolute top-4 right-4 text-xs font-bold">{date.toISOString().substring(0, 10)}</div>
            <h2 className={'font-medium absolute left-0 bottom-5 p-5'}>{title}</h2>
        </a>
    );
};


export default ProjectCard;