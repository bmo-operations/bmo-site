import Image from 'next/image';
import { useState } from 'react';
import { css } from 'styled-system/css';

export function VideoCard({ videoSrc, coverImageSrc }: { videoSrc: string, coverImageSrc: string }) {
    const [isFrameLoaded, setFrameLoaded] = useState(false)
    const [isVideoLoaded, setVideoLoaded] = useState(false)
    return (
        <video
        src={videoSrc}
        playsInline={true}
        loop={true}
        muted={true}
        autoPlay={true}
        // poster={coverImageSrc}
        onLoadedData={e => setFrameLoaded(true)}
        onPlay={e => setVideoLoaded(true)}
        className={MediaItemStyle}/>
    )
}

const MediaItemStyle = css({
    flexGrow: 1,
    maxHeight: '100%',
    objectFit: 'cover',
    width: '100%',
    borderRadius: '24px',
    alignSelf: "stretch",  
  })