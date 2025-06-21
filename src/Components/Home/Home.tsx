import { useState } from 'react';
import { Box } from '@mui/material';
import { Helmet } from 'react-helmet';
import FadeInSection from '../ui/FadeInSection/FadeInSection';
import { About } from '../PagesArea/About/About';
import { Contact } from '../PagesArea/Contact/Contact';
import { Portfolio } from '../PagesArea/Portfolio/Portfolio';
import { Services } from '../PagesArea/Services/Services';
import { InclineAnimation } from '../ui/InclineAnimation/InclineAnimation';
import { HeroSection } from '../PagesArea/HeroSection/HeroSection';
import MiniSitePreview from '../PagesArea/MiniSitePreview/MiniSitePreview';

interface HomeProps {
  onIntroDone?: () => void;
}

export function Home({ onIntroDone }: HomeProps): JSX.Element {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroEnd = () => {
    setIntroComplete(true);
    onIntroDone?.();
  };

  return (
    <>
      <Helmet>
        <title>Adi Sites – בניית אתרים ודפי נחיתה</title>
        <meta
          name="description"
          content="אני עדי, בונה אתרי תדמית ודפי נחיתה בקוד – בעיצוב מדויק, מותאם אישית, ובחוויית משתמש שעובדת. בוא נדייק את הנוכחות הדיגיטלית שלך."
        />
        <meta
          name="keywords"
          content="בניית אתרים, דפי נחיתה, פרילנסר אתרים, React, עיצוב אתרים, אתרי תדמית"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Adi Sites – בניית אתרים ודפי נחיתה" />
        <meta
          property="og:description"
          content="עדי – מפתח אתרים ודפי נחיתה לעסקים קטנים ויזמים. התאמה אישית, מהירות, תוצאה מקצועית."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
      </Helmet>

      {/* HeroSection לפני הכל – לוקח מסך שלם */}
      <HeroSection onIntroDone={handleIntroEnd} />

      {/* שאר התוכן של הדף */}
      {introComplete && (
        <Box
          className="home-container"
          sx={{
backgroundColor: 'transparent',
            width: '100%',
            boxSizing: 'border-box',
            px: { xs: 0, md: 0 },
            mx: 0,
            overflowX: 'hidden',
            animation: 'fadein 1.5s',
            '@keyframes fadein': {
              from: { opacity: 0 },
              to: { opacity: 1 },
            },
          }}
        >
          <InclineAnimation />

          <FadeInSection>
            <About />
          </FadeInSection>

          <FadeInSection>
            <Services />
          </FadeInSection>

          <FadeInSection>
            <Portfolio />
          </FadeInSection>
<FadeInSection>
  <MiniSitePreview /> 
</FadeInSection>
          <FadeInSection>
            <Contact />
          </FadeInSection>
        </Box>
      )}
    </>
  );
}
