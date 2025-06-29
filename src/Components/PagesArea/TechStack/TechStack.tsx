import { Box, Typography, Container } from '@mui/material';

const techLogos = [
  { name: 'React', file: 'react.svg' },
  { name: 'TypeScript', file: 'typescript.svg' },
  { name: 'JavaScript', file: 'javascript.svg' },
  { name: 'HTML5', file: 'html5.svg' },
  { name: 'CSS3', file: 'css3.svg' },
  { name: 'Material UI', file: 'mui.svg' },
  { name: 'GitHub', file: 'github.svg' },
  { name: 'Vercel', file: 'vercel.svg' },
  { name: 'Node.js', file: 'nodejs.svg' },
  { name: 'MongoDB', file: 'mongodb.svg' },
  { name: 'MySQL', file: 'mysql.svg' },
  { name: 'Next.js', file: 'nextjs.svg' },
  // { name: 'Firebase', file: 'firebase.svg' }, ← הוסר
  // { name: 'Framer Motion', file: 'framer.svg' }, ← הוסר
];

export function TechStack(): JSX.Element {
  return (
    <Box sx={{ py: { xs: 4, md: 6 }, backgroundColor: 'background.paper' }}>
      <Container
        maxWidth="lg"
        sx={{
          borderRadius: 4,
          boxShadow: 3,
          backgroundColor: 'background.paper',
          px: { xs: 2, md: 4 },
          py: { xs: 3, md: 5 },
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" fontWeight={700} gutterBottom>
          טכנולוגיות שאני משתמש בהן
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: { xs: 3, sm: 4 },
            mt: 3,
          }}
        >
          {techLogos.map((tech) => (
            <Box key={tech.name} sx={{ textAlign: 'center' }}>
              <Box
                component="img"
                src={`/images/logo/${tech.file}`}
                alt={tech.name}
                sx={{
                  height: 50,
                  width: 'auto',
                  filter: 'grayscale(30%)',
                  transition: '0.3s',
                  '&:hover': {
                    filter: 'grayscale(0%)',
                    transform: 'scale(1.1)',
                  },
                }}
              />
              <Typography variant="caption" sx={{ mt: 1, display: 'block' }}>
                {tech.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
