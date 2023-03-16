import React, { useRef, useEffect } from "react";
import vineyard from "../assets/carlevana.mp4";

function Video() {
  const videoRef = useRef(null);

  useEffect(() => {
    //The useEffect hook is called with an empty dependency array, meaning that it will only be called once when the component is first rendered.
    if (videoRef.current) {
      //Inside the useEffect callback, it checks if the videoRef.current is not null, if true, it will call the play() method on the current video element.
      videoRef.current.play();
      //The ref attribute allows us to access the video element in the component and call methods on it, such as play(). 
    }
  }, []);

  return (
    <video ref={videoRef} muted onCanPlay={() => videoRef.current.play()}>
      {/* <!----The onCanPlay event is also used to play the video when it is ready to be played.----> */}
      <source src={vineyard} />
      Your browser does not support the video tag.
    </video>
  );
}

export default Video;
