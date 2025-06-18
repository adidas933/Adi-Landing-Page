import { createTheme } from '@mui/material';
import Arrow from '../../Home/Arrow';

export const studioAddress = 'הרקפת 5 אשקלון';

export const googleMapsLink = `https://www.google.com/maps?q=${encodeURIComponent(
  studioAddress
)}`;

export const wazeLink = `https://www.waze.com/ul?q=${encodeURIComponent(
  studioAddress
)}`;

export interface InstructorActivities {
  instructor: string;
  activities: string[];
}

export const settings = {
  
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  fade: true,
  nextArrow: <Arrow direction="right" />,
  prevArrow: <Arrow direction="left" />,
};

export const CarouselList = [
  {
    name: 'about',
    image: 'https://res.cloudinary.com/dsi4cjpvz/image/upload/v1749066312/about_ytrkcl.jpg',
    header: 'יוגה באשקלון – יוגה ברקפת',
    subHeader: 'שיעורים לילדים, נשים ומבוגרים בסטודיו חם ומקצועי',
    buttonLink: 'about',
    buttonName: 'למד עוד',
    alt: 'סטודיו יוגה ברקפת באשקלון – תרגול לנשים וילדים',
  },
  {
    name: 'shivanandaYoga',
    image: 'https://res.cloudinary.com/dsi4cjpvz/image/upload/v1749066372/shivanandaYoga_tnvflj.jpg',
    header: 'תרגלו יוגה קלאסית באשקלון',
    subHeader: 'שילוב של תנועה, נשימה וריכוז פנימה בשיטת שיבננדה',
    buttonLink: 'shivanandaYoga',
    buttonName: 'לשיעורי שיבננדה',
    alt: 'תרגול יוגה שיבננדה באשקלון – נשימה ותנועה',
  },
  {
    name: 'contact',
    image: 'https://res.cloudinary.com/dsi4cjpvz/image/upload/v1749066324/contact_vy7ezg.jpg',
    header: 'מעוניינים להצטרף?',
    subHeader: 'אנחנו כאן לכל שאלה – צרו קשר עכשיו',
    buttonLink: 'contact',
    buttonName: 'צור קשר',
    alt: 'צור קשר עם סטודיו יוגה באשקלון – יוגה ברקפת',
  },
  {
    name: 'reversing',
    image: 'https://res.cloudinary.com/dsi4cjpvz/image/upload/v1749066347/meditation_xy8bba.jpg',
    header: 'פסק זמן לעצמך',
    subHeader: 'סדנאות ייחודיות לחיבור נשימה ונפש באשקלון',
    buttonLink: 'extraActivities',
    buttonName: 'למד עוד',
    alt: 'מדיטציה וסדנאות נשימה בסטודיו יוגה ברקפת',
  },
];


export const testimonials = [
  {
    name: 'דנה',
    description: 'איך היוגה עזרה לי להתמודד עם חרדה ולחזק את הגוף.',
    youtubeId: 'wXYZ1234567', // החלף ב-ID של הסרטון
  },
  {
    name: 'אורן',
    description: 'היוגה בסטודיו שינתה לי את החיים אחרי פריצת דיסק.',
    youtubeId: 'Abc9876543',
  },
];

export const classes = [
  {
    title: 'יוגה שיבננדה קבוצתי',
    description:
      'שיעור יוגה מסורתי שמשלב נשימה, תנוחות והרפיה מלאה לפי שיטת שיבננדה.',
    image: 'https://res.cloudinary.com/dsi4cjpvz/image/upload/v1749066378/sivananda-group_zxum74.jpg',
    alt: 'שיעור יוגה שיבננדה קבוצתי לנשים בסטודיו באשקלון',
  },
  {
    title: 'יוגה תרפיה פרטני',
    description:
      'שיעור מותאם אישית לצרכים הרגשיים והגופניים שלך – בקצב אישי ובהקשבה עמוקה.',
    image: 'https://res.cloudinary.com/dsi4cjpvz/image/upload/v1749066384/therapy-yoga_zb0qcp.jpg',
    alt: 'יוגה תרפיה פרטנית עם מורה מוסמכת באשקלון',
  },
  {
    title: 'יוגה בשניים',
    description:
      'יום נישואין, יום הולדת, חיזוק הקשר הזוגי – מגע, חיבור והרבה אהבה.',
    image: 'https://res.cloudinary.com/dsi4cjpvz/image/upload/v1749066394/yoga-for-two_rt5dbz.jpg',
    alt: 'תרגול זוגי של יוגה – חיבור וקשר דרך תנועה ונשימה',
  },
  {
    title: 'יוגה צחוק',
    description:
      'יוגה צחוק היא שיטה מהנה ויעילה לשחרור מתחים באמצעות צחוק מודרך. הזמינו אותנו לסדנאות מותאמות לעובדים, גננות, ימי גיבוש ועוד.',
    image: '/images/laughter-yoga.png',
    alt: 'סדנת יוגה צחוק – פעילות מהנה ומשחררת',
  },
  {
    title: 'יוגה לילדים',
    description:
    'שיעור חווייתי לילדים עם תרגילי נשימה, תנועה, דמיון ומשחק – מפתח ריכוז, יצירתיות ותחושת רוגע בדרך מהנה ונעימה.',
    image: 'https://res.cloudinary.com/dsi4cjpvz/image/upload/v1749066405/yoga-kids_howvbl.jpg', // עדכן לקישור שלך אם שונה
    alt: 'שיעור יוגה לילדים באשקלון עם תנועה, משחק ודמיון',
  },
];

