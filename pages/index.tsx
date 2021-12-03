import React from "react";

import MainLayout from "../components/layout/MainLayout";
import {MainBanner} from "../components/banners";
import Timeline from "../components/timeline/Timeline";
import SkillCards from "../components/cards/SkillCards";
import {faCode, faLaptop, faNetworkWired} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return (
        <MainLayout>
            <MainBanner/>
            <div className={"flex flex-col gap-3 mt-10"}>
                <div>
                    <h2>CAREER HIGHLIGHTS:</h2>
                </div>
                <div>
                    <Timeline
                        timelineItems={[
                            {
                                title: "First Co-op Experience!",
                                date: "2011",
                                description: (
                                    <div className={"flex flex-col gap-2"}>
                                        <div>
                                            I did my first engineering job at{" "}
                                            <a
                                                href={"https://www.hydroone.com/"}
                                                target={"_blank"}
                                                rel={"noreferrer"}
                                            >
                                                Hydro One
                                            </a>
                                            . I&apos;ve always dreamed of becoming an engineer and
                                            this was a step to achieve my dream. Not only that, this
                                            was the first time that I was moving away from my family
                                            and friends and going to a place that I had never been
                                            before. It was an exciting but also frightening experience
                                            at the same time.
                                        </div>
                                        <div>
                                            The work was mainly on calculating and displaying the
                                            asset conditions of transformers and circuit breakers in
                                            substations. This gave me chance to, extract the data from
                                            different sources (SAP, Database, Excel, etc), write the
                                            algorithm in VBA, and plot output using ArcGIS.
                                        </div>
                                    </div>
                                ),
                            },
                            {
                                title: "Second Co-op Experience!",
                                date: "2013",
                                description: (
                                    <div className={"flex flex-col gap-2"}>
                                        <div>
                                            On my next co-op, I got a chance to work at{" "}
                                            <a
                                                href={"https://www.snclavalin.com/en"}
                                                target={"_blank"}
                                                rel="noreferrer"
                                            >
                                                SNC Lavalin
                                            </a>
                                            . Also, this was the time when I first met my wife 😛.
                                        </div>
                                        <div>
                                            Luckily, I was able to work in different departments
                                            instead of stuck in engineering. I worked as a Cost
                                            Controller who oversaw budgets, a Project Controller that
                                            manages the entire project from start to end, and a SCADA
                                            engineer who design a communication system in a
                                            substation.
                                        </div>
                                        <div>
                                            This was a great experience as I get to work outside of
                                            engineering.
                                        </div>
                                    </div>
                                ),
                            },
                            {
                                title: "Graduate from UBC!",
                                date: "2015",
                                description: (
                                    <div className={"flex flex-col gap-2"}>
                                        <div>
                                            Finally, I got my{" "}
                                            <a
                                                href={"https://en.wikipedia.org/wiki/Iron_Ring"}
                                                target={"_blank"}
                                                rel="noreferrer"
                                            >
                                                iron ring
                                            </a>
                                            ! I was so excited to get one (I still wear them).
                                        </div>
                                        <div>
                                            However, this was also the time I&apos;ve realized that I
                                            could not get a job that I studied for. You see, I
                                            specialized in power systems. I learn mostly about high
                                            voltage systems (power lines you see on the road) but
                                            there were not many jobs opportunity at the time.
                                        </div>
                                        <div>
                                            So, I decided to search for jobs related to electrical
                                            engineering. Thankfully, the field is broad and I can
                                            still apply for a different position.
                                        </div>
                                    </div>
                                ),
                            },
                            {
                                title: "First Engineering Job After University",
                                date: "2015",
                                description: (
                                    <div className={"flex flex-col gap-2"}>
                                        <div>
                                            My first job after university was as a hardware and
                                            software engineer. I was building a prototype for IoT
                                            devices. I build a lot of cool stuff from designing PCB,
                                            soldering smd components, and creating servers. This is
                                            probably the time that I actually fell in love working
                                            with micro-controllers.
                                        </div>
                                    </div>
                                ),
                            },
                            {
                                title: "Software Developer career begins!",
                                date: "2017",
                                description: (
                                    <div className={"flex flex-col gap-2"}>
                                        <div>
                                            I joined{" "}
                                            <a
                                                href={"https://clir.eco/"}
                                                target={"_blank"}
                                                rel="noreferrer"
                                            >
                                                Clir Renewable
                                            </a>{" "}
                                            , and honestly, this was one of the most amazing
                                            experiences I had. Also, I was able to make a small impact
                                            on the world by making green energy more efficient.
                                        </div>
                                        <div>
                                            I joined as one of the first engineers in the company.
                                            And, not only did I experience exponential growth in a
                                            start-up world, my professional career as a software
                                            developer grew exponentially. I learn how to build and
                                            scale software, teams, and culture.
                                        </div>
                                    </div>
                                ),
                            },
                            {
                                title: "Knocking doors into the Startups!",
                                date: "Now",
                                description: (
                                    <div className={"flex flex-col gap-2"}>
                                        <div>
                                            <a
                                                href={"https://commit.dev/"}
                                                target={"_blank"}
                                                rel="noreferrer"
                                            >
                                                Commit
                                            </a>{" "}
                                            is the company I currently work at and it provides an
                                            opportunity for me to work at different start-ups.
                                        </div>
                                        <div>
                                            If you are interested in start-up world, I highly
                                            recommend to join Commit!
                                        </div>
                                    </div>
                                ),
                            },
                        ]}
                    />
                </div>
                <div>
                    <h2>SPECIALIZATION:</h2>
                    <div className={"flex flex-col md:flex-row justify-center items-center gap-5"}>
                        <div>
                            <SkillCards
                                icon={faCode}
                                title={"Backend"}
                                rating={4}
                                tags={["Python", "Go", "Node"]}
                            />
                        </div>
                        <div>
                            <SkillCards
                                icon={faLaptop}
                                title={"Frontend"}
                                rating={4}
                                tags={["React", "Typescript", "Vue"]}
                            />
                        </div>
                        <div>
                            <SkillCards
                                icon={faNetworkWired}
                                title={"DevOps"}
                                rating={3}
                                tags={["AWS", "Microservices", "Docker"]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
