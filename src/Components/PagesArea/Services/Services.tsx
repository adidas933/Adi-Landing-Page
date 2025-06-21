import { Box, Typography, Grid, Card } from '@mui/material';
import WebIcon from '@mui/icons-material/Public';
import PageviewIcon from '@mui/icons-material/Pageview';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <WebIcon sx={{ fontSize: 40 }} />,
    title: 'בניית אתרי תדמית',
    description: 'פיתוח אתרים מותאמים אישית בקוד (React), מהירים, מעוצבים וידידותיים למובייל ולגוגל.',
  },
  {
    icon: <PageviewIcon sx={{ fontSize: 40 }} />,
    title: 'בניית דפי נחיתה',
    description: 'דף נחיתה שממיר – עם תצוגה מדויקת, קריאה לפעולה ברורה וחיבור לוואטסאפ או טופס.',
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 40 }} />,
    title: 'עיצוב מותאם אישית',
    description: 'לא תבנית מוכנה – אלא עיצוב שמתאים בדיוק לעסק שלך, כולל צבעים, טיפוגרפיה ותמונות.',
  },
  {
    icon: <SmartDisplayIcon sx={{ fontSize: 40 }} />,
    title: 'שירותים דיגיטליים משלימים',
    description: 'חיבור למערכות דיוור, יצירת פוסטים ממומנים, עזרה בכתיבת תוכן ועריכת וידאו קצר.',
  },
];

export function Services(): JSX.Element {
  return (
    <Box
      id="services"
      sx={{
        px: { xs: 2, sm: 4, md: 8 },
        py: 8,
        direction: 'rtl',
        backgroundColor: 'background.default',
        color: 'text.primary',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" fontWeight={700} mb={4} color="primary.main">
        מה אני מציע?
      </Typography>

      <Typography variant="body1" color="text.secondary" mb={6}>
        שירותים דיגיטליים מדויקים שמתאימים לעסק שלך – משלב הרעיון ועד לעיצוב, פיתוח והשקה.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                p: 3,
                height: '100%',
                borderRadius: 4,
                boxShadow: 3,
                backgroundColor: 'background.paper',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6,
                },
              }}
            >
              <Box color="primary.main" mb={2}>
                {service.icon}
              </Box>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {service.description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
