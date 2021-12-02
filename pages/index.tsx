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
                description: "Started working at Hydro One",
              },
              {
                title: "Second Co-op Experience!",
                date: "2013",
                description: "Started working at SNC Lavalin",
              },
              {
                title: "Graduate from UBC!",
                date: "2015",
                description:
                  "Got a Bachelor&apos;s Degree on Electrical Engineering!",
              },
              {
                title: "First Engineering Job After University",
                date: "2015",
                description: "Started working at Hydro One",
              },
              {
                title: "First Experience in Startup as Software Developer",
                date: "2017",
                description: "Started working at Hydro One",
              },
              {
                title: "Joined Commit Searching for Startups!",
                date: "Current",
                description: "Started working at Hydro One",
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
