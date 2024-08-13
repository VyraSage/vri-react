import React from 'react';
import { Box, Typography } from '@mui/material';

const VriCopilotPage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
      }}
    >
      <Typography variant="h2">VRI Copilot Assistant</Typography>
      <Typography variant="body1">Hello World</Typography>
    </Box>
  );
};

export default VriCopilotPage;
