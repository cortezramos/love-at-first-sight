import { useEffect, useState } from "react";
import "./App.css";
import YoutubePlayer from "react-player/youtube";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/config";

export const Video = () => {
  const [data, setData] = useState<string[]>([]);
  const [load, setLoad] = useState<boolean>(false);

  useEffect(
    () => {
      //document.title = "React Player";
      const dataRef = collection(db, "songs");
      const listVideos: string[] = [];
      getDocs(dataRef).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          listVideos.push(doc.data().url);
        });
        setLoad(true);
      });
      setData(listVideos);
    },
    // eslint-disable-next-line
    []
  );

  return (
    <div className="reactplayer">
      {load && (
        <YoutubePlayer
          url={data}
          controls
          loop
          config={{
            playerVars: {
              host: `${window.location.protocol}//www.youtube.com`,
            },
          }}
        />
      )}
    </div>
  );
};
