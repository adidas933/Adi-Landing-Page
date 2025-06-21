import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from '@mui/material';

interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: 'יוגה ברקפת',
    description: 'אתר תדמית לסטודיו ליוגה באשקלון עם עיצוב נקי, תוכן מרתק ומיתוג אישי.',
    image: '/images/portfolio/yoga-barakefet.jpg',
    link: 'https://www.yogabarakefet.co.il/',
  },
  {
    title: 'Coming Soon',
    description: 'פרויקט נוסף בדרך – אתר עסקי מותאם אישית עם קוד מלא.',
    image: '/images/portfolio/placeholder.jpg',
  },
];

export function Portfolio(): JSX.Element {
  return (
    <Box id="portfolio" sx={{ py: 8, backgroundColor: 'transparent' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            maxWidth: 1200,
            mx: 3, // מרווח צדדי אך עדיין ממורכז
            px: { xs: 2, sm: 4 },
            py: 6,
            backgroundColor: (theme) => theme.palette.background.paper,
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            mb={4}
            color="primary.main"
            textAlign="center"
          >
            תיק עבודות
          </Typography>

          <Typography
            variant="body1"
            mb={6}
            color="text.secondary"
            textAlign="center"
          >
            הנה כמה דוגמאות לאתרים שבניתי – מותאמים אישית, בקוד מלא ועם דגש על חוויית משתמש.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    boxShadow: 3,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      height: 200,
                      objectFit: 'cover',
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, textAlign: 'right' }}>
                    <Typography variant="h6" fontWeight={600} mb={1}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>

                  {project.link && (
                    <Box textAlign="center" pb={2}>
                      <Button
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        color="primary"
                        sx={{ fontWeight: 'bold' }}
                      >
                        לצפייה באתר
                      </Button>
                    </Box>
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
