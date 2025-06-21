import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

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
  // תוכל להוסיף פרויקטים נוספים כאן
];

export function Portfolio(): JSX.Element {
  return (
    <Box
      id="portfolio"
      sx={{
        px: { xs: 2, sm: 4, md: 8 },
        py: 6,
        direction: 'rtl',
        textAlign: 'right',
        backgroundColor: 'background.default',
      }}
    >
      <Typography variant="h4" fontWeight={700} textAlign="center" mb={4}>
        תיק עבודות
      </Typography>

      <Typography variant="body1" textAlign="center" mb={6} color="text.secondary">
        הנה כמה דוגמאות לאתרים שבניתי – מותאמים אישית, בקוד מלא ועם דגש על חוויית משתמש.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                sx={{ height: 200, objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
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
                    sx={{ mt: 1 }}
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
  );
}
