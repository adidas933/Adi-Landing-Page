import React, { useState } from 'react';
import { Box, Button, Typography, Card } from '@mui/material';
import { extraActivitiesData } from '../../Utils/Variables/Variables';

export function ExtraActivities(): JSX.Element {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  );

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Box
      id="extraActivities"
      sx={{ maxWidth: 1100, mx: 'auto', px: { xs: 3, md: 6, lg: 8 } }}
    >
      <Card elevation={3} sx={{ borderRadius: 4, p: { xs: 3, md: 5 } }}>
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: 'bold',
            textAlign: 'right',
            direction: 'rtl',
          }}
        >
          סדנאות
        </Typography>

        {extraActivitiesData.map((activity) => {
          const isExpanded = expandedItems[activity.id];

          return (
            <Box
              key={activity.id}
              id={activity.id}
              sx={{
                mb: 4,
                direction: 'rtl',
                textAlign: 'right',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                {activity.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 2, fontSize: '1.05rem', lineHeight: 2 }}
              >
                {isExpanded ? activity.description : activity.shortDescription}
              </Typography>

              <Box display="flex" gap={2} flexWrap="wrap">
                <Button
                  onClick={() => toggleItem(activity.id)}
                  color="secondary"
                  variant="text"
                  sx={{ px: 1 }}
                >
                  {isExpanded ? 'קרא פחות' : 'קרא עוד'}
                </Button>

                <Button
                  href="#contact"
                  variant="contained"
                  sx={{
                    backgroundColor: '#203a43',
                    color: 'white',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: '#0f2027',
                    },
                  }}
                >
                  צור קשר
                </Button>
              </Box>
            </Box>
          );
        })}
      </Card>
    </Box>
  );
}