export const galleryImages = [
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery1.jpg",
    alt: "שיעור יוגה לנשים באשקלון",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery2.jpg",
    alt: "סטודיו יוגה ברקפת – תרגול שיבננדה",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery3.jpg",
    alt: "מתרגלות יוגה בערב באווירה נעימה",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery4.jpg",
    alt: "תרגול יוגה תרפיה פרטני באשקלון",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery5.jpg",
    alt: "מזרני יוגה מסודרים בסטודיו באשקלון",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery6.jpg",
    alt: "מנוחה בסוף שיעור יוגה בשאוואסנה",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery7.jpg",
    alt: "שיעור יוגה עם גלית – חיבור לגוף ולנשימה",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery8.jpg",
    alt: "מתרגלות יוגה בקבוצות קטנות באשקלון",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery9.jpg",
    alt: "מתיחה ביוגה שיבננדה – סטודיו ברקפת",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery10.jpg",
    alt: "שיעור יוגה לנשים אחרי לידה",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery11.jpg",
    alt: "יוגה בבוקר – התחלה רגועה ליום",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery12.jpg",
    alt: "סטודיו יוגה באווירה ביתית באשקלון",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery13.jpg",
    alt: "תרגול נשימות ביוגה – פראניאמה",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery14.jpg",
    alt: "יוגה לנשים בכל הגילאים באשקלון",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery15.jpg",
    alt: "תרגול מדיטציה והרפיה בסטודיו",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery16.jpg",
    alt: "אימון יוגה לנשמה ולגוף",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery17.jpg",
    alt: "שיעור ערב – יוגה באור נרות",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery18.jpg",
    alt: "מתרגלות יוגה עם חיוך ורוגע",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery19.jpg",
    alt: "תרגול יוגה על רקע מוסיקה רגועה",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery20.jpg",
    alt: "שיעור ויניאסה יוגה באשקלון",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery21.jpg",
    alt: "רגעים של שקט פנימי – יוגה תרפיה",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery22.jpg",
    alt: "יוגה לנשים עסוקות – נשימה מחדש",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery23.jpg",
    alt: "תרגול פתיחת לב – יוגה נשית",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery24.jpg",
    alt: "פינה רגועה באשקלון לתרגול יוגה",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery25.jpg",
    alt: "שיעור קבוצתי עם אווירה חמה ותומכת",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery26.jpg",
    alt: "יוגה באשקלון – לאזן גוף ונפש",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery27.jpg",
    alt: "תרגול תנוחות עמידה ביוגה",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery28.jpg",
    alt: "שיעור אישי בסטודיו יוגה ברקפת",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery29.jpg",
    alt: "יוגה ברקפת – סטודיו נשי ומכיל",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery30.jpg",
    alt: "יוגה בערסלים – תרגול תומך",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery31.jpg",
    alt: "תרגול פתיחת אגן לנשים",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery32.jpg",
    alt: "שיעור בוקר – יוגה לקראת יום חדש",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery33.jpg",
    alt: "יוגה בקיץ – סטודיו ממוזג ונעים",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery34.jpg",
    alt: "תנוחות יוגה עם תמיכה ואביזרים",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery35.jpg",
    alt: "שיעור יוגה עם מגע טיפולי",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery36.jpg",
    alt: "תנוחת עמידת ראש – מתרגלות מתקדמות",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery37.jpg",
    alt: "תרגול עמידות כתפיים בסטודיו",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery38.jpg",
    alt: "מדיטציית סוף שיעור – יוגה באשקלון",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery39.jpg",
    alt: "סטודיו יוגה לנשים בדרום העיר אשקלון",
  },
  {
    src: "https://res.cloudinary.com/dsi4cjpvz/image/upload/w_800,f_auto/gallery40.jpg",
    alt: "סטודיו יוגה באשקלון – תרגול קבוצתי לנשים",
  },
];



