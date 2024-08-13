import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const ChatResponseProcessing = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
      }}
    >
      <CircularProgress size={24} />
      <Typography variant="body2" sx={{ marginLeft: 1 }}>
        Processing...
      </Typography>
    </Box>
  );
};

export default ChatResponseProcessing;
