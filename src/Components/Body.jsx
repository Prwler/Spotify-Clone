import React, { Suspense } from "react";
import PlaylistBtn from "./PlaylistBtn";
import { Route, Routes } from "react-router-dom";
import DeepFocus from "../Pages/DeepFocus";
import "./Body.css";

const Body = () => {
  return (
    <>
      <h1>Focus</h1>
      {/* <Suspense fallback={<div>Loading.......</div>}>
        <Routes>
          <Route path="/DeepFocus" element={<DeepFocus />}></Route>
        </Routes>
      </Suspense> */}

      <PlaylistBtn
        imageSource={"/assets/PeacefulPiano.svg"}
        title="Peaceful Piano"
        body="Peaceful piano to help you slow down, breathe and relax."
      />
      <PlaylistBtn
        imageSource={"/assets/DeepFocus.svg"}
        title="Deep Focus"
        body="Keep calm and focus with ambient and post-rock music."
      />

      <PlaylistBtn
        imageSource={"/assets/InstrumentalStudy.svg"}
        title="Instrumental Study"
        body="Focus with soft study music in the background."
      />

      <PlaylistBtn
        imageSource={"/assets/FocusFlow.svg"}
        title="Focus Flow"
        body="Uptempo instrumental hip hop beats."
      />

      <h1>Spotify Playlists</h1>
      <PlaylistBtn
        imageSource={"/assets/TopHits.svg"}
        title="Today's Top Hits"
        body="Harry Styles is on top of the Hottest 50!"
      />
      <PlaylistBtn
        imageSource={"/assets/RapCaviar.svg"}
        title="Rap Caviar"
        body="New music from Lil Baby, Gucci Mane and DaBaby."
      />
      <PlaylistBtn
        imageSource={"/assets/2010s.svg"}
        title="All Out 2010s"
        body="The biggest songs of the 2010s."
      />
      <PlaylistBtn
        imageSource={"/assets/ChillHits.svg"}
        title="Chill Hits"
        body="Kick back to the best new and recent chill hits."
      />
    </>
  );
};

export default Body;
