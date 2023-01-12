import Image from "next/image";
import Link from "next/link";
import { styled, UndecoratedA } from "../../theme/global";
import { Column } from "../common/Layouts";
import Text from "../common/Text";
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
                    style={{ width: '100%', height: 'auto', borderRadius: '16px' }}
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
    pointer: 'cursor',
})


