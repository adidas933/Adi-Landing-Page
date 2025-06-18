import React from 'react';
import { Box, Typography, Link, Card, CardContent } from '@mui/material';
import { studioExtrasGrouped } from '../../Utils/Variables/Variables';

export function StudioExtras(): JSX.Element {
  return (
    <Box id="studioExtras" sx={{ maxWidth: 900, mx: 'auto', px: { xs: 3, md: 6 } }}>
      <Card elevation={3} sx={{ borderRadius: 4 }}>
        <CardContent sx={{ direction: 'rtl', textAlign: 'right', p: { xs: 3, md: 5 } }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
            עוד בסטודיו שלנו
          </Typography>

          {studioExtrasGrouped.map(({ instructor, phone, activities }) => (
            <Box key={instructor} sx={{ mb: 5 }}>
              {activities.map((activity, index) => (
                <Typography key={index} variant="h6" sx={{ fontWeight: 500 }}>
                  {activity}
                </Typography>
              ))}

              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                בהנחיית {instructor}
                <Box component="span" sx={{ mx: 1 }}>
                  |
                </Box>
                <Link
                  href={`tel:${phone.replace(/-/g, '')}`}
                  underline="hover"
                  sx={{ ml: 1 }}
                >
                  {phone}
                </Link>
              </Typography>
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
}
