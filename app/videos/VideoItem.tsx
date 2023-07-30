import Image from "next/image";
import Link from "next/link";
import { UndecoratedA } from "../common/theme/global";
import { styled, Column, Row } from "styled-system/jsx";
import { Text } from "../common/theme/global";
import { Video, videoThumbnail } from "./Video";

export default function VideoItem({ video, onClick }: { video: Video, onClick: () => void }) {
    return (
        <UndecoratedA href={video.link} target="_blank" rel="noopener noreferrer">
            <VideoItemBase gap="16px" onClick={e => onClick()}>
                <Image
                    src={videoThumbnail(video)}
                    alt={`thumbnail of ${video.title}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    width={0}
                    height={0}
                    style={{ width: '100%', height: 'auto', borderRadius: '16px', aspectRatio: "calc(16/9)", objectFit: "cover" }}
                />
                <Column>
                    <Text style="subtitle" color="primary">{video.title}</Text>
                    {video.description !== undefined && <Text style="body" color="secondary">{video.description}</Text>}
                </Column>
            </VideoItemBase>
        </UndecoratedA>
    )
}

const VideoItemBase = styled(Column, {
    base: {
        cursor: "pointer",
    },
})


