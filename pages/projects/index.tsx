import React from 'react';
import ProjectCard from '../../components/cards/ProjectCard';
import {MainLayout} from "../../components/layout";

const Projects = () => {
    return (
        <MainLayout>
            <div className={'flex justify-center items-center min-w-[20rem] md:min-w-[30rem] lg:min-w-[40rem] p-5'}>
                <ProjectCard
                    title={'Building an app to make you a STAR in interviews! (WIP)'}
                    date={new Date('2022-01-19')}
                    imgHref={'/interview.jpg'}
                    linkHref={'/projects/build-app-to-make-star-in-interview'}
                />
            </div>
        </MainLayout>
    );
};

export default Projects;