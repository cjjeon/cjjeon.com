import React from 'react';
import ProjectCard from '../../components/cards/ProjectCard';
import {MainLayout} from "../../components/layout";

const Projects = () => {
    return (
        <MainLayout>
            <div className={'flex justify-center items-center w-96'}>
                <ProjectCard
                    title={'Building an app to make you a STAR in interviews!'}
                    date={new Date('2022-01-19')}
                    imgHref={''}
                    linkHref={''}
                />
            </div>
        </MainLayout>
    );
};

export default Projects;