import React, { useRef, useEffect } from "react";
import vineyard from "../assets/carlevana.mp4";

function MyVideoPlayer() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <video ref={videoRef} muted onCanPlay={() => videoRef.current.play()}>
      <source src={vineyard} />
      Your browser does not support the video tag.
    </video>
  );
}

export default MyVideoPlayer;
