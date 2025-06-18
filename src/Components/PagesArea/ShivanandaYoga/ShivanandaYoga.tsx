import React, { useState } from 'react';
import {
  Box,
  Card,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { AppButton } from '../../ui/AppButton/AppButton';

export function ShivanandaYoga(): JSX.Element {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box
      id="shivanandaYoga"
      sx={{
        px: { xs: 2, sm: 4, md: 8 },
        py: 6,
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
          p: { xs: 3, sm: 4 },
        }}
      >
         <Box sx={{ mb: 3 }}>
    <img
      src="https://res.cloudinary.com/dsi4cjpvz/image/upload/v1749067119/yoga-background_gu7g7s.jpg"
alt="שיעור יוגה שיבננדה בסטודיו יוגה ברקפת באשקלון"
      style={{
        width: '100%',
        borderRadius: '12px',
        objectFit: 'cover',
        maxHeight: 350,
      }}
    />
  </Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textAlign: 'center',
            mb: 1,
            color: '#333',
          }}
        >
          יוגה ברקפת – מרחב לתנועה, נשימה וחיים שלמים
        </Typography>

        <Typography
          variant="subtitle2"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            mb: 3,
            fontStyle: 'italic',
          }}
        >
          בסטודיו שכונתי, בלב אשקלון
        </Typography>

        {/* טקסט מימין לשמאל בלבד */}
        <Box
          sx={{
            fontSize: '1.15rem',
            lineHeight: 2,
            maxHeight: expanded ? 'none' : 270,
            overflow: 'hidden',
            transition: 'max-height 0.3s ease',
            direction: 'rtl',
            textAlign: 'right',
          }}
        >
          <Typography paragraph>
            מה מביא אדם ליוגה? לפעמים זו סקרנות. לפעמים כאב בגוף. ולפעמים – אהבה.
          </Typography>

          <Typography paragraph>
            המסע שלנו ביוגה התחיל לפני יותר משלושים שנה, דרך שיעור בודד שהוביל לחיים
            שלמים של תרגול, הקשבה והתחדשות. מתוך דרך אישית ומשותפת, פתחנו את "יוגה
            ברקפת" – סטודיו באווירה חמה, ביתית ומזמינה, שבו כל אחד ואחת יכולים למצוא את
            המקום המדויק לתרגול.
          </Typography>

          {expanded && (
            <>
              <Divider sx={{ my: 3 }} />

              <Typography paragraph>
                אצלנו תוכלו למצוא שיעורים במגוון סגנונות והתאמות אישיות:
              </Typography>

              <List sx={{ pr: 2 }}>
                <ListItem disableGutters>
                  <ListItemText
                    primary="🧘 יוגה בשיטת שיבננדה – תרגול מסורתי המדגיש רגיעה, נשימה, תנוחות ומדיטציה"
                    sx={{ textAlign: 'right' }}
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText
                    primary="🌊 ויניאסה יוגה – תנועה זורמת בקצב הנשימה"
                    sx={{ textAlign: 'right' }}
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText
                    primary="🌿 יוגה טיפולית – מותאמת אישית לתהליכי שיקום, כאבים או מגבלות פיזיות"
                    sx={{ textAlign: 'right' }}
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText
                    primary="🤰 יוגה לנשים בהריון – חיזוק, הקלה וחיבור לגוף המשתנה"
                    sx={{ textAlign: 'right' }}
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText
                    primary="🧘‍♂ מדיטציה – מרחב לתרגול שקט, מיקוד פנימי ורווחה נפשית"
                    sx={{ textAlign: 'right' }}
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText
                    primary="👥 שיעורים קבוצתיים ופרטניים – כדי שתוכלו לבחור את מה שנכון לכם"
                    sx={{ textAlign: 'right' }}
                  />
                </ListItem>
              </List>

              <Divider sx={{ my: 3 }} />

              <Typography paragraph sx={{ fontWeight: 500 }}>
                בין אם אתם מתחילים או מתרגלים ותיקים, מחפשים להירגע, להתחזק או פשוט לנשום –
                נשמח לראות אתכם אצלנו, בסטודיו הקטן שבלב השכונה, באשקלון.
              </Typography>

              <Typography paragraph sx={{ fontWeight: 600 }}>
                יוגה ברקפת – תרגול שמתחיל על המזרן וממשיך איתך לכל מקום.
              </Typography>
            </>
          )}
        </Box>

  <Box
  textAlign="center"
  mt={4}
  display="flex"
  justifyContent="center"
  gap={3}
  flexDirection="row-reverse" // הופך את הסדר
>
  <AppButton href="#contact" variant="contained">
    צור קשר
  </AppButton>

  <AppButton
    variant="outlined"
    onClick={() => setExpanded(!expanded)}
    aria-expanded={expanded}
    startIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
  >
    {expanded ? 'קרא פחות' : 'קרא עוד'}
  </AppButton>
</Box>

      </Card>
    </Box>
  );
}
