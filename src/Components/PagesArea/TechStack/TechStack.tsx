// TechStack.tsx
import { Box,  Typography, useTheme } from '@mui/material';

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
];

export function TechStack(): JSX.Element {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mt: 8,
        display: 'flex',
        justifyContent: 'center',
        px: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderRadius: 4,
          boxShadow: 3,
          py: { xs: 4, md: 5 },
          px: { xs: 3, md: 6 },
          maxWidth: '1000px',
          width: '100%',
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
            gap: 4,
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
      </Box>
    </Box>
  );
}
