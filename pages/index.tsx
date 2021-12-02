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
                      I did my first engineering job at{" "}
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
                      before. I was exciting but also frightening experience at
                      the same time.
                    </div>
                    <div>
                      The work was mainly on calculating and displaying the
                      asset conditions of transformers and circuit breakers in
                      substations. This gave me chance to, extract the data from
                      different sources (SAP, Database, Excel, etc), write
                      algorithm in VBA, and plot output using ArcGIS.
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
