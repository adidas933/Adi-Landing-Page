import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function AppButton(props: React.ComponentProps<typeof Button>) {
  return (
    <Button
      variant="contained"
      sx={{
        fontWeight: 'bold',
        fontSize: '1.1rem',
        textTransform: 'none',
        borderRadius: 2,
        px: 3,
        py: 1.2,
        boxShadow: 'none',
        '&:hover': {
          boxShadow: '0 4px 10px rgb(0 0 0 / 0.15)',
        },
      }}
      {...props}
    />
  );
}

export function About(): JSX.Element {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box
      id="about"
      sx={{
        px: { xs: 2, sm: 4, md: 8 },
        py: 6,
        direction: 'rtl',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Card
        sx={{
          maxWidth: 900,
          width: '100%',
          borderRadius: 4,
          boxShadow: 6,
          bgcolor: 'background.paper',
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              mb: 4,
              fontWeight: 700,
              color: '#333',
            }}
          >
            קצת עליי – בניית אתרים בקוד, בגובה העיניים
          </Typography>

          <Grid container spacing={6} justifyContent="center">
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  lineHeight: 2,
                  textAlign: 'right',
                  maxWidth: '700px',
                  mx: 'auto',
                  maxHeight: expanded ? 'none' : 340,
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease',
                }}
              >
                <Typography paragraph>
                  היי, אני עדי – מפתח אתרים ודפי נחיתה בקוד. בשנים האחרונות גיליתי כמה עוצמה יש ביכולת להקים נוכחות דיגיטלית נקייה, מדויקת, ומהירה – במיוחד כשזה מגיע לעסקים קטנים ואנשים עם חזון.
                </Typography>
                <Typography paragraph>
                  אני בונה אתרים ב־React, עם עיצוב מותאם אישית ותשומת לב אמיתית לחוויית משתמש. כל פרויקט הוא בשבילי גם תהליך של הקשבה – לצרכים, לקצב, לאופי של מי שמולי.
                </Typography>

                {expanded && (
                  <>
                    <Typography paragraph>
                      את האתרים אני יוצר בידיים ובקוד, בלי תבניות כבדות – מה שמביא למהירות טעינה, התאמה מדויקת, וגמישות מלאה למיתוג. אם זה אתר תדמית, דף נחיתה, או אפילו פינה קטנה להצגת תיק עבודות – אני דואג שהוא ישרת אותך באמת.
                    </Typography>
                    <Typography paragraph>
                      העבודה שלי משלבת דיוק טכנולוגי עם לב פתוח. אני מאמין שאפשר לעשות את זה אחרת – נעים, ברור, בגובה העיניים – ולבנות נוכחות דיגיטלית שיש בה אמת.
                    </Typography>
                  </>
                )}

                <Typography
                  variant="caption"
                  sx={{
                    display: 'block',
                    textAlign: 'left',
                    mt: 2,
                    fontStyle: 'italic',
                    color: 'text.secondary',
                  }}
                >
                  נכתב באהבה – עדי ונונו 💻
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={5} textAlign="center">
              <Box
                component="img"
                src="/images/adi-portrait.jpg"
                alt="עדי ונונו – בונה אתרים"
                sx={{
                  width: '100%',
                  maxWidth: 400,
                  height: 'auto',
                  borderRadius: 3,
                  boxShadow: 3,
                  mx: 'auto',
                }}
              />
              <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 600 }}>
                עדי ונונו – Adi Sites
              </Typography>
            </Grid>
          </Grid>

          <Box
            textAlign="center"
            mt={4}
            display="flex"
            justifyContent="center"
            gap={3}
          >
            <AppButton href="#contact">דברו איתי</AppButton>

            <AppButton
              variant="outlined"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              endIcon={
                <Box sx={{ mr: 1 }}>
                  {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </Box>
              }
              sx={{
                boxShadow: 'none',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                px: 2,
                py: 1.2,
                borderRadius: 2,
              }}
            >
              {expanded ? 'קרא פחות' : 'קרא עוד'}
            </AppButton>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
