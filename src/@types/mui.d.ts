// types/mui-theme.d.ts (מומלץ למקם בקובץ נפרד בספריית types)

import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    orange: Palette['primary'];
    lightBlue: Palette['primary'];
    brown: Palette['primary'];
    white: Palette['primary'];
  }

  interface PaletteOptions {
    orange?: PaletteOptions['primary'];
    lightBlue?: PaletteOptions['primary'];
    brown?: PaletteOptions['primary'];
    white?: PaletteOptions['primary'];
  }
}