export const mainMenu = [
  { label: 'עלינו', to: 'about' },
  { label: 'יוגה שיבננדה', to: 'shivanandaYoga' },
  { label: 'השיעורים שלנו', to: 'classes' },
  // { label: 'מתאמנים מספרים', to: 'testimonials' },
  { label: 'מיקום', to: 'location' },
  { label: 'סדנאות', to: 'extraActivities' },
  { label: 'גלריה', to: 'gallery' },
  { label: 'עוד בסטודיו שלנו', to: 'studioExtras' },
  { label: 'צור קשר', to: 'contact' },
];

export const studioExtrasGrouped = [
  {
    instructor: 'נועה סיטבון',
    phone: '054-3299125',
    activities: ['יוגה אשטנגה ויניאסה', 'יוגה ערסלים', 'אמבטיית קרח'],
  },
  {
    instructor: 'לין ניימן',
    phone: '050-6661057',
    activities: [
      'פילאטיס מזרן',
      'פילאטיס מכשירים',
      'פילאטיס שיעור בר',
      'הכשרת מדריכות פילאטיס',
    ],
  },
  {
    instructor: 'אילנית תנעמי',
    phone: '053-8827993',
    activities: ['יוגה לילדים'],
  },
];

interface Activity {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  buttonText: string;
  whatsappMessage: string;
  whatsappPhone: string;
  color?: 'primary' | 'secondary';
}

export const extraActivitiesData: Activity[] = [
  {
    id: 'reversing',
    title: 'ריברסינג',
    shortDescription:
      'ריברסינג הוא תהליך נשימה מודעת ועצמתית, המסייע בשחרור רגשות מודחקים...',
    description:
      'ריברסינג (Rebirthing) הוא תהליך נשימה מודעת ועצמתית, המסייע בשחרור רגשות מודחקים, טראומות וזיכרונות חבויים מהגוף והנפש. זוהי סדנה חווייתית שמאפשרת ריפוי עמוק, שקט פנימי, תחושת הקלה והתחדשות. במהלך הסדנה נלמד כיצד להשתמש בנשימה כדי להתחבר לעוצמה הפנימית, להרחיב את המודעות, ולהזרים חיים חדשים פנימה. מתאימה לכל אדם שמעוניין לעבור תהליך עומק מעצים ומרפא, בליווי תומך ובסביבה בטוחה.',
    buttonText: 'רוצה להשתתף',
    whatsappMessage: 'שלום גלית, אני מעוניינ/ת בסדנת ריברסינג, אפשר מידע נוסף?',
    whatsappPhone: '972506660706',
    color: 'primary',
  },
  {
    id: 'saturday',
    title: 'תרגולי יוגה בשבת',
    shortDescription:
      'בשבת בבוקר – כשהזמן נפתח ואנרגיית הסופ"ש מזמינה שקט והתכנסות...',
    description:
      'בשבת בבוקר – כשהזמן נפתח ואנרגיית הסופ"ש מזמינה שקט והתכנסות – אנו נפגשים לתרגול עומק משותף. זהו מרחב להעמקה, הרפיה, תנועה ונשימה בקצב איטי ומדויק, עם דגש על חיבור פנימי והזנה.',
    buttonText: 'רוצה להצטרף',
    whatsappMessage:
      'שלום גלית, אני מתעניינ/ת בתרגול יוגה בשבת, אפשר מידע נוסף?',
    whatsappPhone: '972506660706',
    color: 'primary',
  },
  {
    id: 'meditation',
    title: 'מדיטציה',
    shortDescription:
      'סדנה עמוקה לעצירת מרוץ החיים ולהתחברות פנימה דרך תרגול מיינדפולנס...',
    description:
      'סדנת מדיטציה עמוקה המזמינה אותך לעצור את מרוץ החיים, ולהתחבר פנימה דרך תרגול מיינדפולנס, נשימות, דמיון מודרך וכלים נוספים. במהלך הסדנה נלמד איך להרגיע את המיינד, לשחרר מתחים, וליצור שקט פנימי שנשאר איתנו גם ביומיום. מתאימה למתחילים וגם למתרגלים מנוסים. כל מפגש מועבר באהבה, הקשבה, ואווירה תומכת ונעימה.',
    buttonText: 'רוצה להצטרף',
    whatsappMessage:
      'שלום גלית, אני מעוניינ/ת להצטרף לסדנת המדיטציה, אפשר פרטים נוספים?',
    whatsappPhone: '972506660706',
    color: 'primary',
  },
];


export const theme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'light',
    primary: {
      main: '#203a43', // dark blue
      contrastText: '#fff', // white text
    },
    background: {
      default: '#bfdeff',
      paper: '#bfdeff',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#4f4f4f',
    },
  },
  typography: {
    fontFamily: 'Heebo, Arial, sans-serif',
    button: {
      fontWeight: 'bold',
      fontSize: '0.95rem',
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: '#203a43',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '0.95rem',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#0f2027',
          },
        },
        // optionally, you can add variants if you want outlined/secondary differently
        containedSecondary: {
          backgroundColor: '#203a43',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#0f2027',
          },
        },
      },
    },
  },
});