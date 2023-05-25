import React from "react";
import PlaylistBtn from "./PlaylistBtn";
import "./Body.css";

const Body = () => {
  return (
    <>
      <h1>Focus</h1>
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
    </>
  );
};

export default Body;
