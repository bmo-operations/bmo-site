import { ArrowRightIcon } from '@radix-ui/react-icons';
import React from 'react';
import { Heading2, styled } from '../../theme/global';
import { HomeCard } from './HomeCard';

export default function ImageCard({title, imageSrc, onClick}: {title: string, imageSrc: string, onClick: () => void}) {
    return (
        <ImageCardLayout onClick={e => onClick()}>
            <ContentLayout>
                <Heading2>{title}</Heading2>
                <ArrowRightIcon width={30} height={30}/>
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

const ContentLayout = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '-webkit-fill-available'
})