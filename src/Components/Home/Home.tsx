import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { About } from '../PagesArea/About/About';
// import { Testimonials } from '../PagesArea/Testimonials/Testimonials';
import { Contact } from '../PagesArea/Contact/Contact';
import { ShivanandaYoga } from '../PagesArea/ShivanandaYoga/ShivanandaYoga';
import { Gallery } from '../PagesArea/Gallery/Gallery';
import { HeroSlider } from '../PagesArea/HeroSlider/HeroSlider';
import { Classes } from '../PagesArea/Classes/Classes';
import { Location } from '../PagesArea/Location/Location';
import { ExtraActivities } from '../PagesArea/ExtraActivities/ExtraActivities';
import { StudioExtras } from '../PagesArea/StudioExtras/StudioExtras';
import { LogoDivider } from '../ui/LogoDivider/LogoDivider';
import FadeInSection from '../ui/FadeInSection/FadeInSection';
import { Helmet } from 'react-helmet';

export function Home(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>סטודיו יוגה באשקלון | יוגה ברקפת</title>
        <meta
          name="description"
          content="שיעורי יוגה באשקלון לילדים, נשים ומבוגרים. יוגה תרפיה, שיבננדה, סדנאות והרפיה לגוף ולנפש בסטודיו יוגה ברקפת."
        />
        <meta
          name="keywords"
          content="יוגה באשקלון, יוגה לילדים, יוגה נשים, סטודיו יוגה, יוגה תרפיה, יוגה שיבננדה, מדיטציה, סדנאות יוגה"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="יוגה ברקפת | סטודיו יוגה באשקלון" />
        <meta
          property="og:description"
          content="סטודיו יוגה באשקלון עם שיעורים חווייתיים לילדים, נשים ומבוגרים. מרחב אישי לחיבור בין תנועה, נשימה ונפש."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
      </Helmet>
      <Box
        className="home-container"
        sx={{
          background: 'background.default',
          minHeight: '100vh',
          overflowX: 'hidden',
          width: '100%',
          boxSizing: 'border-box',
          px: { xs: 0, md: 0 },
          mx: 0,
          overflow: 'hidden',
          animation: 'fadein 1.5s',

          '@keyframes fadein': {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
        }}
      >
        <HeroSlider />
        <LogoDivider height={300} />
        <FadeInSection>
          <About />
          <LogoDivider height={300} />
        </FadeInSection>
        <FadeInSection>
          <ShivanandaYoga />
          <LogoDivider height={300} />
        </FadeInSection>
        {/* <FadeInSection>
        <Testimonials />
        <LogoDivider height={300} />
        </FadeInSection> */}
        <FadeInSection>
          <Classes />
          <LogoDivider height={300} />
        </FadeInSection>
        <FadeInSection>
          <Location />
          <LogoDivider height={300} />
        </FadeInSection>
        <FadeInSection>
          <ExtraActivities />
          <LogoDivider height={300} />
        </FadeInSection>
        <FadeInSection>
          <Gallery />
          <LogoDivider height={300} />
        </FadeInSection>
        <FadeInSection>
          <StudioExtras />
          <LogoDivider height={300} />
        </FadeInSection>
        <FadeInSection>
          <Contact />
          <LogoDivider height={300} />
        </FadeInSection>
      </Box>
    </>
  );
}
