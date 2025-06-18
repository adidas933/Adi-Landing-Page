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
            יוגה – דרך חיים ומשמעות
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
                  יוגה עבורי היא הרבה יותר מתרגול גופני – היא דרך חיים שלמה,
                  המשלבת חיבור עמוק בין הגוף, הנפש והרוח. למדתי יוגה במשך 16
                  שנים בשיטת וינגייט, עם התמחות בויניאסה – זרימה דינמית של
                  תנועות המאפשרת הרמוניה מלאה בין הנפש לגוף.
                </Typography>
                <Typography paragraph>
                  בנוסף, השלמתי הכשרה ביוגה שיבננדה באיי בהאמאס, שם נחשפתי
                  לזרם המדגיש תרגול מודע, נשימה ומדיטציה כחלק בלתי נפרד
                  מהיוגה. אני משלבת את שתי השיטות בגישה הוליסטית המעצימה את
                  חיזוק הגוף, שחרור המתח והשקט הפנימי.
                </Typography>

                {expanded && (
                  <>
                    <Typography paragraph>
                      התרגול שאני מציעה הוא מסע פנימי לעבר מודעות עצמית גבוהה
                      יותר, שקט נפשי וחיבור עמוק למודעות – היוגה מבחינתי היא
                      השקט של ההכרה, המקום שבו הגוף במיטבו והנפש בשלווה.
                    </Typography>
                    <Typography paragraph>
                      אני מאמינה שכל אחד יכול להתחבר ליוגה בדרך שמתאימה לו,
                      ולהפיק ממנה תועלת בכל תחומי החיים – מחיזוק הגוף וגמישות,
                      דרך התמודדות עם סטרס וחרדות, ועד להעמקת ההבנה העצמית
                      והשקט הפנימי.
                    </Typography>
                    <Typography paragraph>
                      אני מזמינה אתכם להצטרף אלי למסע המופלא של גילוי וחיבור,
                      ולהפוך את היוגה לחלק משמעותי ומעצים בחייכם. אשמח להפיץ
                      את הידע והאהבה שלי ליוגה לכל מי שמעוניין להכניס חיים
                      בריאים, מודעות ושקט לשגרת היום-יום.
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
                  נכתב באהבה על ידי גלית 🌸
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={5} textAlign="center">
              <Box
                component="img"
                src="https://res.cloudinary.com/dsi4cjpvz/image/upload/v1749066336/galit-dodi_w89ep7.jpg"
alt="גלית ודודי – מייסדי סטודיו יוגה ברקפת באשקלון"
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
                גלית ודודי – מייסדי הסטודיו
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
            <AppButton href="#contact">צור קשר</AppButton>

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
