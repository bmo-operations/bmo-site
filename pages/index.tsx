import { globalCss, styled } from '@stitches/react';
import { useState } from 'react';
import NavigationMenu from '../components/navigation-menu';
import { globalStyles, Heading1 } from '../theme/global';

function Header({ title }: { title: string }) {
    return <h1>{title ? title : 'Default title'}</h1>;
  }

function Landing({ title }: { title: string }) {
  return (
    <LandingLayout>
      <Heading1>
        {title}
      </Heading1>
      <LandingImage src="/images/team_crump_2022.jpg"/>
    </LandingLayout>
  )
}

const LandingLayout = styled('div', {
  display: 'flex',
  gap: '64px',
  padding: '64px',
  height: 'fit-content',
})

const LandingImage = styled('img', {
  flexGrow: 1,
  maxHeight: '100%',
  objectFit: 'cover',
  width: '100%',
  borderRadius: '24px',
})
  
export default function HomePage() {
    globalStyles();
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  
    const [likes, setLikes] = useState(0);
  
    function handleClick() {
      setLikes(likes + 1);
    }
  
    return (
      <div>
        <NavigationMenu/>
        {/* <Header title="Develop. Preview. Ship. 🚀" /> */}
        <Landing title='Brownian Motion'/>
        <ul>
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
  
        <button onClick={handleClick}>Like ({likes})</button>
      </div>
    );
}