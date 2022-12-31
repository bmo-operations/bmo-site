import { globalCss, styled } from '@stitches/react';
import { useState } from 'react';
import NavigationMenu from '../common/navigation/NavigationMenu';
import { globalStyles, Heading1 } from '../../theme/global';
import HomeCardLayout from './HomeCardLayout';
import LandingHeader from './LandingHeader';
import { useRouter } from 'next/navigation';
import ImageCard from './ImageCard';
import AboutCard from './cards/AboutCard';

const LandingImage = styled('img', {
  flexGrow: 1,
  maxHeight: '100%',
  objectFit: 'cover',
  width: '100%',
  borderRadius: '24px',
})
  
export default function HomePage() {
    globalStyles();
    const router = useRouter();
  
    return (
      <div>
        
        <HomeCardLayout>
          <LandingHeader/>
          <LandingImage src="/images/team_crump_2022.jpg"/>
          <ImageCard title="Roster" imageSrc="/images/team_crump_2022.jpg" onClick={() => router.push('/roster')}/>
          <AboutCard/>
        </HomeCardLayout>        
      </div>
    );
}