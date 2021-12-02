import React from "react";

import MainLayout from "../components/layout/MainLayout";
import {MainBanner} from "../components/banners";
import Timeline from "../components/timeline/Timeline"; /*
 Copying the template of https://www.figma.com/community/file/1014838147356550908?preview=fullscreen
 */

/*
 Copying the template of https://www.figma.com/community/file/1014838147356550908?preview=fullscreen
 */

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
                      Exciting time that I got the first engineering job at{" "}
                      <a
                        href={"https://www.hydroone.com/"}
                        target={"_blank"}
                        rel={"noreferrer"}
                      >
                        Hydro One
                      </a>
                      . I&apos;ve always dreamed of becoming an engineer and
                      this was definitely a step to achieve my dream.
                    </div>
                    <div>
                      Not only that, this was the first time that I was moving
                      away from my family and friends and go to a place that I
                      never been before.
                    </div>
                    <div>
                      It was definitely challenging in the beginning because I
                      didn't know anyone back then
                    </div>
                  </div>
                ),
              },
              {
                title: "Second Co-op Experience!",
                date: "2013",
                description: (
                  <div>
                    This was not only the first engineering job I ever had, I
                    was moving away from my family and friends and go to a place
                    that I never been before. It was definitely challenging in
                    the beginning because I didn't know anyone back then
                  </div>
                ),
              },
              {
                title: "Graduate from UBC!",
                date: "2015",
                description: (
                  <div>
                    This was not only the first engineering job I ever had, I
                    was moving away from my family and friends and go to a place
                    that I never been before. It was definitely challenging in
                    the beginning because I didn't know anyone back then
                  </div>
                ),
              },
              {
                title: "First Engineering Job After University",
                date: "2015",
                description: (
                  <div>
                    This was not only the first engineering job I ever had, I
                    was moving away from my family and friends and go to a place
                    that I never been before. It was definitely challenging in
                    the beginning because I didn't know anyone back then
                  </div>
                ),
              },
              {
                title: "First Experience in Startup as Software Developer",
                date: "2017",
                description: (
                  <div>
                    This was not only the first engineering job I ever had, I
                    was moving away from my family and friends and go to a place
                    that I never been before. It was definitely challenging in
                    the beginning because I didn't know anyone back then
                  </div>
                ),
              },
              {
                title: "Joined Commit Searching for Startups!",
                date: "Now",
                description: (
                  <div>
                    This was not only the first engineering job I ever had, I
                    was moving away from my family and friends and go to a place
                    that I never been before. It was definitely challenging in
                    the beginning because I didn't know anyone back then
                  </div>
                ),
              },
            ]}
          />
        </div>
        <div>
          Technology I'm familiary with:
          <div>Backend</div>
          <div>Frontend</div>
        </div>
      </div>
      <div className={"mt-10"}>
        <h2>Check out my latest projects:</h2>
        <div>How to create a personal blog using Next.js</div>
        <div>3D Printing Iron Man Helmet!</div>
        <div>Create the data you want without coding!</div>
      </div>
    </MainLayout>
  );
}
