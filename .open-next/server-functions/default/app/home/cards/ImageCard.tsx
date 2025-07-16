import { ArrowRightIcon } from '@radix-ui/react-icons';
import React from 'react';
import { styled, Row } from "styled-system/jsx";
import { Text } from '../../common/theme/global';
import { HomeCard } from '../HomeCard';
import { ArrowRight } from 'phosphor-react';

export default function ImageCard({ title, imageSrc, onClick }: { title: string, imageSrc: string, onClick: () => void }) {
    return (
        <ImageCardLayout onClick={e => onClick()}>
            <ContentLayout justify='space-between' align='center' css={{ fontSize: "x-large" }}>
                <Text style="h3" color="accent">{title}</Text>
                <ArrowRight />
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