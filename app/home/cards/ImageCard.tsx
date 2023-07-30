import { ArrowRightIcon } from '@radix-ui/react-icons';
import React from 'react';
import { styled, Row } from "styled-system/jsx";
import { Text } from '../../common/theme/global';
import { HomeCard } from '../HomeCard';

export default function ImageCard({ title, imageSrc, onClick }: { title: string, imageSrc: string, onClick: () => void }) {
    return (
        <ImageCardLayout onClick={e => onClick()}>
            <ContentLayout justify='space-between' align='center'>
                <Text style="h3" color="accent">{title}</Text>
                <ArrowRightIcon width={30} height={30} />
            </ContentLayout>
        </ImageCardLayout>
    )
}

const ImageCardLayout = styled(HomeCard, {
    base: {
        alignSelf: 'stretch',
        background: 'red.3',
        color: 'red.11',
        cursor: 'pointer',
        height: '100%',
        boxSizing: "border-box",
        justifyContent: 'flex-end',    
    },
})

const ContentLayout = styled(Row, {
    base: {
        width: '100%'
    },
})