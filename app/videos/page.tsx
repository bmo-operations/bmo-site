"use client"

import Container from "../common/Container";
import { ContentLayout, ContentGrid } from "../common/ContentLayout";
import VideoItem from "./VideoItem";
import { allVideos } from "./VideoRepository";

export default function VideoPage() {
    return (
        <Container>
            <ContentLayout
                content={allVideos()}
                element={(year, value) =>
                    <ContentGrid
                        key={year}
                        year={year}
                        contentName="Videos"
                        content={value}
                        element={v => <VideoItem video={v} onClick={() => false} />}
                    />
                }
            />
        </Container>
    )
}