import { ArrowRightIcon } from '@radix-ui/react-icons';
import React from 'react';
import { styled } from '../../common/theme/global';
import { Row } from '../../common/Layouts';
import Text from '../../common/Text';
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
    alignSelf: 'stretch',
    background: '$red3',
    color: '$red11',
    cursor: 'pointer',
    height: '-webkit-fill-available',
    justifyContent: 'flex-end',
})

const ContentLayout = styled(Row, {
    width: '-webkit-fill-available'
})