import "./App.css";
import YoutubePlayer from "react-player/youtube";

export const Video = () => {
  return (
    <div className="reactplayer">
      <YoutubePlayer
        url={[
          "https://www.youtube.com/watch?v=m86SrMsjgP0",
          "https://www.youtube.com/watch?v=MldGX_mbS-o",
          "https://www.youtube.com/watch?v=D9W4DLjmoOM",
          "https://www.youtube.com/watch?v=zLX_GcXt2pI",
          "https://www.youtube.com/watch?v=sD9_l3oDOag",
          "https://www.youtube.com/watch?v=dsLjyLn859g",
          "https://www.youtube.com/watch?v=8g3KHA8ROiA",
        ]}
        controls
        loop
      />
    </div>
  );
};
