import Slider from 'react-slick';
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import { CarouselList, settings } from '../../Utils/Variables/Variables';

export function HeroSlider(): JSX.Element {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      role="region"
      aria-label="Hero Carousel"
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Slider {...settings}>
        {CarouselList.map((item, index) => (
          <Box
            key={item.name}
            sx={{
              height: '100%',
              width: '100%',
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.35)), url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              direction: 'rtl',
              textAlign: 'center',
              px: 2,
              color: 'white',
              animation: 'panBackground 10s ease-in-out infinite alternate',
            }}
          >
            <Box
              sx={{
                maxWidth: 600,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                height: '100vh',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <Typography
                component={index === 0 ? 'h1' : 'h2'}
                variant={isMobile ? 'h4' : 'h2'}
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  textShadow: '0 2px 4px rgba(0,0,0,0.6)',
                }}
              >
                {item.header}
              </Typography>

              <Typography
                variant={isMobile ? 'body1' : 'h5'}
                sx={{
                  mb: 4,
                  textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                }}
              >
                {item.subHeader}
              </Typography>

              <ScrollLink to={item.buttonLink} smooth duration={600} offset={-70}>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 'bold',
                    borderRadius: 10,
                    boxShadow: '0px 4px 15px rgba(0,0,0,0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0px 6px 20px rgba(0,0,0,0.4)',
                    },
                  }}
                >
                  {item.buttonName}
                </Button>
              </ScrollLink>
            </Box>
          </Box>
        ))}
      </Slider>

      <style>
        {`
          @keyframes panBackground {
            0% {
              background-position: center top;
            }
            100% {
              background-position: center bottom;
            }
          }
        `}
      </style>
    </Box>
  );
}
