import React from 'react';
import {MainLayout} from "../../components/layout";

const BuildAppToMakeStarInInterview = () => {
    return (
        <MainLayout>
            <div
                className={
                    "border-2 rounded flex flex-col mb-5"
                }
            >
                <div className={"w-full h-80 lg:h-[30rem] bg-cover bg-[url('/interview.jpg')]"}/>
                <div>
                    <div className="p-4 sm:p-8">
                        <h1 className="font-inter font-extrabold text-2xl tracking-tight">Building an app to
                            make you a STAR in interviews! (WIP)
                        </h1>
                        <div className="mt-1 font-medium text-sm text-slate-400">January 01, 2022 · 5 min read</div>
                        <div className={'mt-4 flex flex-col gap-3'}>
                            <p>
                                Before reading this article, you can check out the app <a
                                href={'https://interview.cjjeon.com'} target={"_blank"} rel={"noreferrer"}>here!</a>
                            </p>
                            <p>
                                Hi! I&apos;m an engineer who loves creating and building something that helps others.
                                Recently, I&apos;ve faced a problem or a challenge that I think many people are facing
                                too. I have been doing interviews but haven&apos;t been successful at landing one.
                                Specifically, I&apos;m more talking about the interview based on the behavioral
                                question.
                            </p>
                            <p>
                                As a typical engineer, I started to break down issues and analyze what the problems
                                were. I started to ask my peers if they were facing the same issues and how they
                                overcome the issue. From that, I&apos;ve found the solution and built an app for it.
                            </p>
                        </div>
                        <div className={'mt-4 flex flex-col gap-3'}>
                            <h2 className={'font-bold'}>What&apos;s the App About?</h2>
                            <h3 className={'font-medium'}>The Problem and Solution</h3>
                            <p>
                                I&apos;ve been on both sides in the interview. I&apos;ve been an interviewer and
                                interviewee. Not going to lie. Interviews are difficult for both sides. Determining this
                                candidate&apos;s skill and the ability for the position, right fit for the company and
                                culture, and understanding what the candidate wants in a few hours is tricky.
                            </p>
                            <p>
                                However, I notice a pattern who success in the interview, and it&apos;s not a magic
                                formula. Someone who can communicate and demonstrate that he/she is capable of the
                                position and shows a good personality will often succeed in the interview.
                            </p>
                            <p>
                                But, why is this difficult? If you are as introverted and uncomfortable in the interview
                                as I am, it&apos;s not easy to answer questions right on the spot. The best way is to
                                solve the problem is to PRACTICE, PRACTICE, and PRACTICE!
                            </p>
                            <h3 className={'font-medium'}>
                                The Features To Solution
                            </h3>
                            <h4 className={'underline font-medium'}>
                                Write down all of the experiences/projects in the past.
                            </h4>
                            <p>
                                The main reason is that when the interviewer asks a question, it&apos;s best to answer
                                the question using experiences/projects. Why? Storytelling is the best and most
                                effective way to get your message across. Demonstrating that you have faced a similar
                                situation in the past and how you overcome the situation, the interviewer would
                                understand much clear.
                            </p>
                            <p>
                                Another important fact is to write your experiences/projects using the STAR or PAR
                                method. It&apos;s just a framework that helps you to tell a story with a beginning,
                                middle, and end. Starting with Situation and Task or Problem, explaining Action you
                                took, and the Result from your actions. Once you have the ability to communicate your
                                story clearly and concisely, you will have a higher chance of success during the
                                interview.
                            </p>
                            <h4 className={'underline font-medium'}>
                                Running a Mock Interview
                            </h4>
                            <p>
                                Interviews are instantaneous. You have to come up with the answer right on the spot.
                                And, no matter how many times you write down experiences/projects if you are not
                                comfortable in the interview, you will have a difficult time coming up with an answer.
                                If you have more experience in the interview environment, it will become easier and
                                easier.
                            </p>
                            <p>
                                In addition, you need to be aware of how you do in the interview. There are habits that
                                people have or do unconsciously during the interview that has a negative effect. For
                                example, some people might be unnecessarily fidgeting, rambling, having poor body
                                language, and cursing that does not make you look good. Knowing that you have these
                                habits and the ability to fix them will help you to bring success in the interview.
                            </p>
                        </div>
                        <div className={'mt-10 flex flex-col gap-3'}>
                            <div className={'text-center font-medium text-2xl'}>
                                Sorry, If you are still reading, please comeback later!!! I am still working on
                                writing!!
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </MainLayout>
    );
};

export default BuildAppToMakeStarInInterview;