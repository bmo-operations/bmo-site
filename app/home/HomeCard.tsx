import { styled } from '@stitches/react';
import React from 'react';

export default function HomeCard({title, imageSrc, onClick}: {title: string, imageSrc: string, onClick: () => void}) {
    return (
        <div></div>
    )
}

const HomeCardLayout = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    padding: '32px',
    height: 'fit-content',
  })