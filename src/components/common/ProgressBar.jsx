import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [scrollPercent, setscrollPercent] = useState(1);

  useEffect(() => {


    const handleScroll = () => {

      const winHeight = window.innerHeight;
      const docuHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;

      const scrollPercent = (scrollY / (docuHeight - winHeight)) * 100
      setscrollPercent(scrollPercent)
      // console.log(scrollPercent);

    }


    window.addEventListener("scroll", handleScroll)
    window.removeEventListener
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [])

  return (
    <>
      <div
        id="progress-container"
        style={{
          height: "6px",
          width: "100%",

          position: "sticky",
          top: "0",
          left: "0",
          right: "0",
        }}
        className="z-50"
      >
        <div
          className="progress-fill"
          style={{ height: "100%", backgroundColor: "#097969	", width: `${scrollPercent}%` }}
        ></div>
      </div>
    </>
  );
};

export { ProgressBar };
