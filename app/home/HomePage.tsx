"use client"

import { globalCss, styled } from '@stitches/react';
import { useEffect, useState } from 'react';
import NavigationMenu from '../common/navigation/NavigationMenu';
import HomeCardLayout from './HomeCardLayout';
import LandingHeader from './LandingHeader';
import { useRouter } from 'next/navigation';
import ImageCard from './cards/ImageCard';
import TextCard from './cards/TextCard';
import { LinkCard } from './cards/LinkCard';
import { blue, indigo, red } from '@radix-ui/colors';
import { EnvelopeClosedIcon, EnvelopeOpenIcon, FramerLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { ContentCard } from './cards/ContentCard';
import { TipItem } from '../zipstips/TipItem';
import { getTips, randomTip } from '../zipstips/Tips';
import { ZipsTip } from '../zipstips/ZipsTip';

const LandingImage = styled('img', {
  flexGrow: 1,
  maxHeight: '100%',
  objectFit: 'cover',
  width: '100%',
  borderRadius: '24px',
  alignSelf: "stretch",
})

export default function HomePage() {
  const router = useRouter();
  const [tipOfTheDay, setTipOfTheDay] = useState<ZipsTip>();
  useEffect(() => setTipOfTheDay(randomTip()), []) //need to set using effect for SSR to work

  return (
    <HomeCardLayout>
      <LandingHeader />
      <LandingImage src="/images/team_crump_2022.jpg" />
      <ImageCard title="Roster" imageSrc="/images/team_crump_2022.jpg" onClick={() => router.push('/roster')} />
      <TextCard title="About Us" text="For over 40 years, the Brown Ultimate program has churned out elite players and coaches all across the country. Brown Ultimate, commonly referred to as “The Program,” claims three men’s national titles (2000, 2005, and 2019) and four Callahan winners. This year’s BMo has relied on contributions from a strong Senior class headed by 2022 Callahan Award winnner John Randolph and a standout sophomore class. BMo returned to the College Championships in 2018 after a 10-year hiatus, thanks to the superior coaching of Sam Lehman and Jake Smart, whose commitment and acuity have taken BMo from kangaroo court to nationals contender." />
      <LinkCard
        title="Interested in trying out or playing ultimate at Brown?"
        links={[
          { icon: (<EnvelopeOpenIcon />), text: "Email the captains", colorPalette: Object.values(red), link: "mailto:bmo.captains@gmail.com" },
          { icon: (<EnvelopeClosedIcon />), text: "Join the listserv", colorPalette: Object.values(red), link: "https://listserv.brown.edu/cgi-bin/wa?SUBED1=BMOTION" },
        ]} />
      <LinkCard
        title="Follow Us"
        links={[
          { icon: (<TwitterLogoIcon />), text: "Twitter", colorPalette: Object.values(blue), link: "https://twitter.com/BMoUltimate" },
          { icon: (<FramerLogoIcon />), text: "Facebook", colorPalette: Object.values(indigo), link: "https://www.facebook.com/bmoultimate/" },
        ]} />
      <ContentCard title="Zip’s Tip of the Day" onMore={() => router.push('/zipstips')}>
        {tipOfTheDay !== undefined && <TipItem tip={tipOfTheDay} style="tipCard" />}
      </ContentCard>
    </HomeCardLayout>
  );
}