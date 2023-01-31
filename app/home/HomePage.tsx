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
import { blue, indigo, orange, red } from '@radix-ui/colors';
import { ArchiveIcon, EnvelopeClosedIcon, EnvelopeOpenIcon, FramerLogoIcon, Link1Icon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { ContentCard } from './cards/ContentCard';
import { TipItem } from '../zipstips/TipItem';
import { getTips, randomTip } from '../zipstips/Tips';
import { ZipsTip } from '../zipstips/ZipsTip';
import aboutUs from "../../public/content/home/aboutus.json"
import homeVideos from "../../public/content/home/homeVideos.json"
import * as Dialog from '@radix-ui/react-dialog';
import { DialogOverlay } from '../common/Dialog';
import { SupportPopup } from './SupportPopup';
import VideoItem from "../videos/VideoItem";

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
  const [isSupportPopupOpen, setSupportPopupOpen] = useState(false);
  useEffect(() => setTipOfTheDay(randomTip()), []) //need to set using effect for SSR to work
    useEffect(() => console.log("isSupportPopupOpen = ", isSupportPopupOpen), [isSupportPopupOpen])
  return (
    <HomeCardLayout>
      <LandingHeader />
      <LandingImage src="/images/team_crump_2022.jpg" />
      <ImageCard title="Roster" imageSrc="/images/team_crump_2022.jpg" onClick={() => router.push('/roster')} />
      <TextCard title={aboutUs.title} text={aboutUs.text} />
      <LinkCard
        title="Interested in trying out or playing ultimate at Brown?"
          spanDesktop={2}
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
      <LinkCard
          title="Support Us"
        links={[
          { icon: (<ArchiveIcon />), text: "Buy team merch on Etsy", description: "These items are sold at cost, so feel free to donate as well!", colorPalette: Object.values(orange), link: "https://www.etsy.com/shop/bmomerchandise" },
          { icon: (<Link1Icon />), text: "Donate to the team", colorPalette: Object.values(red), onClick: () => {
              console.log("opening support popup")
              setSupportPopupOpen(true)
          } },
        ]} />
        {isSupportPopupOpen && <Dialog.Root defaultOpen onOpenChange={o => setSupportPopupOpen(o)}>
            <Dialog.Portal>
                <DialogOverlay/>
                <SupportPopup onClose={() => setSupportPopupOpen(false)}/>
            </Dialog.Portal>
        </Dialog.Root>}
        <ContentCard title="Watch" onMore={() => router.push('/videos')}>
            {homeVideos.videos.map((v) => <VideoItem video={v} onClick={() => false} direction="horizontal"/>)}
        </ContentCard>
        <ContentCard title="News" onMore={() => router.push('/news')}>

        </ContentCard>
        <ContentCard title="Zip’s Tip of the Day" onMore={() => router.push('/zipstips')} spanDesktop={2}>
            {tipOfTheDay !== undefined && <TipItem tip={tipOfTheDay} style="tipCard" />}
        </ContentCard>
    </HomeCardLayout>
  );
}