import Image from "next/image";
import { Ref, useEffect, useRef, useState } from "react";
import { css } from "styled-system/css";
import { styled } from "../../../styled-system/jsx";

export function VideoCard({
  videoSrc,
  coverImageSrc,
}: {
  videoSrc: string;
  coverImageSrc: string;
}) {
  const [isLoaded, setLoaded] = useState(false);
//  	useEffect(() => {
//  		setTimeout(() => setLoaded(true), 1000)
//  	}, []);
  const videoRef: Ref<HTMLVideoElement> = useRef(null)
  useEffect(() => {
    console.log(`ref updated, videoState = ${videoRef.current?.readyState}`)
    setLoaded((videoRef.current?.readyState ?? -1) >= (videoRef.current?.HAVE_FUTURE_DATA ?? 3))
  }, [videoRef])
  return (
    <ContainerBase>
      <Placeholder isLoaded={isLoaded} />
      <VideoBase
        src={videoSrc}
        playsInline={true}
        loop={true}
        muted={true}
        autoPlay={true}
        // poster={coverImageSrc}
        // onLoadedData={(e) => setLoaded(true)}
        onCanPlay={(e) => {
          console.log("video loaded");
          setLoaded(true);
        }}
        ref={videoRef}
        loaded={isLoaded}
        className={MediaItemStyle}
      />
    </ContainerBase>
  );
}

const ContainerBase = styled("div", {
	base: {
		display: "grid",
		gridTemplateRows: "1fr",
		gridTemplateColumns: "1fr",
		backgroundColor: "red.4",
		borderRadius: "24px",
		aspectRatio: {
			base: "18/9",
			lg: "inherit",
		},
	}
})

const VideoBase = styled("video", {
  base: {
    animation: "fadeIn .5s",
  	gridRow: "1",
  	gridColumn: "1",
  },
  variants: {
    loaded: {
      false: { display: "none" },
      true: { display: "inherit" },
      //			false: { opacity: "0", },
      //			true: { opacity: "1", },
    },
  },
});

function Placeholder({ isLoaded }: { isLoaded: boolean }) {
  return (
	  <PlaceholderBase loaded={isLoaded} className={MediaItemStyle}>
      <Frisbee />
    </PlaceholderBase>
  );
}

const PlaceholderBase = styled("div", {
  base: {
  	animation: "fadeOut",
  	gridRow: "1",
  	gridColumn: " 1 / span 1",
    backgroundColor: "red.4",
    position: "relative",
    overflow: "hidden",
    aspectRatio: {
      base: "18/9",
      lg: "inherit",
    },
  },
	variants: {
	  loaded: {
		false: { display: "inherit", },
		true: { display: "none", },
	  },
	},
});

function Frisbee() {
  return <FrisbeeBase></FrisbeeBase>;
}

const FrisbeeBase = styled("div", {
  base: {
    width: "108px",
    height: "48px",
    backgroundColor: "white.a.12",
    borderRadius: "50%",
    boxShadow:
      "0px 1px 0px 0px token(colors.white.a.2) inset, 0px 4px 1px 2px token(colors.white.a.9)",
    animation: "boomerang 2s infinite ease-in-out, moveLeft 2s infinite linear",
    position: "absolute",
  },
});

const MediaItemStyle = css({
  flexGrow: 1,
  maxHeight: "100%",
  objectFit: "cover",
  width: "100%",
  borderRadius: "24px",
  alignSelf: "stretch",
});
