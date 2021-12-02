import React from "react";

import MainLayout from "../components/layout/MainLayout";
import { MainBanner } from "../components/banners";
import Timeline from "../components/timeline/Timeline";

export default function Home() {
  return (
    <MainLayout>
      <MainBanner />
      <div className={"flex flex-col gap-3 mt-10"}>
        <div>
          <h2>HIGHLIGHTS:</h2>
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
                      This was exciting time that I got the first engineering
                      job at{" "}
                      <a
                        href={"https://www.hydroone.com/"}
                        target={"_blank"}
                        rel={"noreferrer"}
                      >
                        Hydro One
                      </a>
                      . I&apos;ve always dreamed of becoming an engineer and
                      this was definitely a step to achieve my dream. Not only
                      that, this was the first time that I was moving away from
                      my family and friends and go to a place that I never been
                      before.
                    </div>
                    <div>
                      My work was also interesting. My work was mainly on
                      calculating the asset conditions of Transformer and
                      Circuit Breaker.
                    </div>
                    <div>
                      Although I didn&apos;t have much mentorship, it was
                      valuable time where I get to apply engineering knowledge
                      and skills.
                    </div>
                  </div>
                ),
              },
              {
                title: "Second Co-op Experience!",
                date: "2013",
                description: <div>Work In Progress......</div>,
              },
              {
                title: "Graduate from UBC!",
                date: "2015",
                description: <div>Work In Progress......</div>,
              },
              {
                title: "First Engineering Job After University",
                date: "2015",
                description: <div>Work In Progress......</div>,
              },
              {
                title: "First Experience in Startup as Software Developer",
                date: "2017",
                description: <div>Work In Progress......</div>,
              },
              {
                title: "Joined Commit Searching for Startups!",
                date: "Now",
                description: <div>Work In Progress......</div>,
              },
            ]}
          />
        </div>
        <div>
          Technology I'm familiary with:
          <div>Backend</div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
          vel?
          <div>Frontend</div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit,
          officia?
        </div>
      </div>
      <div className={"mt-10"}>
        <h2>Check out my latest projects:</h2>
        <div>Add some card about the projects I'm working on</div>
      </div>
    </MainLayout>
  );
}
